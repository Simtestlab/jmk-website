import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navigation = {
    services: [
      { name: "Wind Energy", href: "/services/wind-energy" },
      { name: "Solar Power", href: "/services/solar-power" },
      { name: "O&M Services", href: "/services/operation-maintenance" },
      { name: "IT Solutions", href: "/services/it-solutions" },
      { name: "Data Analysis", href: "/services/data-analysis" },
      { name: "Social Responsibility", href: "/services/social-responsibility" },
    ],
    resources: [
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src={logo}
                  alt="JMK Groups Logo"
                  className="w-10 h-10 object-contain rounded-lg"
                />
                <div>
                  <div className="text-lg font-bold">JMK GROUPS</div>
                  <div className="text-sm text-background/70">
                    Energy Solutions
                  </div>
                </div>
              </div>
              <p className="text-background/70 mb-6">
                Leading India's renewable energy revolution with innovative
                solar and wind solutions for over 20 years.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-primary-glow" />
                  <a
                    href="tel:+919941066695"
                    className="hover:text-primary-glow transition-colors"
                  >
                    +91 99410 66695
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-primary-glow" />
                  <a
                    href="mailto:info@jmkgroups.in"
                    className="hover:text-primary-glow transition-colors"
                  >
                    info@jmkgroups.in
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-glow" />
                  <span>Muppandal Belt, Tamil Nadu</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h3 className="font-semibold text-lg mb-6 text-center">
                  Services
                </h3>
                <ul className="space-y-4 text-center">
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
            </div>
            <div className="flex justify-center">
              <div>
                <h3 className="font-semibold text-lg mb-6 text-center">
                  Resources
                </h3>
                <ul className="space-y-4 text-center">
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
        </div>
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/70 text-sm">
              © 2025 JMK Groups. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-background/70 hover:text-primary-glow transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/70 hover:text-primary-glow transition-colors"
              >
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
