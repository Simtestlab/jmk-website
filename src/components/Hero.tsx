import { Button } from "@/components/ui/button";
import { ChevronRight, Zap, Wind, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sun className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <Wind className="w-20 h-20 text-white" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-500">
          <Zap className="w-16 h-16 text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            India's Largest Wind Energy Corridor - Muppandal Belt
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Powering Tomorrow with
            <span className="block text-primary-glow">Clean Energy</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            JMK Groups delivers comprehensive solar and wind energy solutions, 
            with over 500MW of clean energy projects and 20+ years of expertise 
            in sustainable power generation.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">400MW+</div>
              <div className="text-white/80">Wind Farms Maintained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100MW+</div>
              <div className="text-white/80">Solar Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">150+</div>
              <div className="text-white/80">Professional Team</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects" className="flex items-center">
                Explore Our Projects
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;