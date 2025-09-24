import 'dotenv/config';

import { PrismaClient } from '@prisma/client';
import { Review } from '@/types/core';

const prisma = new PrismaClient();

// addMany()
// .catch((e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   await prisma.$disconnect();
// });

async function main(pro: {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  category: string | undefined;
  reviews: Review[];
}) {
  // Step 1: Create a Product
  let id = pro.id;
  if (!id && pro.name && pro.image && pro.category) {
    const product = await prisma.product.create({
      data: {
        name: pro.name,
        image: pro.image,
        category: pro.category,
      },
    });
    id = product.id;
  }

  // Step 2: Create a Review
  for (const review of pro.reviews) {
    const reviewDoc = await prisma.review.create({
      data: {
        rate: review.rate,
        skinType: review.skinType,
        comment: review.comment || null,
        product: {
          connect: { id },
        },
      },
    });
    // Step 3: Add Concerns to that Review
    const concerns = review.concerns;
    await prisma.concern.createMany({
      data: concerns.map((value: string) => ({
        value,
        reviewId: reviewDoc.id,
      })),
    });
  }

  console.log('Seed completed');
}

export const seedReviews: Review[] = [
  {
    rate: 9,
    skinType: 3,
    concerns: ['darkSpots', 'lightWrinkles', 'unevenTexture'],
    comment: 'トーンアップが早い。キメが整って、小じわも目立ちにくくなった。',
  },
  {
    rate: 9,
    skinType: 4,
    concerns: ['darkSpots', 'hyperPigmentation', 'redness'],
    comment:
      'Brightens fast and evens tone; redness after workouts calms down too.',
  },
  {
    rate: 8,
    skinType: 2,
    concerns: ['dryness', 'lightWrinkles', 'sensitivity'],
    comment: '초반 살짝 따끔했지만 금방 적응. 속부터 촉촉+광채 살아나요.',
  },
  {
    rate: 9,
    skinType: 5,
    concerns: ['unevenTexture', 'lightWrinkles', 'darkSpots'],
    comment:
      'Smoother texture by week 2; makeup sits better and spots fade gradually.',
  },
  {
    rate: 8,
    skinType: 1,
    concerns: ['dryness', 'deepWrinkles', 'darkSpots'],
    comment: 'しっとり感あり。ハリが出て、くすみも少しずつクリアに。',
  },
  {
    rate: 8,
    skinType: 6,
    concerns: ['oiliness', 'pores', 'redness'],
    comment: '흡수는 빠르지만 살짝 점성 있음. 그래도 톤업/진정 효과 확실.',
  },
  {
    rate: 7,
    skinType: 7,
    concerns: ['oiliness', 'acne', 'blackheads'],
    comment:
      'Good glow but a bit heavy for very oily skin; metallic scent lingers.',
  },
  {
    rate: 9,
    skinType: 4,
    concerns: ['darkSpots', 'lightWrinkles', 'hyperPigmentation'],
    comment: '色ムラが均一に。ハリ感アップで朝の肌が違う。価格以外は満点級。',
  },
  {
    rate: 8,
    skinType: 3,
    concerns: ['redness', 'acneScars', 'unevenTexture'],
    comment: 'Fades post-acne marks and smooths texture without irritating.',
  },
  {
    rate: 8,
    skinType: 2,
    concerns: ['lightWrinkles', 'deepWrinkles', 'darkSpots'],
    comment: '자극 적고 광채 피부로. 비싼 게 흠이지만 결과는 납득.',
  },
];

const products = [
  {
    id: 330089,
    name: undefined,
    image: undefined,
    category: undefined,
    reviews: seedReviews,
  },
];
for (const i in products) {
  main(products[i])
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
