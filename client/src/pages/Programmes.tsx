/* ============================================================
   PROGRAMMES PAGE — Sensemaking Leadership
   ============================================================ */

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Clock, Users, Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const categories = ["All", "Leadership", "Service Excellence", "WSQ Accredited", "Customised"];

const programmes = [
  {
    category: "Leadership",
    wsq: false,
    title: "Sensemaking Leadership Journey",
    subtitle: "A flagship multi-module leadership programme",
    duration: "3 days (modular)",
    participants: "12–20 per cohort",
    level: "Mid to Senior Leaders",
    overview: "A transformative cohort-based programme that develops leaders' capacity to make meaning of complexity, build relational trust, and lead purposeful change. Integrates sensemaking theory, systems thinking, and psychotherapy-informed facilitation.",
    outcomes: [
      "Apply sensemaking frameworks to real organisational challenges",
      "Build adaptive leadership practices for complex environments",
      "Develop relational intelligence and psychological safety",
      "Create a personal leadership philosophy and development plan",
    ],
    funding: "Customised — contact for pricing",
  },
  {
    category: "WSQ Accredited",
    wsq: true,
    title: "WSQ Apply Service Excellence Mindset",
    subtitle: "SSG-funded | SkillsFuture Credit eligible",
    duration: "1 day (8 hours)",
    participants: "Up to 25 per run",
    level: "All staff levels",
    overview: "A WSQ-accredited programme that builds the foundational mindset and skills for delivering exceptional service. Covers service values, customer empathy, and practical service recovery techniques.",
    outcomes: [
      "Articulate the principles of service excellence",
      "Demonstrate empathy and active listening in service interactions",
      "Apply service recovery frameworks in challenging situations",
      "Contribute to a positive service culture",
    ],
    funding: "SSG-funded — up to 70% subsidy available",
  },
  {
    category: "WSQ Accredited",
    wsq: true,
    title: "WSQ Facilitate Effective Communication & Relationships",
    subtitle: "SSG-funded | SkillsFuture Credit eligible",
    duration: "2 days (16 hours)",
    participants: "Up to 20 per run",
    level: "Supervisors and Managers",
    overview: "Develops the communication and relational skills essential for effective leadership. Covers active listening, feedback, conflict resolution, and building psychological safety in teams.",
    outcomes: [
      "Apply active listening and empathic communication techniques",
      "Deliver constructive feedback that drives performance",
      "Navigate conflict with skill and confidence",
      "Build psychologically safe team environments",
    ],
    funding: "SSG-funded — up to 70% subsidy available",
  },
  {
    category: "Service Excellence",
    wsq: false,
    title: "Service Culture Transformation Programme",
    subtitle: "Customised organisational intervention",
    duration: "3–6 months (phased)",
    participants: "Organisation-wide",
    level: "All levels",
    overview: "A comprehensive, phased programme that transforms service culture from the inside out. Begins with a culture diagnostic, moves through awareness-building and skill development, and concludes with manager enablement and sustainability planning.",
    outcomes: [
      "Establish a shared service vision and values",
      "Build service competencies at all levels",
      "Enable managers to sustain service standards",
      "Measure and track service culture improvement",
    ],
    funding: "Customised — contact for pricing",
  },
  {
    category: "WSQ Accredited",
    wsq: true,
    title: "WSQ Lead with Emotional Intelligence",
    subtitle: "SSG-funded | SkillsFuture Credit eligible",
    duration: "2 days (16 hours)",
    participants: "Up to 20 per run",
    level: "Team Leaders and Managers",
    overview: "Develops emotional intelligence as a leadership competency. Participants learn to recognise and regulate their own emotions, understand others' emotional states, and use emotional data to make better decisions and build stronger teams.",
    outcomes: [
      "Identify and manage personal emotional triggers",
      "Read and respond to team members' emotional states",
      "Apply emotional intelligence in decision-making",
      "Build emotionally intelligent team cultures",
    ],
    funding: "SSG-funded — up to 70% subsidy available",
  },
  {
    category: "Leadership",
    wsq: false,
    title: "Psychotherapy-Informed Leadership Retreat",
    subtitle: "Intensive developmental experience",
    duration: "2 days (residential)",
    participants: "8–12 participants",
    level: "Senior Leaders",
    overview: "An intensive residential retreat that uses psychotherapy-informed facilitation to help senior leaders explore the deeper patterns — personal history, relational dynamics, unconscious beliefs — that shape their leadership. Produces profound and lasting insight.",
    outcomes: [
      "Identify personal patterns that limit leadership effectiveness",
      "Develop greater self-awareness and emotional regulation",
      "Build authentic leadership presence",
      "Create a personal development commitment",
    ],
    funding: "Customised — contact for pricing",
  },
  {
    category: "Customised",
    wsq: false,
    title: "Bespoke Leadership & Learning Solutions",
    subtitle: "Tailored to your organisation's needs",
    duration: "Flexible",
    participants: "Flexible",
    level: "All levels",
    overview: "We design and deliver bespoke learning solutions for organisations with specific needs that fall outside our standard portfolio. Our design process begins with a thorough needs analysis and results in a programme that is precisely aligned to your strategic objectives.",
    outcomes: [
      "Fully customised to your organisational context",
      "Aligned to your competency framework and KPIs",
      "Delivered by experienced facilitators",
      "Supported by pre- and post-programme coaching",
    ],
    funding: "Contact us for a customised proposal",
  },
];

function ProgrammeCard({ prog, index }: { prog: typeof programmes[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm overflow-hidden reveal reveal-delay-${(index % 3) + 1}`}>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-sm font-semibold" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "oklch(0.93 0.01 90)",
                color: "oklch(0.26 0.07 255)"
              }}>
                {prog.category}
              </span>
              {prog.wsq && (
                <span className="text-xs px-2 py-1 rounded-sm font-semibold" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: "oklch(0.40 0.10 155)",
                  color: "white"
                }}>
                  WSQ Accredited
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-[oklch(0.26_0.07_255)] mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
              {prog.title}
            </h3>
            <p className="text-[oklch(0.40_0.10_155)] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {prog.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-[oklch(0.50_0.04_255)]" />
            <span className="text-xs text-[oklch(0.50_0.04_255)]">{prog.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={13} className="text-[oklch(0.50_0.04_255)]" />
            <span className="text-xs text-[oklch(0.50_0.04_255)]">{prog.participants}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award size={13} className="text-[oklch(0.50_0.04_255)]" />
            <span className="text-xs text-[oklch(0.50_0.04_255)]">{prog.level}</span>
          </div>
        </div>

        <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed mb-4">{prog.overview}</p>

        {expanded && (
          <div className="border-t border-[oklch(0.88_0.01_90)] pt-4 mt-2">
            <h4 className="section-label mb-3">Learning Outcomes</h4>
            <ul className="space-y-2 mb-4">
              {prog.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[oklch(0.40_0.10_155)] mt-0.5 shrink-0" />
                  <span className="text-[oklch(0.35_0.04_255)] text-sm">{o}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[oklch(0.93_0.01_90)] rounded-sm px-4 py-3">
              <span className="text-xs font-semibold text-[oklch(0.26_0.07_255)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Funding: {prog.funding}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[oklch(0.88_0.01_90)]">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[oklch(0.40_0.10_155)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {expanded ? "Show less" : "View details"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <Link href="/contact" className="text-[oklch(0.26_0.07_255)] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Enquire <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Programmes() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeCategory === "All"
    ? programmes
    : programmes.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_90)]">
      <Navigation />

      {/* Page Hero */}
      <section className="bg-[oklch(0.26_0.07_255)] pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label-light mb-4">Our Programmes</div>
              <div className="gold-line" />
              <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
                Programmes Built for Impact
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                From SSG-funded WSQ courses to bespoke leadership journeys, our programmes are designed to produce measurable change at the individual, team, and organisational levels.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src={PROGRAMMES_IMG}
                alt="Training programme"
                className="w-full h-72 object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[oklch(0.26_0.07_255)] text-white"
                    : "bg-white border border-[oklch(0.88_0.01_90)] text-[oklch(0.35_0.04_255)] hover:border-[oklch(0.26_0.07_255)]"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prog, i) => (
              <ProgrammeCard key={prog.title} prog={prog} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Funding info */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto reveal" />
            <h2 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-5 reveal">
              SkillsFuture & SSG Funding
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-8 reveal reveal-delay-1">
              Many of our programmes are eligible for SSG course fee subsidies of up to 70%, absentee payroll funding, and SkillsFuture Credit. We will guide you through the funding application process to maximise your training investment.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { label: "Course Fee Subsidy", value: "Up to 70%", note: "For eligible Singapore Citizens and PRs" },
                { label: "Absentee Payroll", value: "Claimable", note: "For employers sending staff for training" },
                { label: "SkillsFuture Credit", value: "Eligible", note: "For individual learners aged 25 and above" },
              ].map((f, i) => (
                <div key={i} className={`bg-white rounded-sm p-6 border border-[oklch(0.88_0.01_90)] reveal reveal-delay-${i + 1}`}>
                  <div className="text-2xl font-bold text-[oklch(0.26_0.07_255)] mb-1" style={{ fontFamily: "'Fraunces', serif" }}>{f.value}</div>
                  <div className="text-[oklch(0.40_0.10_155)] text-sm font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.label}</div>
                  <div className="text-[oklch(0.50_0.04_255)] text-xs">{f.note}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 reveal reveal-delay-2">
              Ask About Funding <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
