import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Data Analysis</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive data analytics for energy optimization, performance
          monitoring, and predictive maintenance.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default DataAnalysis;
