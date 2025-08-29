'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useProduct } from '@/hooks/useProduct';
import type { Product } from '@/data/products';
import Spinner from '@/components/ui/Spinner';
import RecentlyViewed from "@/components/RecentlyViewed";
import Link from 'next/link';
import ReviewResult from '@/components/ui/ReviewResult';
import { cloudfrontLoader } from '@/lib/cloudFrontLoader';

export default function ProductPage() {
  const { id } = useParams();

  return (
    <>
    <div className="w-full mt-5 mb-10 bg-white shadow-md py-5 rounded-2xl min-h-60">
      <Details id={String(id)} />
      </div>
      <RecentlyViewed id={String(id)} />
    </>
  );
}

function Details({ id }: { id: string }) {
  const param = useParams();
  const { data, isLoading, error } = useProduct(param.id as string);
  const product = data as Product;

  if (isLoading) {
    return (
      <Spinner size="lg" />
    );
  }

  if (error || !product) {
    return <div className="text-red-500 text-center">Product does not exist</div>;
  }

  return (
    <div className="flex flex-wrap item-center justify-center">
      <div className="relative min-w-full min-h-60 md:min-w-[500px] md:h-80"> 
        <Image
        loader={cloudfrontLoader}
        src={product.image}
        alt={product.name}
        fill
        className="object-contain rounded-lg"
        />
      </div>
      <div className="text-sm text-gray-600 px-5 min-w-full md:min-w-[500px]">
        <div className="flex items-center mb-5 mt-3">
          <h4 className="text-base md:text-xl font-semibold w-full">{product.name}</h4>
        </div>
        <ReviewResult reviews={product.reviews} />
        <Link className="btn mt-5 font-bold" href={`${id}/reviews`}>Post a review!</Link>
      </div>
    </div>
  );
}