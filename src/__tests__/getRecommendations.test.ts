import { Product, products, Review } from '@/data/products';
import { getRecommendations } from '@/lib/getRecommendations';

const userInput = {
  skinType: 2,
  concerns: ['dryness', 'lightWrinkles', 'pores'],
  categories: ['faceWash', 'cream'],
};

const makeReview = (userInput: {
  skinType: number;
  concerns: string[];
}): Review => ({
  skinType: userInput.skinType,
  rate: 10,
  concerns: [...userInput.concerns],
  comment: '',
});

const productsFixture: Product[] = [
  ...products,
  //Below should be recommended
  {
    id: 111111111111,
    name: 'Top Face wash',
    category: 'faceWash',
    image: 'image',
    reviews: Array.from({ length: 20 }, () => makeReview(userInput)),
  },
  {
    id: 222222222222,
    name: 'Top Cream',
    category: 'cream',
    image: 'image',
    reviews: Array.from({ length: 20 }, () => makeReview(userInput)),
  },
];

describe('getRecommendations', () => {
  test('get the products reviewed best by similar skin type/concerns and of the chosen categories', () => {
    const result = getRecommendations(userInput, 10, (category: string) =>
      productsFixture.filter((p) => p.category === category)
    );
    console.log(result);
    expect(result.faceWash.length).toBeGreaterThanOrEqual(2);
    expect(result.cream.length).toBeGreaterThanOrEqual(2);
    expect(result.faceWash[0]?.id).toBe(
      productsFixture[productsFixture.length - 2].id
    );
    expect(result.cream[0]?.id).toBe(
      productsFixture[productsFixture.length - 1].id
    );
  });
});
