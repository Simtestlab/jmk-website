import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SolarPower = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Solar Power Projects</h1>
        <p className="text-lg text-muted-foreground">
          End-to-end solar solutions from design to commissioning with EPC and
          turnkey project capabilities.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SolarPower;
