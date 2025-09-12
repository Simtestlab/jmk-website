import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Success Stories</h1>
        <p className="text-muted-foreground">
          Customer success stories and case studies.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
