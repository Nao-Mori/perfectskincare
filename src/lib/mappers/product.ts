import { Prisma } from '@prisma/client';

export const productSelect = {
  select: {
    id: true,
    name: true,
    image: true,
    category: true,
    reviews: {
      select: {
        rate: true,
        skinType: true,
        comment: true,
        concerns: { select: { value: true } },
      },
    },
  },
} satisfies Prisma.ProductFindManyArgs;

export type ProductRow = Prisma.ProductGetPayload<typeof productSelect>;

export type ProductDTO = {
  id: number;
  name: string;
  image: string;
  category: string;
  reviews: {
    rate: number;
    skinType: number;
    comment: string;
    concerns: string[];
  }[];
};

export function mapProduct(row: ProductRow): ProductDTO {
  return {
    id: row.id,
    name: row.name,
    image: row.image,
    category: row.category,
    reviews: row.reviews.map((r) => ({
      rate: r.rate,
      skinType: r.skinType,
      comment: r.comment ?? '',
      concerns: r.concerns.map((c) => c.value),
    })),
  };
}

export function mapProducts(rows: ProductRow[]): ProductDTO[] {
  return rows.map(mapProduct);
}
