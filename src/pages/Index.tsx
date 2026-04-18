import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, TrendingUp, Shield, Users, BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroHome from "@/assets/hero-home.jpg";
import heroHome2 from "@/assets/hero-home-2.jpg";
import heroHome3 from "@/assets/hero-home-3.jpg";
import heroHome4 from "@/assets/hero-home-4.jpg";
import heroHome5 from "@/assets/hero-home-5.jpg";
import heroHome6 from "@/assets/hero-home-6.jpg";
import aboutStory from "@/assets/about-story.jpg";
import statsBg from "@/assets/stats-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const heroImages = [heroHome, heroHome2, heroHome3, heroHome4, heroHome5, heroHome6];

const services = [
  { icon: BookOpen, title: "Bookkeeping", desc: "Accurate, timely records that keep your business running smoothly." },
  { icon: Calculator, title: "Tax Planning", desc: "Strategic tax solutions to minimise liabilities and maximise returns." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Expert guidance to drive growth and navigate complex decisions." },
  { icon: Shield, title: "Audit & Assurance", desc: "Independent assurance that builds trust with stakeholders." },
  { icon: Users, title: "Payroll Services", desc: "Seamless payroll management so you can focus on what matters." },
  { icon: BarChart3, title: "Financial Reporting", desc: "Clear, compliant reports that tell your financial story with confidence." },
];



const blogs = [
  { image: blog1, title: "2026 Tax Updates: What Your Business Needs to Know", date: "March 28, 2026", category: "Tax Updates" },
  { image: blog2, title: "5 Financial Habits of Successful Small Businesses", date: "March 15, 2026", category: "Articles" },
  { image: blog3, title: "BYS Accounting Expands Advisory Services", date: "March 1, 2026", category: "Firm News" },
];

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);
  

  // Hero slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Dramatic landscape ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              i === currentHero ? "opacity-100" : "opacity-0"
            }`}
            style={{
              animation: i === currentHero ? "kenburns 20s ease-in-out infinite" : "none",
            }}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Clarity in Every Number
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 font-light max-w-2xl mx-auto">
            Expert bookkeeping and accountancy services that empower your business to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-8 py-6 text-base">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/20 rounded-none px-8 py-6 text-base font-medium">
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero dots */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === currentHero ? "bg-accent w-8" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20 items-start">
            {[
              { title: "Our Services", desc: "Accounting solutions tailored to your needs.", path: "/services" },
              { title: "About Us", desc: "Discover our story, values, and the team behind BYS.", path: "/about" },
              { title: "Get in Touch", desc: "Ready to take control of your finances? Let's talk.", path: "/contact" },
            ].map((card, i) => (
              <ScrollReveal key={card.path} delay={i * 150}>
                <Link to={card.path} className="group block">
                  <div className="bg-card border border-border p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{card.desc}</p>
                    <span className="text-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden">
                <img src={aboutStory} alt="Canyon landscape" className="w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">About BYS Accounting</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Building Financial Futures Since 2005
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For nearly two decades, BYS Accounting has been the trusted financial partner for businesses and individuals across Australia. Our commitment to excellence, personalised service, and forward-thinking strategies sets us apart.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We don't just crunch numbers — we build relationships. Our team of experienced professionals takes the time to understand your unique challenges and goals, delivering tailored solutions that drive real results.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none px-8">
                  Discover Our Story
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">What We Do</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">Our Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="border border-primary-foreground/10 p-8 hover:bg-primary-foreground/5 transition-all duration-500 group hover:border-t-accent hover:border-t-2 hover:scale-[1.02]">
                  <service.icon size={32} className="text-accent mb-5" />
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none px-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats - Parallax */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${statsBg})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={20} suffix="+" label="Years Experience" />
            <CountUp end={500} suffix="+" label="Clients Served" />
            <CountUp end={25} label="Team Members" />
            <CountUp end={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Stay Informed</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Latest Insights</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <ScrollReveal key={blog.title} delay={i * 150}>
                <Link to="/insights" className="group block">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <span className="text-accent text-xs uppercase tracking-widest font-medium">{blog.category}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{blog.date}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img src={ctaBg} alt="Ocean horizon at sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how BYS Accounting can support your business goals.
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-base">
                Get in Touch Today
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
