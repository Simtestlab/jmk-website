import { useState, useEffect, useRef } from "react";
import client1 from "@/assets/clients/client-1.jpg";
import client2 from "@/assets/clients/client-2.jpg";
import client3 from "@/assets/clients/client-3.jpg";
import client4 from "@/assets/clients/client-4.jpg";
import client5 from "@/assets/clients/client-5.jpg";
import client6 from "@/assets/clients/client-6.jpg";

const ClientsSection = () => {
  const clients = [
    { src: client1, alt: "TechCorp" },
    { src: client2, alt: "FinanceFirst" },
    { src: client3, alt: "HealthPlus" },
    { src: client4, alt: "ManufacturePro" },
    { src: client5, alt: "RetailMax" },
    { src: client6, alt: "GreenEnergy" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(() => {
    if (typeof window === "undefined") return 5;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 3;
    return 5;
  });

  // Autoplay only when the clients section is visible in the viewport
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [clients.length, isVisible]);

  // Observe section visibility
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        setIsVisible(e.isIntersecting && e.intersectionRatio >= 0.25);
      },
      { threshold: [0, 0.25, 0.5] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(3);
      else setVisibleCount(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getVisibleClients = () => {
    const visible: { src: string; alt: string }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  return (
    <section ref={sectionRef} className="py-1 lg:pb-20 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Our Reputed Clients
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across various industries for our
            reliable renewable energy solutions
          </p>
        </div>

        <div className="relative h-40 flex justify-center items-center">
          <div className="relative w-full max-w-5xl h-32 overflow-hidden flex justify-center gap-4">
            {getVisibleClients().map((client, index) => (
              <div
                key={index}
                className="flex-1 bg-card rounded-xl shadow-[var(--shadow-card)] p-6 flex items-center justify-center transition-all duration-700 ease-in-out opacity-100 scale-100"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125 shadow-[var(--shadow-glow)]"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
