import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1.8fr] gap-8 lg:gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">BYS Accounting</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Delivering clarity, confidence, and financial excellence to businesses and individuals across Australia.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Insights", path: "/insights" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Bookkeeping",
                "Tax Planning",
                "Business Advisory",
                "Audit & Assurance",
                "Payroll Services",
                "Financial Reporting",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/60">
                  Level 10, 123 Business Street<br />
                  Sydney, NSW 2000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/60">+61 2 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/60">info@bysaccounting.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BYS Accounting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors">Terms of Service</a>
            <div className="flex gap-4 ml-4">
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors" aria-label="Twitter"><Twitter size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
