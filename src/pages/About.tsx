import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Heart, Lightbulb, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroAbout from "@/assets/hero-about.jpg";
import aboutStory from "@/assets/about-story.jpg";

const team = [
  { name: "Benjamin Yu-Sun", role: "Managing Director", bio: "With over 25 years in public practice, Benjamin leads BYS with a vision for excellence and client-first service." },
  { name: "Sarah Whitfield", role: "Senior Tax Consultant", bio: "Sarah specialises in complex tax structures and has helped hundreds of businesses optimise their tax position." },
  { name: "David Nguyen", role: "Audit Partner", bio: "David brings rigorous attention to detail and deep expertise in statutory and SMSF auditing." },
  { name: "Emma Clarke", role: "Business Advisory Manager", bio: "Emma's passion for strategic planning has guided numerous businesses through growth and transformation." },
  { name: "Michael Torres", role: "Senior Accountant", bio: "Michael's technical proficiency and client focus make him a cornerstone of our accounting team." },
  { name: "Lisa Chen", role: "Payroll & Compliance Lead", bio: "Lisa ensures seamless payroll operations and compliance for businesses of all sizes." },
];

const values = [
  { icon: Target, title: "Precision", desc: "We deliver meticulous, error-free work that you can rely on with confidence." },
  { icon: Heart, title: "Integrity", desc: "Honesty and transparency guide every interaction and decision we make." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace modern tools and forward-thinking strategies to serve you better." },
  { icon: Handshake, title: "Partnership", desc: "Your success is our success. We invest in lasting, meaningful relationships." },
];

const leaders = [
  { name: "CA Jai Dulani", role: "Co-Founder & Director", initials: "JD", bio: "A Chartered Accountant with deep expertise across the Australian and Indian markets, Jai brings strategic financial insight and a passion for helping businesses thrive internationally." },
  { name: "CA Ravi Lathwal", role: "Co-Founder & Director", initials: "RL", bio: "A Chartered Accountant with extensive industry knowledge spanning Australian and Indian markets, Ravi is dedicated to delivering precision-driven financial solutions and building lasting client partnerships." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroAbout}
        title="About BYS Accounting"
        subtitle="Two decades of trust, expertise, and unwavering commitment to your financial success."
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
                A Legacy of Financial Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2005 by Benjamin Yu-Sun, BYS Accounting began with a simple vision: to provide businesses with the kind of financial guidance that truly makes a difference. What started as a small practice in Sydney has grown into a trusted firm serving over 500 clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, our team of 25+ professionals brings together diverse expertise spanning tax, audit, advisory, and compliance. We combine deep technical knowledge with a genuinely personal approach, because we believe that great accounting is built on great relationships.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
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
              <ScrollReveal key={leader.name} delay={i * 150}>
                <div className="text-center p-8 bg-background border border-border shadow-lg">
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
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
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

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Our People</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">Meet the Team</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="border border-border p-8 hover:shadow-lg transition-shadow duration-500">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center mb-5 shadow-lg ring-2 ring-accent/20">
                    <span className="font-heading text-3xl font-bold text-accent">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
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
