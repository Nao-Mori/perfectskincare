import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-bg text-text font-sans">
        <Header />
        <div className="px-5 flex flex-col items-center">
        <Hero />
        <MainSection />
        <div className="h-[50px]" />
        <Recommendations />
        </div>
      </main>
      <Footer />
    </div>
  );
}
