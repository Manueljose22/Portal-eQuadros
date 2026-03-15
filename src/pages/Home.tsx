import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import StatsSection from "../components/statsSection/StatsSection";
import EcosystemSection from "../components/EcosystemSection/EcosystemSection";
import NewsSection from "../components/news/NewsSection";
import FunctionalitiesSection from "../components/FunctionalitiesSection/FunctionalitiesSection";
import SystembenefitsSection from "../components/SystembenefitsSection/SystembenefitsSection";
import OfertasFormativasSection from "../components/OfertasFormativasSection/OfertasFormativasSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";




export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <StatsSection />

        <EcosystemSection />
        <NewsSection/>
        <FunctionalitiesSection />
        <SystembenefitsSection />
        <OfertasFormativasSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}