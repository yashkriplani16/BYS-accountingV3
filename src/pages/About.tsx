import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroAbout from "@/assets/hero-about.jpg";
import aboutStory from "@/assets/about-story.jpg";

const values = [
  { icon: Target, title: "Precision", desc: "We deliver meticulous, error-free work that you can rely on with confidence." },
  { icon: Heart, title: "Integrity", desc: "Honesty and transparency guide every interaction and decision we make." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace modern tools and forward-thinking strategies to serve you better." },
  { icon: Handshake, title: "Partnership", desc: "Your success is our success. We invest in lasting, meaningful relationships." },
];

// const leaders = [
//   { name: "CA Jai Dulani", role: "Co-Founder & Director", initials: "JD", bio: "A Chartered Accountant with deep expertise across the Australian and Indian markets, Jai brings strategic financial insight and a passion for helping businesses thrive internationally." },
//   { name: "CA Ravi Lathwal", role: "Co-Founder & Director", initials: "RL", bio: "A Chartered Accountant with extensive industry knowledge spanning Australian and Indian markets, Ravi is dedicated to delivering precision-driven financial solutions and building lasting client partnerships." },
// ];

const leaders = [
  {
    name: "CA Jai Dulani",
    role: "Co-Founder & Director",
    initials: "JD",
    bio: "A Chartered Accountant with deep expertise across the Australian and Indian markets, Jai brings strategic financial insight and a genuine commitment to helping businesses thrive on both sides of the world.",
  },
  {
    name: "Ravi Lathwal",
    role: "Co-Founder & Director",
    initials: "RL",
    bio: "A results-driven accounting professional with strong expertise across the Australian and Indian markets, Ravi combines sharp financial acumen with a hands-on approach to building lasting client relationships.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroAbout}
        title="About BYS Accounting"
        subtitle="Trusted financial guidance, built on precision, integrity, and genuine partnership."
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <img src={aboutStory} alt="Canyon landscape" className="w-full h-[500px] object-cover" loading="lazy" width={1280} height={960} />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Our Story</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Financial Guidance You Can Rely On
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BYS Accounting is an India-based accounting and advisory firm, providing comprehensive financial services to businesses across India as well as clients in Australia. We manage the full cycle of accounting, from day-to-day bookkeeping through to compliance, tax, and reporting, so you always have a clear, accurate picture of where your business stands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach is built on precision and partnership. We combine strong technical expertise with genuinely responsive service, because we believe the best financial guidance comes from understanding your business as closely as you do. Whether you're a growing business in India or an Australian company looking for a dependable accounting partner, we tailor our approach to what you actually need.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Leadership</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Meet Our Leaders</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leaders.map((leader, i) => (
              <ScrollReveal key={leader.name} delay={i * 150} className="h-full">
                <div className="h-full text-center p-8 bg-background border border-border shadow-lg">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent/50 flex items-center justify-center mx-auto mb-6 shadow-lg ring-2 ring-accent/20">
                    <span className="font-heading text-4xl font-bold text-accent">{leader.initials}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{leader.name}</h3>
                  <p className="text-accent text-sm mb-4">{leader.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership — full-bleed split panels */}
<section className="bg-secondary pt-20">
  <ScrollReveal>
    <div className="text-center mb-16 px-6">
      <span className="text-accent uppercase tracking-widest text-sm font-medium">Leadership</span>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Meet Our Leaders</h2>
    </div>
  </ScrollReveal>

  <div className="grid grid-cols-1 md:grid-cols-2">
    {leaders.map((leader, i) => {
      const dark = i === 0;
      return (
        <ScrollReveal key={leader.name} delay={i * 150} className="h-full">
          <div className={`h-full px-8 py-14 md:px-16 ${dark ? "bg-primary" : "bg-background"}`}>
            <div
              className={`w-full h-[300px] mb-14 flex items-center justify-center text-xs font-mono ${
                dark
                  ? "bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_2px,transparent_2px,transparent_10px)] text-primary-foreground/50"
                  : "bg-[repeating-linear-gradient(135deg,rgba(20,20,26,0.06)_0px,rgba(20,20,26,0.06)_2px,transparent_2px,transparent_10px)] text-muted-foreground"
              }`}
            >
              photo placeholder
            </div>
            <span className="font-heading text-6xl font-bold text-accent block mb-4">{leader.initials}</span>
            <h3 className={`font-heading text-2xl font-semibold ${dark ? "text-primary-foreground" : "text-foreground"}`}>
              {leader.name}
            </h3>
            <p className="text-accent text-sm mt-1 mb-5 uppercase tracking-wider">{leader.role}</p>
            <p className={`text-[15px] leading-relaxed max-w-md ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {leader.bio}
            </p>
          </div>
        </ScrollReveal>
      );
    })}
  </div>
</section>

      {/* Values */}
      <section className="py-20 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">What Drives Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">Our Core Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center p-8">
                  <v.icon size={40} className="text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">{v.title}</h3>
                  <p className="text-primary-foreground/60 text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence.
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-base">
                Get in Touch
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
