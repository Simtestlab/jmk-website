import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WindEnergy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Wind Energy Projects</h1>
        <p className="text-lg text-muted-foreground">
          Complete wind farm development, installation, and maintenance services with multi-brand O&M capabilities.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default WindEnergy;
