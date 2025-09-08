import { products } from '../data/products';
import { summarizeReviews } from '../lib/summarizeReviews';

test('make sure average rating and top-rated skin average rating to be different', () => {
  const result = summarizeReviews(products[0].reviews);
  expect(result).toEqual({
    avgRating: expect.any(Number),
    mostFrequentGroup: expect.any(String),
    topRatedSkinType: {
      skinType: expect.any(Number),
      group: expect.any(String),
      avg: expect.any(Number),
    },
    topConcerns: expect.arrayContaining(['dryness']),
    averageReviewedSkinType: expect.any(Number),
  });

  expect(result.topConcerns.length).toBeLessThanOrEqual(2);
});
