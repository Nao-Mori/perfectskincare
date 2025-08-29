import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { productId, rate, skinType, comment, concerns } = body;

  const review = await prisma.review.create({
    data: {
      rate,
      skinType,
      comment,
      product: {
        connect: { id: productId },
      },
    },
  });

  if (concerns && concerns.length > 0) {
    await prisma.concern.createMany({
      data: concerns.map((value: string) => ({
        value,
        reviewId: review.id,
      })),
    });
  }

  return NextResponse.json({ review }, { status: 201 });
}
