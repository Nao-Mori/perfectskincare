//import { Product } from '../src/data/products';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const firstProducts = {
  id: 1,
  name: "CeraVe Moisturizing Cream",
  image: "https://i5.walmartimages.com/seo/CeraVe-Moisturizing-Cream-Face-Moisturizer-Body-Lotion-for-Normal-to-Very-Dry-Skin-12-oz_2fae0aa2-a8af-4ba5-9033-a61e0f1f1e4f.0f1f517b1d4447237c2f3f696f05caad.jpeg",
  reviews: [
    {
      rate: 9,
      skinType: 2,
      concerns: [
        { id: 1, value: "dryness" },
        { id: 2, value: "sensitivity" }
      ],
      comment: "Super hydrating, calms redness."
    },
    {
      rate: 8,
      skinType: 4,
      concerns: [
        { id: 1, value: "dryness" },
        { id: 2, value: "hydration" }
      ],
      comment: "Good for night use."
    },
    {
      rate: 7,
      skinType: 3,
      concerns: [
        { id: 1, value: "sensitivity" },
        { id: 2, value: "hydration" }
      ],
      comment: "Texture is rich but not greasy."
    },
    {
      rate: 9,
      skinType: 2,
      concerns: [
        { id: 1, value: "dryness" }
      ],
      comment: "Perfect for winter dry patches."
    },
    {
      rate: 8,
      skinType: 5,
      concerns: [
        { id: 1, value: "redness" },
        { id: 2, value: "sensitivity" }
      ],
      comment: "Lightweight yet nourishing."
    }
  ]
}

async function main(pro: any) { //IDK why importing TYPE doesn't work, sorry!!
  // Step 1: Create a Product
  const product = await prisma.product.create({
    data: {
      name: pro.name,
      image: pro.image
    },
  });

  // Step 2: Create a Review
  for(const review of pro.reviews) {
    const reviewDoc = await prisma.review.create({
      data: {
      rate: review.rate,
      skinType: review.skinType,
      comment: review.comment || null,
        product: {
            connect: { id: product.id },
        },
      },
    });
    // Step 3: Add Concerns to that Review
    const concerns = review.concerns;
    await prisma.concern.createMany({
        data: concerns.map(({ value }:any)=> ({ value, reviewId: reviewDoc.id })),
    });
  }

  console.log('🌱 Seed completed!');
}

main(firstProducts)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });