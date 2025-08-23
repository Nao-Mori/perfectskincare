'use client';

import { useRecentViewed } from "@/hooks/useRecentViewed";
import { useEffect, useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import Recommendations from "./Recommendations";
import Spinner from "./ui/Spinner";

export default function RecentlyViewed({ id }: { id: string }) {
  const { recent, pushView } = useRecentViewed(8);

  useEffect(() => {
    pushView(id);
  }, [id, pushView]);

  const ids = useMemo(() => recent ?? [], [recent]);

  const { data: products, error, isPending } = useProducts(ids);

  return (
    <aside>
      <h3>Recently viewed</h3>

      {isPending ? (
        <Spinner />
      ) : products ? (
        <Recommendations products={products} />
      ) : (
        <p style={{ color: "crimson" }}>{error ? (error as Error).message : "Unknow error occured"}</p>
      )}
    </aside>
  );
}