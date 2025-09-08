'use client';

import Link from 'next/link';
import type { Product, Review } from '../data/products';
import ReviewResult from './ui/ReviewResult';
import { ProductImage } from './ui/ProductImage';

export default function ProductList({
  products,
}: {
  products: readonly Product[];
}) {
  return (
    <section className="max-w-5xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
        {products.map((product: Product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.image}
              reviews={product.reviews}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({
  id,
  title,
  image,
  reviews,
}: {
  id: number;
  title: string;
  image: string;
  reviews: Review[];
}) {
  return (
    <Link href={`/products/${id}`}>
      <div
        className="
        rounded-xl bg-white p-4 shadow-md text-center z-10 
        hover:shadow-[0_10px_28px_rgba(250,152,141,0.7)]
        transition-shadow duration-200 h-full
      "
      >
        <div className="relative w-full h-48">
          <ProductImage src={image} alt={title} />
        </div>
        <div className="flex items-center h-16">
          <h4 className="text-base font-semibold w-full">{title}</h4>
        </div>
        <ReviewResult reviews={reviews} />
      </div>
    </Link>
  );
}
