import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Recommendations from "@/components/Recommendations";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="relative w-full z-1">
      <div className="px-5 flex flex-col items-center z-10">
        <Hero />
        <MainSection />
        <div className="h-[50px]" />
        <Recommendations products={products} />
      </div>
    </div>
  );
}