import { mapProducts, productSelect } from '@/lib/mappers/product';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { categories } = (await req.json()) as { categories: string[] };

  try {
    const products = await Promise.all(
      categories.map(async (cat) => {
        const rows = await prisma.product.findMany({
          where: { category: cat },
          ...productSelect
        });
        return mapProducts(rows);
      })
    )

    if (!products?.length) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
