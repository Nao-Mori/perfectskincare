'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ProductMini } from '../data/products';
import { cloudfrontLoader } from '@/lib/cloudFrontLoader';

export default function ProductListMini({ products }: { products: readonly ProductMini[] }) {
  return (
    <section className="max-w-5xl w-full">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
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
        <div className="relative w-full h-48">
          <Image
            loader={cloudfrontLoader}
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center h-12 text-left px-2">
          <h5 className="text-base text-sm font-semibold w-full">{title}</h5>
        </div>
      </div>
    </Link>
  );
}
