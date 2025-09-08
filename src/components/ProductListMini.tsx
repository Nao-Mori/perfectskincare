'use client';

import Link from 'next/link';
import type { ProductMini } from '../data/products';
import { ProductImage } from './ui/ProductImage';

export default function ProductListMini({
  products,
}: {
  products: readonly ProductMini[];
}) {
  return (
    <section className="max-w-5xl w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {products.map((product: ProductMini) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.image}
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
}: {
  id: number;
  title: string;
  image: string;
}) {
  return (
    <Link href={`/products/${id}`}>
      <div
        className="
        rounded-xl bg-white p-2 shadow-md text-center z-10 
        hover:shadow-[0_10px_28px_rgba(250,152,141,0.7)]
        transition-shadow duration-200
      "
      >
        <div className="relative w-full h-30 md:h-40">
          <ProductImage src={image} alt={title} />
        </div>
        <div className="flex items-center h-12 text-left px-2">
          <h5 className="text-base text-xs md:text-sm font-semibold w-full line-clamp-2">
            {title}
          </h5>
        </div>
      </div>
    </Link>
  );
}
