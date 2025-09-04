import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const Footer = () => {
  const navigation = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "News", href: "/news" },
    ],
    services: [
      { name: "Wind Energy", href: "/services#wind" },
      { name: "Solar Power", href: "/services#solar" },
      { name: "O&M Services", href: "/services#maintenance" },
      { name: "IT Solutions", href: "/services#it" },
    ],
    resources: [
      { name: "Projects", href: "/projects" },
      { name: "Industries", href: "/industries" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold">JMK GROUPS</div>
                  <div className="text-sm text-background/70">Energy Solutions</div>
                </div>
              </div>
              <p className="text-background/70 mb-6">
                Leading the renewable energy revolution in India with innovative solar and wind solutions. 
                Trusted by clients across the nation for over two decades.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-glow" />
                  <a href="tel:+919941066695" className="hover:text-primary-glow transition-colors">
                    +91 99410 66695
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-glow" />
                  <a href="mailto:info@jmkgroups.in" className="hover:text-primary-glow transition-colors">
                    info@jmkgroups.in
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-glow" />
                  <span>Muppandal Belt, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/70 hover:text-primary-glow transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/70 hover:text-primary-glow transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6">Resources</h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-background/70 hover:text-primary-glow transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-background/70">
                Subscribe to our newsletter for the latest renewable energy insights.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="hero" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/70 text-sm">
              © 2024 JMK Groups. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link to="/privacy" className="text-background/70 hover:text-primary-glow transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/70 hover:text-primary-glow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;