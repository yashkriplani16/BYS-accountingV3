import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroInsights from "@/assets/hero-insights.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import serviceBookkeeping from "@/assets/service-bookkeeping.jpg";
import serviceTax from "@/assets/service-tax.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";

type Category = "All" | "Articles" | "Tax Updates" | "Firm News";

const posts = [
  { image: blog1, title: "2026 Tax Updates: What Your Business Needs to Know", date: "March 28, 2026", category: "Tax Updates" as const, excerpt: "Stay ahead of the latest changes to tax legislation and understand how they impact your business this financial year." },
  { image: blog2, title: "5 Financial Habits of Successful Small Businesses", date: "March 15, 2026", category: "Articles" as const, excerpt: "Discover the key financial practices that separate thriving small businesses from those that struggle." },
  { image: blog3, title: "BYS Accounting Expands Advisory Services", date: "March 1, 2026", category: "Firm News" as const, excerpt: "We're excited to announce the expansion of our business advisory division with new strategic planning offerings." },
  { image: serviceBookkeeping, title: "Cloud Accounting: Why Your Business Should Make the Switch", date: "February 18, 2026", category: "Articles" as const, excerpt: "The shift to cloud-based accounting offers real-time insights, better collaboration, and significant time savings." },
  { image: serviceTax, title: "ATO Focus Areas for 2026: Prepare Your Business", date: "February 5, 2026", category: "Tax Updates" as const, excerpt: "The ATO has outlined key compliance focus areas for the year. Here's what you need to know to stay compliant." },
  { image: serviceAdvisory, title: "BYS Welcomes Two New Senior Partners", date: "January 20, 2026", category: "Firm News" as const, excerpt: "Our growing team welcomes David Nguyen and Emma Clarke as new senior partners in audit and advisory." },
];

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const categories: Category[] = ["All", "Articles", "Tax Updates", "Firm News"];

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroInsights}
        title="Insights & News"
        subtitle="Expert perspectives on accounting, tax, and business strategy."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 100}>
                <article className="group cursor-pointer">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-accent text-xs uppercase tracking-widest font-medium">{post.category}</span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
