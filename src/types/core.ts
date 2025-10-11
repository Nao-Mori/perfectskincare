export interface Review {
  userName?: string;
  avatarUrl?: string;
  rate: number; // 1–10
  skinType: number; // 1-7 1 very dry, 4 normal, 7 very oily
  concerns: string[];
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  reviews: Review[];
  isFavorited?: boolean;
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
