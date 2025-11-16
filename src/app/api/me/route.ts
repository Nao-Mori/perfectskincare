import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { ProductMini } from '@/types/core';

export const runtime = 'nodejs';

export type MePreference = {
  skinType: number | null;
  concerns: string[];
} | null;

export type MeFavorite = {
  productId: number;
  userId: string;
  product: {
    id: number;
    name: string;
    image: string;
    category: string;
  };
};

export type MeResponse = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  };
  preference: MePreference;
  favorites: ProductMini[];
  favoritesTotal: number;
  pagination: { take: number };
};

export async function GET(_req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const take_default = 50;
  try {
    const me = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        preference: {
          select: {
            skinType: true,
            concerns: { select: { slug: true } },
          },
        },
        favorites: {
          orderBy: { productId: 'desc' },
          take: take_default,
          include: {
            product: {
              select: {
                id: true,
                name: true,
                image: true,
                category: true,
              },
            },
          },
        },
        _count: { select: { favorites: true } },
      },
    });

    if (!me) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const favorites = me.favorites.map(({ product }: MeFavorite) => ({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
    }));
    const preference = me.preference
      ? {
          skinType: me.preference.skinType ?? null,
          concerns: me.preference.concerns.map((c) => c.slug),
        }
      : null;

    return NextResponse.json({
      user: {
        id: me.id,
        name: me.name,
        email: me.email,
        image: me.image,
      },
      preference,
      favorites,
      favoritesTotal: me._count.favorites,
      pagination: { take: take_default },
    } as MeResponse);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
