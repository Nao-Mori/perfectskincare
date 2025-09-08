export interface Review {
  rate: number; // 1–10
  skinType: number; // 1 very dry, 8 very oily
  concerns: string[];
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  reviews: Review[];
}

export interface ProductMini {
  id: number;
  name: string;
  image: string;
  category: string;
  seenAt?: number
}

export type UserInput = {
  concerns: string[];
  skinType: number;
  categories: string[];
};

export const products: Product[] = [
  {
    id: 270002,
    name: 'CeraVe Moisturizing Cream',
    image: 'uploads/1756450115635-0a0f8f64-abc9-4d70-b666-6101429b6cd5.webp',
    category: 'cream',
    reviews: [
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'sensitivity'],
        comment: 'Super hydrating, calms redness.',
      },
      {
        rate: 8,
        skinType: 4,
        concerns: ['dryness', 'lightWrinkles'],
        comment: 'Good for night use.',
      },
      {
        rate: 7,
        skinType: 3,
        concerns: ['sensitivity', 'dryness'],
        comment: 'Texture is rich but not greasy.',
      },
      {
        rate: 9,
        skinType: 2,
        concerns: ['dryness', 'darkSpots'],
        comment: 'Perfect for winter dry patches.',
      },
      {
        rate: 8,
        skinType: 5,
        concerns: ['redness', 'sensitivity'],
        comment: 'Lightweight yet nourishing.',
      },
    ],
  },
  {
    id: 300001,
    name: 'La Roche-Posay Toleriane Purifying Foaming Cleanser',
    image: 'uploads/1756453461585-1da63b4f-6291-4654-a124-7d98d24ba29c.webp',
    category: 'faceWash',
    reviews: [
      {
        rate: 8,
        skinType: 7,
        concerns: ['oiliness', 'acne'],
        comment: 'Gently cleans without over-drying.',
      },
      {
        rate: 7,
        skinType: 6,
        concerns: ['acne', 'pores'],
        comment: 'Helps with breakouts over time.',
      },
      {
        rate: 9,
        skinType: 8,
        concerns: ['oiliness', 'sensitivity'],
        comment: 'Very gentle yet effective.',
      },
      {
        rate: 6,
        skinType: 6,
        concerns: ['acne', 'unevenTexture'],
        comment: 'A bit foamy for sensitive skin.',
      },
      {
        rate: 8,
        skinType: 7,
        concerns: ['pores', 'oiliness'],
        comment: 'Great morning cleanser.',
      },
    ],
  },
  {
    id: 270003,
    name: 'Neutrogena Hydro Boost Water Gel',
    image: 'uploads/1756453311500-08cb0807-ebcd-408e-8565-261d9ad837f7.webp',
    category: 'cream',
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: ['lightWrinkles', 'dryness'],
        comment: 'Instant hydration, no residue.',
      },
      {
        rate: 7,
        skinType: 5,
        concerns: ['dryness', 'unevenTexture'],
        comment: 'Light gel absorbs fast.',
      },
      {
        rate: 9,
        skinType: 4,
        concerns: ['dryness', 'lightWrinkles'],
        comment: 'Good under makeup.',
      },
      {
        rate: 6,
        skinType: 6,
        concerns: ['pores', 'acne'],
        comment: 'May cause breakouts on oily skin.',
      },
      {
        rate: 8,
        skinType: 2,
        concerns: ['dryness'],
        comment: 'Great for dry to combination.',
      },
    ],
  },
];
