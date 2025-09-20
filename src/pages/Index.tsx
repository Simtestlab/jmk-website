import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview"; 
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CompanyOverview />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
