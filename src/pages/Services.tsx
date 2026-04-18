import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroServices from "@/assets/hero-services.jpg";
import bookkeeping from "@/assets/service-bookkeeping.jpg";
import tax from "@/assets/service-tax.jpg";
import advisory from "@/assets/service-advisory.jpg";
import audit from "@/assets/service-audit.jpg";
import payroll from "@/assets/service-payroll.jpg";
import reporting from "@/assets/service-reporting.jpg";

const services = [
  {
    title: "Bookkeeping & Accounts Management",
    image: bookkeeping,
    desc: "Our bookkeeping services ensure your financial records are accurate, up-to-date, and compliant. We handle everything from daily transaction recording to monthly reconciliations, giving you a clear picture of your financial health.",
    points: ["Bank & credit card reconciliation", "Accounts payable & receivable", "BAS preparation & lodgement", "Cloud accounting setup (Xero, MYOB, QuickBooks)"],
  },
  {
    title: "Tax Planning & Compliance",
    image: tax,
    desc: "Strategic tax planning is at the heart of financial success. Our experts work year-round to minimise your tax obligations while ensuring full compliance with Australian tax law.",
    points: ["Individual & business tax returns", "Tax planning & structuring", "Capital gains tax strategies", "FBT & GST compliance"],
  },
  {
    title: "Business Advisory",
    image: advisory,
    desc: "Beyond numbers, we're your strategic partners. Our advisory services help you make informed decisions, plan for growth, and navigate the complexities of running a successful business.",
    points: ["Business planning & strategy", "Cash flow forecasting", "Succession planning", "Merger & acquisition support"],
  },
  {
    title: "Audit & Assurance",
    image: audit,
    desc: "Our independent audit and assurance services provide stakeholders with confidence in your financial reporting. We deliver thorough, objective assessments tailored to your needs.",
    points: ["Statutory & compliance audits", "Internal audit reviews", "SMSF audits", "Grant acquittal audits"],
  },
  {
    title: "Payroll Services",
    image: payroll,
    desc: "Managing payroll can be complex and time-consuming. Let us handle it with precision and care, ensuring your team is paid correctly and on time, every time.",
    points: ["Payroll processing & management", "Superannuation compliance", "Single Touch Payroll (STP)", "Employee onboarding support"],
  },
  {
    title: "Financial Reporting",
    image: reporting,
    desc: "Clear, accurate financial reports are essential for informed decision-making. We prepare comprehensive reports that give you the insights you need to drive your business forward.",
    points: ["Monthly & quarterly management reports", "Annual financial statements", "Budget vs. actual analysis", "Custom KPI dashboards"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroServices}
        title="Our Services"
        subtitle="Comprehensive accounting and advisory solutions tailored to your success."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          {services.map((service, i) => (
            <div key={service.title} className={`py-16 ${i < services.length - 1 ? "border-b border-border" : ""}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                      width={1280}
                      height={960}
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-body text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Our team is ready to assess your needs and recommend the best solutions for your business.
            </p>
            <Link to="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-base">
                Book a Free Consultation
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
