/* ============================================================
   HOME PAGE — Sensemaking Leadership
   Design: Corporate Bauhaus, Structured Authority
   Sections: Hero, Value Proposition, Services, Programmes,
             Framework Visual, Testimonials, Partners, CTA
   ============================================================ */

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight, CheckCircle2, Users, BookOpen, Star,
  Award, Globe, TrendingUp, Brain, Heart, Lightbulb, Target
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/hero-banner-v2-2m3iGG8GMCETDBneQH3DGi.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/about-section-jgjZvVbmmGdPRpNRZLDMBD.webp";
const FRAMEWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/services-visual-LfMb4K8tKAWzSRqUQ7xskW.webp";
const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const services = [
  {
    icon: <Brain size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Leadership Development",
    desc: "Structured programmes that build adaptive, reflective leaders capable of navigating complexity and driving purposeful change.",
  },
  {
    icon: <BookOpen size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Competency-Based Training",
    desc: "Competency-based, WSQ-inspired courses designed for measurable workplace impact.",
  },
  {
    icon: <Star size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Service Excellence",
    desc: "Transforming service culture through experiential learning, embedding excellence as an organisational value.",
  },
  {
    icon: <Heart size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Psychotherapy-Informed Learning",
    desc: "Integrating therapeutic principles into facilitation to deepen self-awareness, relational intelligence, and behavioural change.",
  },
  {
    icon: <Target size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Process Optimisation",
    desc: "Systematic analysis and redesign of workflows to eliminate inefficiency and align operations with strategic goals.",
  },
  {
    icon: <Lightbulb size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Facilitation & Coaching",
    desc: "Accredited facilitation and coaching that creates safe, generative spaces for individual and team transformation.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Leaders Developed" },
  { value: "3", label: "Countries Served" },
  { value: "20+", label: "WSQ Programmes" },
];

const testimonials = [
  {
    quote: "The leadership programme fundamentally shifted how our senior team approaches complexity. The sensemaking framework gave us a shared language for navigating ambiguity.",
    name: "Senior Director",
    org: "Government Agency, Singapore",
  },
  {
    quote: "What sets Sensemaking Leadership apart is the depth of facilitation. The psychotherapy-informed approach created genuine breakthroughs in our team dynamics.",
    name: "Head of Learning & Development",
    org: "Financial Services Organisation",
  },
  {
    quote: "The WSQ service excellence programme delivered measurable improvements in our customer satisfaction scores within three months of completion.",
    name: "Operations Director",
    org: "Hospitality Group, Singapore",
  },
];

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_90)]">
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.07_255/0.97)] via-[oklch(0.22_0.07_255/0.88)] to-[oklch(0.22_0.07_255/0.70)]" />

        <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="section-label-light mb-6">Singapore · Malaysia · Indonesia</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.05]">
              Making Meaning.<br />
              <span className="text-[oklch(0.76_0.12_85)]">Leading Change.</span>
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Sensemaking Leadership develops leaders who navigate complexity with clarity, drive transformative learning, and build organisations that endure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programmes" className="btn-primary inline-flex items-center gap-2">
                Explore Programmes <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-light inline-flex items-center gap-2">
                Speak to Us
              </Link>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>



      {/* ── ABOUT TEASER ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="section-label mb-4">Who We Are</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-6">
                Where Sensemaking Meets Leadership
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-6">
                Sensemaking Leadership Pte Ltd is a Singapore-based learning and development company that integrates the science of sensemaking with evidence-based leadership practice. We believe that the most effective leaders are those who can make meaning of ambiguity, build relational trust, and translate insight into purposeful action.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-8">
                Our approach is grounded in psychotherapy principles, systems thinking, and competency-based design — producing learning experiences that are intellectually rigorous, emotionally resonant, and practically applicable.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "WSQ-inspired competency-based programmes",
                  "Psychotherapy-informed facilitation methodology",
                  "Accredited facilitators and business analysts",
                  "Regional delivery across Singapore, Malaysia & Indonesia",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[oklch(0.40_0.10_155)] mt-0.5 shrink-0" />
                    <span className="text-[oklch(0.35_0.04_255)] text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[oklch(0.76_0.12_85/0.15)] rounded-sm" />
              <img
                src={ABOUT_IMG}
                alt="Leadership facilitation session"
                className="w-full h-[480px] object-cover rounded-sm shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[oklch(0.40_0.10_155/0.12)] rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[oklch(0.93_0.01_90)] diagonal-divider">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="section-label mb-4 reveal">What We Do</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-5 reveal">
              Our Services
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed reveal reveal-delay-1">
              A comprehensive suite of learning and development solutions, each designed to produce measurable behavioural change and organisational impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className={`card-service reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="mb-4">{svc.icon}</div>
                <h3 className="text-lg font-semibold text-[oklch(0.26_0.07_255)] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                  {svc.title}
                </h3>
                <p className="text-[oklch(0.45_0.04_255)] text-sm leading-relaxed">
                  {svc.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[oklch(0.88_0.01_90)]">
                  <Link href="/services" className="text-[oklch(0.40_0.10_155)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK VISUAL ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <img
                src={FRAMEWORK_IMG}
                alt="Transformative Learning Framework"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <div className="section-label mb-4">Our Approach</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-6">
                The Transformative Learning Framework
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-6">
                Our proprietary framework integrates five interconnected disciplines — Sensemaking, Leadership, Service Excellence, Competency-Based Training, and Psychotherapy-Informed Learning — into a coherent system that develops the whole leader.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-8">
                Each discipline reinforces the others, creating a learning architecture that produces durable change rather than temporary performance uplift.
              </p>
              <div className="border-accent-left">
                <p className="text-[oklch(0.26_0.07_255)] italic text-lg" style={{ fontFamily: "'Fraunces', serif" }}>
                  "Sensemaking is not about finding the right answer — it is about developing the capacity to ask better questions in the face of uncertainty."
                </p>
              </div>
              <div className="mt-8">
                <Link href="/services" className="btn-primary inline-flex items-center gap-2">
                  Explore Our Approach <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section className="py-24 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="section-label-light mb-4">What We Offer</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl lg:text-5xl text-white mb-6">
                Programmes Built for Impact
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                From short competency-based workshops to multi-module leadership journeys, our programmes are designed to meet organisations where they are and take them where they need to go.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Award size={20} />, title: "WSQ Accredited Courses", desc: "SkillsFuture-eligible programmes with government funding support" },
                  // caveat shown inline below
                  { icon: <Users size={20} />, title: "Leadership Journeys", desc: "Multi-module cohort programmes for emerging and senior leaders" },
                  { icon: <Globe size={20} />, title: "Regional Delivery", desc: "Contextualised programmes delivered across Singapore, Malaysia, and Indonesia" },
                  { icon: <TrendingUp size={20} />, title: "Customised Solutions", desc: "Bespoke learning design aligned to your organisation's strategic objectives" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 reveal reveal-delay-${i + 1}`}>
                    <div className="w-10 h-10 rounded-sm bg-[oklch(0.35_0.07_255)] flex items-center justify-center text-[oklch(0.76_0.12_85)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {item.title}{i === 0 && <span className="ml-1 text-[oklch(0.76_0.12_85)] text-xs font-normal italic">*in progress</span>}
                      </div>
                      <div className="text-white/60 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/programmes" className="btn-outline-light inline-flex items-center gap-2">
                View All Programmes <ArrowRight size={16} />
              </Link>
            </div>

            <div className="reveal reveal-delay-2">
              <img
                src={PROGRAMMES_IMG}
                alt="Training programme in session"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-4 reveal">Client Voices</div>
            <div className="gold-line mx-auto reveal" />
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] reveal">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`bg-white rounded-sm p-8 shadow-sm border border-[oklch(0.88_0.01_90)] reveal reveal-delay-${i + 1}`}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[oklch(0.76_0.12_85)] text-[oklch(0.76_0.12_85)]" />
                  ))}
                </div>
                <blockquote className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed mb-6 italic" style={{ fontFamily: "'Fraunces', serif" }}>
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-[oklch(0.88_0.01_90)] pt-4">
                  <div className="font-semibold text-[oklch(0.26_0.07_255)] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</div>
                  <div className="text-[oklch(0.50_0.04_255)] text-xs mt-0.5">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.26 0.07 255) 0%, oklch(0.35 0.09 200) 50%, oklch(0.40 0.10 155) 100%)"
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.76_0.12_85)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <div className="section-label-light mb-4 reveal">Ready to Begin?</div>
          <div className="gold-line mx-auto reveal" />
          <h2 className="heading-display text-4xl lg:text-5xl text-white mb-6 reveal">
            Let's Build Your Leadership Capability
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 reveal reveal-delay-1">
            Whether you are developing emerging leaders, transforming service culture, or seeking SSG-funded training solutions, we are ready to partner with you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal reveal-delay-2">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="btn-outline-light inline-flex items-center gap-2">
              Browse Programmes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
