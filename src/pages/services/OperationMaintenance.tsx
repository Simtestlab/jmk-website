import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const OperationMaintenance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Operation & Maintenance</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive O&M services ensuring optimal performance and maximum
          uptime for renewable energy assets.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default OperationMaintenance;
