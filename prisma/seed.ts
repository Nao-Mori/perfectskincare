import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { manyProducts } from '../src/data/products';
import { concerns } from '../src/data/concerns';

const prisma = new PrismaClient();

interface ReviewSeed {
  rate: number;
  skinType: number;
  comment?: string;
  concerns: string[];
}

// addMany()
// .catch((e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });

async function addProduct(pro: any) {
  // Step 1: Create a Product
  let id = pro.id;
  if (pro.name && pro.image && pro.category) {
    const product = await prisma.product.create({
      data: {
        name: pro.name,
        image: pro.image.startsWith('uploads/')
          ? pro.image
          : `uploads/${pro.image}`,
        category: pro.category,
      },
    });
    id = product.id;
  }

  if (pro.reviews) {
    for (const review of pro.reviews as ReviewSeed[]) {
      const uniqueSlugs = [...new Set(review.concerns ?? [])];
      try {
        const result = await prisma.review.create({
          data: {
            rate: review.rate,
            skinType: review.skinType,
            comment: review.comment ?? null,
            product: { connect: { id } },
            concerns: {
              connect: uniqueSlugs.map((slug) => ({ slug })),
            },
          },
        });
        console.log(result.id);
      } catch (err) {
        console.error(
          'FAILED review for product:',
          pro.name,
          'comment:',
          review.comment
        );
        console.error(err);
        // optionally continue instead of breaking
      }
    }
  }

  console.log('Seed completed');
}

const main = async () => {
  await Promise.all(
    concerns.map((slug) =>
      prisma.concern.upsert({
        where: { slug },
        update: {},
        create: { slug },
      })
    )
  );
  const products = manyProducts;
  const seen = new Set<string>();
  for (const i in products) {
    const key = String(products[i].name ?? '')
      .trim()
      .toLowerCase()
      .normalize('NFC')
      .replace(/\u200B/g, '');
    if (seen.has(key)) console.log(key);
    else seen.add(key);
    await addProduct(products[i])
      .catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  }
};

main();
