import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-12 max-w-4xl mx-auto px-4">
  <h1 className="text-3xl font-bold mb-4">Contact</h1>
  <p className="text-muted-foreground mb-6">Reach out to us for enquiries and project consultations.</p>
        <div className="bg-white/5 p-6 rounded-lg">
          <p className="mb-4">Phone: <a className="text-primary" href="tel:+919941066695">+91 99410 66695</a></p>
          <p>Email: <a className="text-primary" href="mailto:info@example.com">info@example.com</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
