import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Recommendations from "@/components/Recommendations";
import { products } from "@/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-bg text-text font-sans">
        <div className="relative w-full z-1">
          <div className="absolute right-0">
            <div className="w-full">
          <Image alt="background" priority src="/images/background.png" 
           className="w-full opacity-90" height={1024} width={1536}
           />
           </div>
          </div>
          <Header />
          <div className="px-5 flex flex-col items-center z-10">
            <Hero />
            <MainSection />
            <div className="h-[50px]" />
            <Recommendations products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
