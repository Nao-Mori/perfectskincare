import 'dotenv/config'; 
import { manyProducts, Product } from '../src/data/products';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function addMany() {
  //STEP 1: Create Many Products
  const pros = await prisma.product.createMany({
    data: manyProducts.map((p)=> ({ ...p, image: `uploads/${p.image}` })),
  });
}

// addMany()
// .catch((e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });

async function main(pro: Product) {

  // Step 1: Create a Product
  const product = await prisma.product.create({
    data: {
      name: pro.name,
      image: pro.image,
      category: pro.category,
    },
  });

  // Step 2: Create a Review
  for (const review of pro.reviews) {
    const reviewDoc = await prisma.review.create({
      data: {
        rate: review.rate,
        skinType: review.skinType,
        comment: review.comment || null,
        product: {
          connect: { id: pro.id },
        },
      },
    });
    // Step 3: Add Concerns to that Review
    const concerns = review.concerns;
    await prisma.concern.createMany({
      data: concerns.map(({ value }: any) => ({
        value,
        reviewId: reviewDoc.id,
      })),
    });
  }

  

  console.log('Seed completed');
}
// for (const i in products) {
//   main(products[i])
//     .catch((e) => {
//       console.error(e);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });
// }
