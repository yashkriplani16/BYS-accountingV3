import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight, Heart, TrendingUp, Users, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroCareers from "@/assets/hero-careers.jpg";

const openings = [
  {
    title: "Senior Accountant",
    type: "Full-Time",
    location: "Sydney, NSW",
    department: "Tax & Compliance",
    desc: "Join our experienced team to manage a diverse portfolio of clients, prepare financial statements, and provide strategic tax advice.",
  },
  {
    title: "Graduate Accountant",
    type: "Full-Time",
    location: "Sydney, NSW",
    department: "Bookkeeping",
    desc: "Kick-start your career with hands-on experience in bookkeeping, BAS preparation, and cloud accounting platforms.",
  },
  {
    title: "Business Advisory Manager",
    type: "Full-Time",
    location: "Melbourne, VIC",
    department: "Advisory",
    desc: "Lead advisory engagements, mentor junior team members, and help clients navigate complex business decisions.",
  },
  {
    title: "Payroll Specialist",
    type: "Part-Time",
    location: "Remote",
    department: "Payroll Services",
    desc: "Manage end-to-end payroll processing for a portfolio of SME clients using modern cloud-based platforms.",
  },
];

const perks = [
  { icon: Heart, title: "Health & Wellbeing", desc: "Comprehensive health benefits and wellness programs for you and your family." },
  { icon: TrendingUp, title: "Career Growth", desc: "Structured development pathways, mentoring, and support for CPA/CA qualifications." },
  { icon: Users, title: "Team Culture", desc: "Collaborative environment with regular team events, social activities, and open communication." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Annual training budget, conference attendance, and access to industry-leading resources." },
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroCareers}
        title="Join Our Team"
        subtitle="Build a rewarding career at BYS Accounting — where your growth is our priority."
      />

      {/* Why BYS */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Why BYS</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                More Than Just a Workplace
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                At BYS Accounting, we invest in our people. We believe that when our team thrives, our clients receive the exceptional service they deserve.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 100}>
                <div className="bg-card border border-border p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <perk.icon size={36} className="text-accent mx-auto mb-5" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Opportunities</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
                Current Openings
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 100}>
                <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-500 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={14} className="text-accent" /> {job.department}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-accent" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-accent" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact" className="shrink-0 self-start md:self-center">
                      <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-none px-6 flex items-center gap-2">
                        Apply Now <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              We're always looking for talented people. Send us your CV and we'll be in touch when a suitable opportunity arises.
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-base">
                Send Your CV
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
