import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { productId, rate, skinType, comment, concerns } = body;

  const slugs: string[] = Array.isArray(concerns)
    ? [
        ...new Set(
          concerns.filter(
            (s): s is string => typeof s === 'string' && s.trim() !== ''
          )
        ),
      ]
    : [];
  try {
    const review = await prisma.review.create({
      data: {
        rate,
        skinType,
        comment,
        product: {
          connect: { id: productId },
        },
        concerns: slugs.length
          ? {
              connectOrCreate: slugs.map((slug) => ({
                where: { slug },
                create: { slug },
              })),
            }
          : undefined,
      },
    });

    return NextResponse.json({ review }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add favorite' },
      { status: 500 }
    );
  }
}
