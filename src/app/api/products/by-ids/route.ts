import { mapProducts, productSelect } from '@/lib/mappers/product';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { ids } = (await req.json()) as { ids: number[] };
  const norm = ids.map((v) => (typeof v === 'string' ? Number(v) : v));

  try {
    const products = await prisma.product.findMany({
      where: { id: { in: norm } },
      ...productSelect,
    });

    if (!products?.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(
      { products: mapProducts(products) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
