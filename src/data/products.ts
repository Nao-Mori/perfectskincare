export interface Review {
  rate: number; // 1–10
  skinType: number; // 1 very dry, 8 very oily
  concerns: { id: number, value: string }[];
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "CeraVe Moisturizing Cream",
    image: "https://i5.walmartimages.com/seo/CeraVe-Moisturizing-Cream-Face-Moisturizer-Body-Lotion-for-Normal-to-Very-Dry-Skin-12-oz_2fae0aa2-a8af-4ba5-9033-a61e0f1f1e4f.0f1f517b1d4447237c2f3f696f05caad.jpeg",
    category: "cream",
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
          { id: 2, value: "lightWrinkles" }
        ],
        comment: "Good for night use."
      },
      {
        rate: 7,
        skinType: 3,
        concerns: [
          { id: 1, value: "sensitivity" },
          { id: 2, value: "dryness" }
        ],
        comment: "Texture is rich but not greasy."
      },
      {
        rate: 9,
        skinType: 2,
        concerns: [
          { id: 1, value: "dryness" },
          { id: 2, value: "darkSpots" }
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
  },
  {
    id: 2,
    name: "La Roche-Posay Toleriane Purifying Foaming Cleanser",
    image: "https://i5.walmartimages.com/asr/739e2b41-8745-4f64-8913-15db54840857.6020ec6b3add10d191904de67af7141c.jpeg",
    category: "faceWash",
    reviews: [
      {
        rate: 8,
        skinType: 7,
        concerns: [
          { id: 1, value: "oiliness" },
          { id: 2, value: "acne" }
        ],
        comment: "Gently cleans without over-drying."
      },
      {
        rate: 7,
        skinType: 6,
        concerns: [
          { id: 1, value: "acne" },
          { id: 2, value: "pores" }
        ],
        comment: "Helps with breakouts over time."
      },
      {
        rate: 9,
        skinType: 8,
        concerns: [
          { id: 1, value: "oiliness" },
          { id: 2, value: "sensitivity" }
        ],
        comment: "Very gentle yet effective."
      },
      {
        rate: 6,
        skinType: 6,
        concerns: [
          { id: 1, value: "acne" },
          { id: 2, value: "unevenTexture" }
        ],
        comment: "A bit foamy for sensitive skin."
      },
      {
        rate: 8,
        skinType: 7,
        concerns: [
          { id: 1, value: "pores" },
          { id: 2, value: "oiliness" }
        ],
        comment: "Great morning cleanser."
      }
    ]
  },
  {
    id: 3,
    name: "Neutrogena Hydro Boost Water Gel",
    image: "https://i5.walmartimages.com/seo/Neutrogena-Hydro-Boost-Water-Gel-Moisturizer-50-ml_7dec21bf-13a0-475d-9c0c-698414abac0f.216f91aac2622f02dfb87776ddfc2d98.jpeg",
    category: "cream",
    reviews: [
      {
        rate: 9,
        skinType: 3,
        concerns: [
          { id: 1, value: "lightWrinkles" },
          { id: 2, value: "dryness" }
        ],
        comment: "Instant hydration, no residue."
      },
      {
        rate: 7,
        skinType: 5,
        concerns: [
          { id: 1, value: "dryness" },
          { id: 2, value: "unevenTexture" }
        ],
        comment: "Light gel absorbs fast."
      },
      {
        rate: 9,
        skinType: 4,
        concerns: [
          { id: 1, value: "dryness" },
          { id: 2, value: "lightWrinkles" }
        ],
        comment: "Good under makeup."
      },
      {
        rate: 6,
        skinType: 6,
        concerns: [
          { id: 1, value: "pores" },
          { id: 2, value: "acne" }
        ],
        comment: "May cause breakouts on oily skin."
      },
      {
        rate: 8,
        skinType: 2,
        concerns: [
          { id: 1, value: "dryness" }
        ],
        comment: "Great for dry to combination."
      }
    ]
  }
];