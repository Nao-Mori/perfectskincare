'use client';

import { useParams } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import type { Product } from '@/data/products';
import Spinner from '@/components/ui/Spinner';
import RecentlyViewed from '@/components/RecentlyViewed';
import ReviewResult from '@/components/ui/ReviewResult';
import { ProductImage } from '@/components/ui/ProductImage';

export default function ProductPage() {
  const param = useParams();
  const { data, isLoading, error } = useProduct(param.id as string);
  const product = data as Product;

  if (error) {
    return (
      <div className="text-red-500 text-center">Product does not exist</div>
    );
  }

  return (
    <>
      <div className="
        max-w-5xl w-full mt-5 mb-10 bg-white shadow-md bg-white py-5 rounded-2xl flex flex-wrap item-center justify-center
      ">
        <div className="flex-1 relative min-w-full min-h-60 md:min-w-[500px] md:h-80">
          {!product || isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner size={70} />
            </div>
          ) : (
            <ProductImage
              src={product.image}
              alt={product.name}
            />
          )}
        </div>
        <div className="flex-1 text-sm text-gray-600 px-5 min-w-full md:min-w-[500px]">
          <div className="flex items-center mb-5 mt-3">
            <h4 className="text-base md:text-xl font-semibold w-full flex">
              {product?.name || 'loading...'}
            </h4>
          </div>
          <ReviewResult reviews={product?.reviews || []} />
          <button className="mt-5 font-bold">Post a review!</button>
        </div>
      </div>
      {product && (
        <RecentlyViewed
          product={{
            id: product.id,
            name: product.name,
            image: product.image,
            category: product.category
          }} 
        />
      )}
    </>
  );
}
