import RecentlyViewed from "@/components/RecentlyViewed";
import SingleProduct from "@/components/SingleProduct";
import { useParams } from 'next/navigation';

export default function Product() {
  const { id } = useParams();

  return (
    <div>
      <SingleProduct id={String(id)} />
      <RecentlyViewed id={String(id)} />
    </div>
  );
}