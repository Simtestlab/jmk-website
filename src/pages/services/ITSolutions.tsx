import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ITSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">IT Solutions</h1>
        <p className="text-lg text-muted-foreground">
          Advanced technology solutions for energy management, monitoring, and data analytics.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ITSolutions;
