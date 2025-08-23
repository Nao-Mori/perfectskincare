'use client'

import { useRecentViewed } from "@/hooks/useRecentViewed";
import { useEffect } from "react";

export default function RecentlyViewed({ id }: { id: string }) {
  const { recent, pushView } = useRecentViewed(8);

  useEffect(() => {
    //Update the recently viewed list
    pushView(id);
  }, [id, pushView]);

  if (!recent) return null;

  return (
    <aside>
      <h3>Recently viewed</h3>
      <ul>{recent.map(pid => <li key={pid}>{pid}</li>)}</ul>
    </aside>
  );
}