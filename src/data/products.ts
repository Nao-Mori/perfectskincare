export interface Review {
  rate: number; // 1–10
  skinType: number; // 1 very dry, 8 very oily
  concern: string[];
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "CeraVe Moisturizing Cream",
    image: "https://i5.walmartimages.com/seo/CeraVe-Moisturizing-Cream-Face-Moisturizer-Body-Lotion-for-Normal-to-Very-Dry-Skin-12-oz_2fae0aa2-a8af-4ba5-9033-a61e0f1f1e4f.0f1f517b1d4447237c2f3f696f05caad.jpeg",
    reviews: [
      { rate: 9, skinType: 2, concern: ["dryness", "sensitivity"], comment: "Super hydrating, calms redness." },
      { rate: 8, skinType: 4, concern: ["dryness", "hydration"], comment: "Good for night use." },
      { rate: 7, skinType: 3, concern: ["sensitivity", "hydration"], comment: "Texture is rich but not greasy." },
      { rate: 9, skinType: 2, concern: ["dryness"], comment: "Perfect for winter dry patches." },
      { rate: 8, skinType: 5, concern: ["redness", "sensitivity"], comment: "Lightweight yet nourishing." }
    ]
  },
  {
    id: 2,
    name: "La Roche-Posay Toleriane Purifying Foaming Cleanser",
    image: "https://i5.walmartimages.com/asr/739e2b41-8745-4f64-8913-15db54840857.6020ec6b3add10d191904de67af7141c.jpeg",
    reviews: [
      { rate: 8, skinType: 7, concern: ["oiliness", "acne"], comment: "Gently cleans without over-drying." },
      { rate: 7, skinType: 6, concern: ["acne", "pores"], comment: "Helps with breakouts over time." },
      { rate: 9, skinType: 8, concern: ["oiliness", "sensitivity"], comment: "Very gentle yet effective." },
      { rate: 6, skinType: 6, concern: ["acne", "uneven texture"], comment: "A bit foamy for sensitive skin." },
      { rate: 8, skinType: 7, concern: ["pores", "oiliness"], comment: "Great morning cleanser." }
    ]
  },
  {
    id: 3,
    name: "Neutrogena Hydro Boost Water Gel",
    image: "https://example.com/images/neutrogena-hydro-boost.jpg",
    reviews: [
      { rate: 9, skinType: 3, concern: ["hydration", "dryness"], comment: "Instant hydration, no residue." },
      { rate: 7, skinType: 5, concern: ["hydration", "uneven texture"], comment: "Light gel absorbs fast." },
      { rate: 8, skinType: 4, concern: ["dryness", "hydration"], comment: "Good under makeup." },
      { rate: 6, skinType: 6, concern: ["pores", "hydration"], comment: "May cause breakouts on oily skin." },
      { rate: 8, skinType: 2, concern: ["dryness"], comment: "Great for dry to combination." }
    ]
  },
  {
    id: 4,
    name: "The Inkey List Ceramide Moisturizer",
    image: "https://example.com/images/inkey-ceramide.jpg",
    reviews: [
      { rate: 8, skinType: 2, concern: ["dryness", "hydration"], comment: "Ceramide-rich and affordable." },
      { rate: 7, skinType: 3, concern: ["dryness", "sensitivity"], comment: "Relieves tightness well." },
      { rate: 9, skinType: 2, concern: ["dryness", "hydration"], comment: "Staple for winter." },
      { rate: 7, skinType: 4, concern: ["redness", "dryness"], comment: "Light, but effective." },
      { rate: 8, skinType: 5, concern: ["hydration", "sensitivity"], comment: "Non-greasy yet moisturizing." }
    ]
  },
  {
    id: 5,
    name: "Hero Cosmetics Mighty Patch",
    image: "https://example.com/images/mighty-patch.jpg",
    reviews: [
      { rate: 10, skinType: 6, concern: ["acne"], comment: "Cleared a zit overnight!" },
      { rate: 9, skinType: 7, concern: ["acne", "pores"], comment: "So easy to apply." },
      { rate: 8, skinType: 5, concern: ["acne"], comment: "Sticks well, no irritation." },
      { rate: 9, skinType: 8, concern: ["acne", "sensitivity"], comment: "Removed blackheads cleanly." },
      { rate: 7, skinType: 6, concern: ["acne"], comment: "Works best on smaller blemishes." }
    ]
  },
  // Continue products 6–30 similarly using names like "Olay Regenerist Retinol24", "First Aid Beauty Ultra Repair Cream", etc.
];