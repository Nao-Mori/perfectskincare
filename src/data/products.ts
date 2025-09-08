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
  seenAt?: number;
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

export const manyProducts = [
  {
    name: 'Etude SoonJung pH 6.5 Whip Facial Cleanser',
    image: 'etudesoonj',
    category: 'cleanser',
  },
  {
    name: 'Cosrx Low-pH Good Morning Gel Cleanser',
    image: 'cosrxgel',
    category: 'cleanser',
  },
  {
    name: 'Anua Heartleaf Quercetinol Pore Deep Cleansing Foam',
    image: 'anuapore',
    category: 'cleanser',
  },
  {
    name: 'Then I Met You Living Cleansing Balm',
    image: 'thenbalm',
    category: 'cleanser',
  },
  {
    name: 'Ma:nyo Pure Cleansing Oil',
    image: 'manyooil',
    category: 'cleanser',
  },
  {
    name: 'Banila Co Clean It Zero Calming Cleansing Balm',
    image: 'banilacalm',
    category: 'cleanser',
  },
  {
    name: 'Dr. Althea Pure Grinding Cleansing Balm',
    image: 'altheabalm',
    category: 'cleanser',
  },
  {
    name: 'HaruHaru Wonder Black Rice Moisture Cleansing Oil',
    image: 'haruharuoil',
    category: 'cleanser',
  },

  // --- Face Wash (American & JP additions) ---
  {
    name: 'CeraVe Foaming Facial Cleanser',
    image: 'ceravefoam',
    category: 'faceWash',
  },
  {
    name: 'Neutrogena Hydro Boost Hydrating Cleansing Gel',
    image: 'neutrohboost',
    category: 'faceWash',
  },
  {
    name: 'Kiehl’s Ultra Facial Cleanser',
    image: 'kiehlsultra',
    category: 'faceWash',
  },
  {
    name: 'Philosophy Purity Made Simple Cleanser',
    image: 'philosophy',
    category: 'faceWash',
  },
  {
    name: 'Shiseido Senka Perfect Whip',
    image: 'senkawhip',
    category: 'faceWash',
  },
  {
    name: 'Bioré Deep Pore Charcoal Cleanser',
    image: 'biorecharcoal',
    category: 'faceWash',
  },
  {
    name: 'Cetaphil Daily Facial Cleanser',
    image: 'cetaphilclean',
    category: 'faceWash',
  },
  { name: 'DHC Deep Cleansing Oil', image: 'dhcoil', category: 'faceWash' },
  { name: 'Fresh Soy Face Cleanser', image: 'freshsoy', category: 'faceWash' },
  {
    name: 'Hada Labo Gokujyun Foaming Face Wash',
    image: 'hadafoam',
    category: 'faceWash',
  },

  // --- Toner (Korean & Japanese) ---
  {
    name: 'Anua Heartleaf 77 Soothing Toner',
    image: 'anuatoner',
    category: 'toner',
  },
  { name: "I'm From Rice Toner", image: 'imfromrice', category: 'toner' },
  {
    name: 'Beauty of Joseon Glow Replenishing Toner',
    image: 'bojtoner',
    category: 'toner',
  },
  {
    name: 'Hada Labo Gokujun Premium Hyaluronic Solution',
    image: 'hadahyalu',
    category: 'toner',
  },
  {
    name: 'Curel Hydrating Water Essence Toner',
    image: 'curelh2o',
    category: 'toner',
  },
  {
    name: 'Kikumasamune Face & Body Moisturizing Lotion',
    image: 'kikumasaloc',
    category: 'toner',
  },
  {
    name: 'Naturie Hatomugi Skin Conditioner',
    image: 'naturiehat',
    category: 'toner',
  },
  {
    name: 'Muji Sensitive Skin Light Toning Water',
    image: 'mujitoning',
    category: 'toner',
  },
  {
    name: 'Albion Medicated Skin Conditioner',
    image: 'albionmedic',
    category: 'toner',
  },
  {
    name: 'SK-II Facial Treatment Clear Lotion',
    image: 'sk2clear',
    category: 'toner',
  },

  // --- Serum (American & Korean) ---
  { name: 'SkinCeuticals C E Ferulic', image: 'sceferulic', category: 'serum' },
  {
    name: 'SkinMedica TNS Advanced+ Serum',
    image: 'skinmedicatsn',
    category: 'serum',
  },
  {
    name: 'La Roche-Posay Hyalu B5 Serum',
    image: 'larochehyalu',
    category: 'serum',
  },
  {
    name: 'Kiehl’s Ultra Pure Niacinamide Serum 5.0%',
    image: 'kiehlnia',
    category: 'serum',
  },
  {
    name: 'Revision Skincare C+ Correcting Complex 30%',
    image: 'revisioncplus',
    category: 'serum',
  },
  { name: 'Augustinus Bader The Serum', image: 'augserum', category: 'serum' },
  {
    name: 'TruSkin Vitamin C Super Serum',
    image: 'truskinvc',
    category: 'serum',
  },
  {
    name: 'Cetaphil Retinol Alternative Serum',
    image: 'cetaphilret',
    category: 'serum',
  },
  {
    name: 'PSA Visible Improvement Peptide Serum',
    image: 'psasera',
    category: 'serum',
  },
  {
    name: 'Peach & Lily Glass Skin Refining Serum',
    image: 'peachlily',
    category: 'serum',
  },

  // --- Lotion (Japanese / Korean style “乳液”) ---
  { name: 'Orbis U Lotion', image: 'orbisulotion', category: 'lotion' },
  {
    name: 'Rohto Hada Labo Gokujyun Alpha Lotion',
    image: 'rohtoalpha',
    category: 'lotion',
  },
  {
    name: 'Shiseido Elixir Balancing Water',
    image: 'shiselixir',
    category: 'lotion',
  },
  {
    name: 'Curel Moisture Lotion III Enrich',
    image: 'curellotion',
    category: 'lotion',
  },
  {
    name: 'Muji Moisturizing Milk High Moisture',
    image: 'mujimilkh',
    category: 'lotion',
  },
  {
    name: 'Kikumasamune Sake High Moist Lotion',
    image: 'kikumalotion',
    category: 'lotion',
  },
  {
    name: 'Etude House Moistfull Collagen Lotion',
    image: 'etudecollagen',
    category: 'lotion',
  },
  {
    name: 'Laneige Essential Power Skin Refiner Light',
    image: 'laneigelotion',
    category: 'lotion',
  },
  {
    name: 'Innisfree Green Tea Balancing Lotion',
    image: 'innisfreelotion',
    category: 'lotion',
  },
  {
    name: 'Shu Uemura Skin Purifier Lotion',
    image: 'shulotion',
    category: 'lotion',
  },

  // --- Cream (American / Korean) ---
  {
    name: 'Dr. Dennis Gross Advanced Retinol + Ferulic Wrinkle Cream',
    image: 'drgrosscream',
    category: 'cream',
  },
  {
    name: 'Dr. Dennis Gross Vitamin C Lactic Dewy Deep Cream',
    image: 'drgrosslactic',
    category: 'cream',
  },
  {
    name: 'Clinique Moisture Surge 100H Auto-Replenishing Hydrator',
    image: 'cliniquesurge',
    category: 'cream',
  },
  {
    name: 'Kiehl’s Ultra Facial Cream',
    image: 'kiehlsultra',
    category: 'cream',
  },
  {
    name: 'Belif The True Cream Aqua Bomb',
    image: 'belifaquabomb',
    category: 'cream',
  },
  {
    name: 'Sulwhasoo Concentrated Ginseng Renewing Cream',
    image: 'sulwhasoogin',
    category: 'cream',
  },
  {
    name: 'Laneige Water Bank Blue Hyaluronic Cream',
    image: 'laneigeblue',
    category: 'cream',
  },
  {
    name: 'Origins GinZing Oil-Free Energy-Boosting Gel Cream',
    image: 'originsginzing',
    category: 'cream',
  },
  { name: 'Augustinus Bader The Cream', image: 'augcream', category: 'cream' },
];
