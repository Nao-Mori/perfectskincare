import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-bg text-text font-sans flex flex-col items-center px-4 py-10">
        <Header />
        <Hero />
        <Recommendations />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
