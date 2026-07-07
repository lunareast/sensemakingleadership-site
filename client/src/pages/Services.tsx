/* ============================================================
   SERVICES PAGE — Sensemaking Leadership
   Content sourced from: SensemakingFlagshipProgrammev2, SLcomments
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Brain, BookOpen, Star, Heart, Target, Lightbulb, BarChart2, CheckCircle2 } from "lucide-react";

const FRAMEWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/services-visual-LfMb4K8tKAWzSRqUQ7xskW.webp";

const services = [
  {
    icon: <Brain size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "The Flagship Programme",
    tagline: "Two Days. Four Modules. One Framework — Yours.",
    desc: "A two-day leadership development experience built on 25 years of practice across military command, Cabinet, and the private sector. The complete arc from systems thinking through The Excavation™ to a personal leadership philosophy — built on lived experience, not borrowed frameworks.",
    features: [
      "Module 1: The World You Lead In — systems thinking and the Singapore Strategy Map",
      "Module 2: The Heartware Equation™ — the diagnostic for why capable leaders underperform",
      "Module 3: The Excavation™ — mining lived experience to discover your own framework",
      "Module 4: Teaching What You've Built — coherence through the discipline of teaching",
      "Post-programme synthesis report",
    ],
    audience: "Senior managers and above; high-potential leaders approaching senior roles",
  },
  {
    icon: <Lightbulb size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Session Zero",
    tagline: "A First Encounter with the Methodology",
    desc: "A 90-minute introduction to the Heartware Equation™ — for organisations with a constrained brief, or who want to experience the approach before committing to the full Flagship Programme. Priced as an entry point, not a discount — it is a different product with a different scope.",
    features: [
      "Introduction to the Heartware Equation™",
      "Demonstration of the facilitation approach",
      "First experience of working with CJ",
      "Designed to create demand for the Flagship",
      "Can be co-facilitated or delivered online",
    ],
    audience: "Leadership teams, HR decision-makers, organisations exploring the approach",
  },
  {
    icon: <Star size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Service Excellence",
    tagline: "Transforming Service Culture from the Inside Out",
    desc: "Service excellence is not a script — it is a mindset. Our programmes address the values, beliefs, and relational patterns that drive service behaviour. The Heartware component is framed around empathy, relational trust, and service excellence — not just customer service techniques.",
    features: [
      "Service culture diagnostics and gap analysis",
      "Experiential workshops with role-play and simulation",
      "Manager enablement for sustaining service standards",
      "Structured service excellence modules",
      "Post-programme coaching and follow-up",
    ],
    audience: "Customer-facing teams, service managers, hospitality and healthcare sectors",
  },
  {
    icon: <Heart size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Psychotherapy-Informed Facilitation",
    tagline: "Psychological Safety as a Design Principle",
    desc: "Our facilitation integrates psychotherapy principles — attachment theory, cognitive-behavioural approaches, and somatic awareness — to create the psychological safety required for genuine reflection. The Excavation™ is framed as professional reflection, not personal therapy, with structured facilitation and clear boundaries.",
    features: [
      "Trauma-informed facilitation practices",
      "Psychological safety techniques for sensitive content",
      "Attachment and relational intelligence frameworks",
      "Cognitive-behavioural tools for mindset work",
      "Confidential one-to-one developmental coaching",
    ],
    audience: "Leaders, HR practitioners, social workers, educators",
  },
  {
    icon: <Target size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Organisational Development",
    tagline: "Building the Conditions for Strategy to Work",
    desc: "When organisations invest in hardware and software but neglect heartware, they hit a ceiling. We work with leadership teams to build the trust, alignment, and shared purpose that determine whether strategy actually gets executed — addressing the human conditions that most consulting engagements ignore.",
    features: [
      "Leadership team alignment and culture work",
      "Stakeholder engagement and coalition building",
      "Systems thinking applied to organisational challenges",
      "Change management and transition support",
      "Ongoing retainer for organisational development consulting",
    ],
    audience: "Leadership teams, boards, organisations navigating significant change",
  },
  {
    icon: <BarChart2 size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Curriculum Development",
    tagline: "Learning Design That Produces Measurable Transfer",
    desc: "Competency-based curriculum design for organisations and training providers — grounded in adult learning science and built for measurable workplace transfer. Samuel's background in psychotherapy-informed facilitation and competency-based design ensures the learning architecture is as rigorous as the content.",
    features: [
      "Needs analysis and competency mapping",
      "Competency-aligned curriculum design",
      "Instructional design for blended and digital delivery",
      "Assessment design and validation",
      "Train-the-trainer programmes",
    ],
    audience: "Training providers, HR teams, government agencies",
  },
];

export default function Services() {
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
            <div className="section-label-light mb-4">What We Do</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Every engagement is grounded in the same intellectual architecture — the Heartware Equation™, The Excavation™ methodology, and the conviction that durable leadership is built from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="section-label mb-4">The Intellectual Architecture</div>
              <div className="gold-line" />
              <h2 className="heading-display text-3xl lg:text-4xl text-[oklch(0.26_0.07_255)] mb-5">
                Three Interlocking Ideas
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                The Heartware Equation™, the Five Domains of Heartware, and the Leadership Framework are not independent frameworks. They are a single system, presented in sequence — and they form the conceptual spine of everything we do.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">
                Whether you engage us for a single workshop or a multi-year leadership journey, you benefit from the same rigorous methodology, the same commitment to practitioner-led learning, and the same focus on durable, owned outcomes.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              <img
                src={FRAMEWORK_IMG}
                alt="The Transformative Learning Framework"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div key={i} className={`grid lg:grid-cols-3 gap-8 pb-16 border-b border-[oklch(0.88_0.01_90)] last:border-0 reveal`}>
                <div className="lg:col-span-1">
                  <div className="w-14 h-14 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center mb-5">
                    {svc.icon}
                  </div>
                  <h3 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-2">{svc.title}</h3>
                  <p className="text-[oklch(0.40_0.10_155)] text-sm font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {svc.tagline}
                  </p>
                  <div className="text-xs text-[oklch(0.50_0.04_255)] bg-[oklch(0.93_0.01_90)] rounded-sm px-3 py-2 inline-block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <span className="font-semibold">For:</span> {svc.audience}
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">{svc.desc}</p>
                </div>
                <div className="lg:col-span-1">
                  <h4 className="section-label mb-4">What's Included</h4>
                  <ul className="space-y-2">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-[oklch(0.40_0.10_155)] mt-0.5 shrink-0" />
                        <span className="text-[oklch(0.35_0.04_255)] text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="gold-line mx-auto reveal" />
          <h2 className="heading-display text-4xl text-white mb-5 reveal">
            Not Sure Where to Start?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 reveal reveal-delay-1">
            Start with Session Zero — a 90-minute introduction to the Heartware Equation™. No obligation. Just a first encounter with a methodology that takes leadership seriously.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal reveal-delay-2">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Speak to Our Team <ArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="btn-outline-light inline-flex items-center gap-2">
              View Programmes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
