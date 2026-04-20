import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { posts } from "@/data/insights";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)
    .concat(posts.filter((p) => p.slug !== post.slug && p.category !== post.category))
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/55" />
      </div>

      {/* Article */}
      <article className="container mx-auto px-6 max-w-3xl py-16">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent text-xs uppercase tracking-widest font-medium">{post.category}</span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-muted-foreground text-xs">{post.date}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 leading-tight">
            {post.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>
          </div>
        </ScrollReveal>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">Related Articles</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 100}>
                  <Link to={`/insights/${r.slug}`} className="group block">
                    <div className="overflow-hidden mb-4">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent text-xs uppercase tracking-widest font-medium">{r.category}</span>
                      <span className="text-muted-foreground text-xs">•</span>
                      <span className="text-muted-foreground text-xs">{r.date}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {r.title}
                    </h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default InsightDetail;
