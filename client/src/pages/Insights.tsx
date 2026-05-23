/* ============================================================
   INSIGHTS PAGE — Sensemaking Leadership
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    category: "Sensemaking",
    readTime: "6 min read",
    title: "What Is Sensemaking and Why Does It Matter for Leaders?",
    excerpt: "In an era of unprecedented complexity, the ability to construct meaning from ambiguous, contradictory information is the foundational leadership competency. This article explores Karl Weick's sensemaking framework and its practical implications for organisational leadership.",
    date: "May 2026",
  },
  {
    category: "Learning Science",
    readTime: "5 min read",
    title: "How Psychotherapy Principles Enhance Leadership Development",
    excerpt: "The most effective leadership programmes address not just knowledge and skills, but the deeper psychological patterns that drive behaviour. Drawing on attachment theory, cognitive-behavioural approaches, and somatic awareness, we explore how therapeutic principles transform learning outcomes.",
    date: "April 2026",
  },
  {
    category: "WSQ & SSG",
    readTime: "4 min read",
    title: "Maximising Your SSG Training Investment: A Practical Guide",
    excerpt: "SSG funding makes high-quality training accessible to Singapore organisations of all sizes. This guide explains the available funding mechanisms, eligibility criteria, and how to design a training plan that maximises both subsidy and learning impact.",
    date: "March 2026",
  },
  {
    category: "Service Excellence",
    readTime: "7 min read",
    title: "Beyond Scripts: Building a Genuine Service Culture",
    excerpt: "Service excellence cannot be scripted — it must be cultivated. This article examines why most service training fails to produce lasting change, and presents a culture-first approach that addresses the values, beliefs, and relational patterns that drive service behaviour.",
    date: "February 2026",
  },
  {
    category: "Leadership",
    readTime: "5 min read",
    title: "The Science of Adaptive Leadership: What Research Tells Us",
    excerpt: "Adaptive leadership — the capacity to mobilise people to tackle difficult challenges and thrive — is now a well-researched field. This article synthesises key findings from leadership science and translates them into practical principles for today's leaders.",
    date: "January 2026",
  },
  {
    category: "Process Optimisation",
    readTime: "4 min read",
    title: "Systems Thinking for Organisational Change",
    excerpt: "Most organisational change efforts fail because they address symptoms rather than root causes. Systems thinking offers a more powerful approach — one that maps the interconnections between people, processes, and culture to identify high-leverage intervention points.",
    date: "December 2025",
  },
];

const featuredArticle = articles[0];
const restArticles = articles.slice(1);

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
              Thinking on leadership, learning, sensemaking, and organisational development — from the practitioners at Sensemaking Leadership.
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
                    {featuredArticle.category}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <Clock size={12} /> {featuredArticle.readTime}
                  </span>
                </div>
                <h2 className="heading-display text-3xl lg:text-4xl text-white mb-5">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{featuredArticle.date}</span>
                  <button className="text-[oklch(0.76_0.12_85)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Read article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="border-accent-left mb-8">
                  <p className="text-[oklch(0.26_0.07_255)] text-xl italic leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
                    "Sensemaking is retrospective — we can only understand what we have already experienced. The leader's task is to create the conditions in which people can make sense together."
                  </p>
                  <p className="text-[oklch(0.50_0.04_255)] text-sm mt-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    — Karl Weick, Sensemaking in Organizations
                  </p>
                </div>
                <p className="text-[oklch(0.35_0.04_255)] leading-relaxed text-sm">
                  Understanding how leaders construct meaning — and how that meaning shapes action — is the foundation of everything we do at Sensemaking Leadership. This article is essential reading for anyone serious about developing adaptive leadership capability.
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
            {restArticles.map((article, i) => (
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="gold-line mx-auto reveal" />
            <h2 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-4 reveal">
              Stay Informed
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] mb-8 reveal reveal-delay-1">
              Receive our latest thinking on leadership, learning, and organisational development — delivered to your inbox.
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
