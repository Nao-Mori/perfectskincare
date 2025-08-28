import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const { name, image, category } = await req.json();

    await prisma.product.create({ 
      data: { name, image, category }
    });

    return NextResponse.json({ name, image, category }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}