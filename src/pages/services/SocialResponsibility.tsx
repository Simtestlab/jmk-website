import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SocialResponsibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Social Responsibility</h1>
        <p className="text-lg text-muted-foreground">
          Community development initiatives and sustainable practices that benefit local communities.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SocialResponsibility;
