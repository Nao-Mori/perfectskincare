import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Recommendations from "@/components/Recommendations";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-bg text-text font-sans">
        <div className="relative w-full z-1">
          <BackgroundImage />
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