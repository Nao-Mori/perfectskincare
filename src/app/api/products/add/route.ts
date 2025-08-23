import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { name, image } = body;

  try {
    const product = await prisma.product.create({
      data: {
        name,
        image,
      },
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (e: any) {
    if (e.code === 'P2002') {
      return NextResponse.json({ error: 'Name or image duplicate!' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}