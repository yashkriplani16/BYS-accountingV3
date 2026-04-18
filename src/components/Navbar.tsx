import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary-foreground tracking-wide">
            BYS
          </span>
          <span className="text-primary-foreground/70 text-sm font-light tracking-widest uppercase">
            Accounting
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-none px-6"
            >
              Get in Touch
            </Button>
          </Link>
        </nav>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none">
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
