import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import heroImg from "@/assets/solar-plants.jpg";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative bg-gradient-to-br from-primary/80 to-secondary/80 py-20 md:py-28 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-6 pointer-events-none"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent drop-shadow-lg">Our Services</h1>
          <p className="text-lg md:text-2xl text-white font-normal mb-4 drop-shadow" style={{ color: 'rgba(255,255,255,0.97)' }}>
            Empowering your business with sustainable energy, technology, and innovation.
          </p>
          <p className="text-base md:text-lg text-white font-normal max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.97)' }}>
            Explore our comprehensive solutions in wind, solar, IT, data analysis, and more—delivered with 20+ years of expertise and a commitment to excellence.
          </p>
        </div>
      </section>
      <main className="py-12">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
