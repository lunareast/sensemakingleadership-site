/* ============================================================
   INSIGHTS PAGE — Sensemaking Leadership
   Content sourced from: SensemakingFlagshipProgrammev2, SLcomments
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    category: "Sensemaking",
    readTime: "6 min read",
    title: "The Structural Gap Nobody Talks About: Why Most Leaders Were Never Trained to Lead",
    excerpt: "They were promoted because of domain excellence. And then, one day, found themselves responsible for a team, a division, an organisation — and figured it out as they went. This is not a personal failing. It is a structural gap in how organisations develop their people.",
    date: "June 2026",
    featured: true,
  },
  {
    category: "The Heartware Equation™",
    readTime: "7 min read",
    title: "Why Heartware Multiplies and Ego Divides: Understanding the Equation",
    excerpt: "The operations in the Heartware Equation are deliberate. Hardware and Software are added — they accumulate competence. Heartware multiplies — it amplifies competence, which is why a leader with modest technical skill but strong heartware can outperform a brilliant technician with none. And Me divides.",
    date: "June 2026",
    featured: false,
  },
  {
    category: "The Excavation™",
    readTime: "5 min read",
    title: "From Framework to Experience: Why The Excavation™ Inverts the Conventional Approach",
    excerpt: "Most leadership programmes go: here is a framework — now apply it to yourself. This produces partial ownership. The Excavation™ goes the other way: here is your own experience — now organise it, articulate it, and commit to teaching it. The difference in durability is not marginal. It is fundamental.",
    date: "May 2026",
    featured: false,
  },
  {
    category: "Systems Thinking",
    readTime: "5 min read",
    title: "The Singapore Strategy Map: Leading in a System You Did Not Design",
    excerpt: "Every leader operates within a system they did not fully design and cannot fully control. The Singapore Strategy Map is a tool for making that system visible — mapping the geopolitical, demographic, and technological forces that shape the environment, and locating yourself as an actor with choices to make.",
    date: "May 2026",
    featured: false,
  },
  {
    category: "Leadership",
    readTime: "4 min read",
    title: "The Teaching Test: Why Committing to Teach Your Framework Changes Everything",
    excerpt: "The final requirement of the Flagship Programme is not a nice-to-have. It is the mechanism that forces coherence and installs integrity. A leader who has committed to teaching their framework has to live it — because the gap between what they say and what they do becomes immediately visible.",
    date: "April 2026",
    featured: false,
  },
  {
    category: "Heartware",
    readTime: "4 min read",
    title: "The Five Domains: How Heartware Is Built Through Deliberate Commitment",
    excerpt: "Heartware is not an abstract quality. It is built through specific commitments in specific domains of life — giving, family, community, causes, and storytelling. The question is not whether you have heartware. It is whether you are actively cultivating it.",
    date: "March 2026",
    featured: false,
  },
];

const featured = articles.find(a => a.featured)!;
const rest = articles.filter(a => !a.featured);

export default function Insights() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_90)]">
      <Navigation />

      {/* Page Hero */}
      <section className="bg-[oklch(0.26_0.07_255)] pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label-light mb-4">Perspectives</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
              Insights & Ideas
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Thinking on leadership, sensemaking, heartware, and the practice of building organisations that endure — from the team at Sensemaking Leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="py-16 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-label mb-6 reveal">Featured</div>
          <div className="bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm overflow-hidden reveal">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[oklch(0.26_0.07_255)] p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs px-2 py-1 rounded-sm bg-[oklch(0.76_0.12_85)] text-[oklch(0.26_0.07_255)] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {featured.category}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="heading-display text-3xl lg:text-4xl text-white mb-5">
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featured.date}</span>
                  <button className="text-[oklch(0.76_0.12_85)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Read article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="border-accent-left mb-8">
                  <p className="text-[oklch(0.26_0.07_255)] text-xl italic leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
                    "That is not a personal failing. It is a structural gap. And it is one of the most consequential and least addressed challenges in organisational development today."
                  </p>
                  <p className="text-[oklch(0.50_0.04_255)] text-sm mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    — Sensemaking Leadership Flagship Programme, June 2026
                  </p>
                </div>
                <p className="text-[oklch(0.35_0.04_255)] leading-relaxed text-sm">
                  This piece examines why the structural gap in leadership development persists — and why addressing it requires more than skills training. It is the foundational argument behind everything Sensemaking Leadership does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-8 pb-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-label mb-8 reveal">All Articles</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <div key={i} className={`bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm p-7 flex flex-col reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 rounded-sm font-semibold flex items-center gap-1" style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "oklch(0.93 0.01 90)",
                    color: "oklch(0.26 0.07 255)"
                  }}>
                    <Tag size={10} /> {article.category}
                  </span>
                  <span className="text-[oklch(0.50_0.04_255)] text-xs flex items-center gap-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[oklch(0.26_0.07_255)] mb-3 flex-1" style={{ fontFamily: "'Fraunces', serif" }}>
                  {article.title}
                </h3>
                <p className="text-[oklch(0.45_0.04_255)] text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[oklch(0.88_0.01_90)]">
                  <span className="text-[oklch(0.50_0.04_255)] text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{article.date}</span>
                  <button className="text-[oklch(0.40_0.10_155)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Read <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="gold-line mx-auto reveal" />
            <h2 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-4 reveal">
              Stay Informed
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] mb-8 reveal reveal-delay-1">
              Receive our latest thinking on leadership, sensemaking, and the practice of building organisations that endure.
            </p>
            <div className="flex gap-3 max-w-md mx-auto reveal reveal-delay-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              />
              <button className="btn-primary whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
