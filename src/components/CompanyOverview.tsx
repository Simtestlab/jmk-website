import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Sun, Wind, Target, Award, Users } from "lucide-react";

const CompanyOverview = () => {
  const taglines = [
    "Greener Power. Greater Future.",
    "Redefining energy for the next generation.",
    "Turning sunlight into possibilities, and possibilities into a brighter world."
  ];

  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Solutions",
      description: "Advanced photovoltaic systems for maximum energy efficiency"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Wind Power",
      description: "Cutting-edge wind turbines for sustainable energy generation"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy Storage",
      description: "Smart grid solutions for optimized power distribution"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project delivery with proven methodologies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Industry-leading standards and certifications"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "150+ professionals with decades of combined experience"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Taglines Section */}
        <div className="text-center mb-20">
          <div className="space-y-6">
            {taglines.map((tagline, index) => (
              <h2 
                key={index}
                className={`text-2xl md:text-4xl font-bold ${
                  index === 0 ? 'text-primary' : 
                  index === 1 ? 'text-energy-wind' : 
                  'text-energy-solar'
                } leading-relaxed`}
              >
                {tagline}
              </h2>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            JMK Groups is committed to delivering end-to-end renewable energy solutions that drive long-term sustainability. 
            With over two decades of proven expertise and a portfolio exceeding 500 MW of clean energy projects, we specialize 
            in leveraging solar and wind power to address the dynamic energy demands of modern industries.
          </p>
          <Button variant="energy" size="lg" asChild>
            <a href="/about">
              Learn More About Our Mission
            </a>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;