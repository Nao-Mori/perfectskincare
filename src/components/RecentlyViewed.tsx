import { useRecentViewed } from "@/hooks/useRecentViewed";
import { useEffect } from "react";

export default function Product({ id }: { id: string }) {
  const { recent, pushView } = useRecentViewed(8);

  useEffect(() => {
    //Update the recently viewed list
    pushView(id);
  }, [id, pushView]);

  return (
    <>
      <main>
        
      </main>
      <aside>
        <h3>Recently viewed</h3>
        <ul>{recent.map(pid => <li key={pid}>{pid}</li>)}</ul>
      </aside>
    </>
  );
}