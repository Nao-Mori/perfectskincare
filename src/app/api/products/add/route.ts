import { PrismaClient, Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';
import { ProductMini } from '@/types/core';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const { name, image, category } = await req.json();

    const { id } = await prisma.product.create({
      data: { name, image, category },
    });

    const productData = { name, image, category, id } as ProductMini;

    return NextResponse.json(productData, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'This product already exists!' },
          { status: 400 }
        );
      }
    }
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
