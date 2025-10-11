import { auth } from '@/lib/auth';
import { mapProduct, productSelect } from '@/lib/mappers/product';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const userId = session?.user?.id ?? null;
  const { id } = await params;

  try {
    const row = await prisma.product.findUnique({
      where: { id: Number(id) },
      ...productSelect,
    });

    if (!row) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const product = mapProduct(row);

    const fav = userId
      ? await prisma.favorite.findUnique({
          where: { userId_productId: { userId, productId: Number(id) } },
          select: { userId: true },
        })
      : null;

    return NextResponse.json(
      { ...product, isFavorited: !!fav },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
