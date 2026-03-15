import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import StatsSection from "../components/statsSection/StatsSection";




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}