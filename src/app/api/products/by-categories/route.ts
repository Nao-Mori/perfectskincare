import { Product } from '@/data/products';
import { mapProducts, productSelect } from '@/lib/mappers/product';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { categories, limit = 10 } = (await req.json()) as {
    categories: string[];
    limit: number;
  };

  try {
    const entries = await Promise.all(
      categories.map(async (cat) => {
        const rows = await prisma.product.findMany({
          where: { category: cat },
          ...productSelect,
          take: Math.min(Number(limit) || 10, 100),
        });
        return [cat, mapProducts(rows)] as const;
      })
    );

    const byCategory = Object.fromEntries(entries) as Record<string, Product[]>;

    const hasAny = Object.values(byCategory).some((arr) => arr.length > 0);
    if (!hasAny) {
      return NextResponse.json(
        { error: 'No products found for requested categories' },
        { status: 404 }
      );
    }

    console.log(byCategory);

    return NextResponse.json(byCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
