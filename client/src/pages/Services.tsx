/* ============================================================
   SERVICES PAGE — Sensemaking Leadership
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  ArrowRight, Brain, BookOpen, Star, Heart,
  Target, Lightbulb, BarChart2, Users, CheckCircle2
} from "lucide-react";

const FRAMEWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/services-visual-LfMb4K8tKAWzSRqUQ7xskW.webp";

const services = [
  {
    icon: <Brain size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Leadership Development",
    tagline: "Building Adaptive, Reflective Leaders",
    desc: "Our leadership development programmes are designed for the realities of today's complex, fast-changing environment. Drawing on sensemaking theory, systems thinking, and evidence-based leadership research, we develop leaders who can navigate ambiguity, build trust, and inspire purposeful action.",
    features: [
      "Sensemaking and adaptive leadership frameworks",
      "360-degree feedback and Individual Development Plans",
      "Experiential learning with real-world application",
      "Cohort-based and one-to-one coaching formats",
      "Available as WSQ-accredited or customised programmes",
    ],
    audience: "Senior leaders, emerging leaders, leadership teams",
  },
  {
    icon: <BookOpen size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "WSQ / SSG-Funded Training",
    tagline: "Competency-Based Learning with Government Support",
    desc: "As an SSG-approved training provider, we offer a portfolio of WSQ-accredited programmes that are eligible for SkillsFuture funding. Our courses are designed to the highest standards of competency-based education, with clear learning outcomes, robust assessment, and measurable workplace transfer.",
    features: [
      "Full portfolio of WSQ-accredited modules",
      "SkillsFuture Credit eligible",
      "Absentee payroll and course fee funding available",
      "Competency-based assessment and certification",
      "Regular curriculum review aligned to SSG frameworks",
    ],
    audience: "Individuals, SMEs, large organisations",
  },
  {
    icon: <Star size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Service Excellence",
    tagline: "Transforming Service Culture from the Inside Out",
    desc: "Service excellence is not a script — it is a mindset. Our programmes go beyond customer service techniques to address the values, beliefs, and relational patterns that drive service behaviour. We help organisations build cultures where excellence is intrinsic, not imposed.",
    features: [
      "Service culture diagnostics and gap analysis",
      "Experiential workshops with role-play and simulation",
      "Manager enablement for sustaining service standards",
      "WSQ Service Excellence modules available",
      "Post-programme coaching and follow-up",
    ],
    audience: "Customer-facing teams, service managers, hospitality and healthcare sectors",
  },
  {
    icon: <Heart size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Psychotherapy-Informed Learning",
    tagline: "Deepening Self-Awareness for Lasting Change",
    desc: "Our signature methodology integrates principles from psychotherapy — including attachment theory, cognitive-behavioural approaches, and somatic awareness — into leadership and learning facilitation. This creates learning experiences that address the whole person, not just the professional role.",
    features: [
      "Trauma-informed facilitation practices",
      "Attachment and relational intelligence frameworks",
      "Cognitive-behavioural tools for mindset change",
      "Somatic and embodied leadership practices",
      "Confidential one-to-one developmental coaching",
    ],
    audience: "Leaders, HR practitioners, social workers, educators",
  },
  {
    icon: <Target size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Process Optimisation",
    tagline: "Aligning Operations with Strategic Intent",
    desc: "Effective organisations are built on well-designed processes. We work with leadership teams to map, analyse, and redesign workflows — eliminating inefficiency, reducing risk, and aligning operations with strategic priorities. Our approach combines business analysis rigour with human-centred design.",
    features: [
      "Business process mapping and analysis",
      "Lean and systems-thinking methodologies",
      "Stakeholder engagement and change management",
      "KPI design and performance measurement",
      "Implementation support and review",
    ],
    audience: "Operations teams, HR departments, SMEs undergoing transformation",
  },
  {
    icon: <Lightbulb size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Facilitation & Coaching",
    tagline: "Creating Spaces Where Transformation Happens",
    desc: "Our accredited facilitators and coaches work with individuals, teams, and organisations to unlock potential, resolve conflict, and build collective intelligence. We facilitate strategic planning sessions, team retreats, and developmental conversations with skill and care.",
    features: [
      "IAF-aligned facilitation methodology",
      "Strategic planning and team alignment workshops",
      "Executive and leadership coaching",
      "Team dynamics and conflict resolution",
      "Group coaching and peer learning circles",
    ],
    audience: "Executive teams, boards, leadership cohorts, project teams",
  },
  {
    icon: <BarChart2 size={32} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Curriculum Development",
    tagline: "Learning Design That Drives Measurable Impact",
    desc: "We design and develop competency-based curricula for organisations, training providers, and government agencies. Our learning design process is rigorous, evidence-based, and aligned to national frameworks including the Singapore Workforce Skills Qualifications (WSQ) system.",
    features: [
      "Needs analysis and competency mapping",
      "WSQ-aligned curriculum design",
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
              A comprehensive suite of learning, development, and consulting services — each designed to produce measurable behavioural change and lasting organisational impact.
            </p>
          </div>
        </div>
      </section>

      {/* Framework image */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="section-label mb-4">Our Approach</div>
              <div className="gold-line" />
              <h2 className="heading-display text-3xl lg:text-4xl text-[oklch(0.26_0.07_255)] mb-5">
                An Integrated System of Learning
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                Our services are not standalone offerings — they are interconnected disciplines within a coherent learning system. The Transformative Learning Framework ensures that every engagement, regardless of entry point, contributes to the development of the whole leader and the whole organisation.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">
                Whether you engage us for a single WSQ programme or a multi-year leadership journey, you benefit from the same rigorous methodology, the same commitment to evidence-based practice, and the same focus on lasting impact.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              <img
                src={FRAMEWORK_IMG}
                alt="Transformative Learning Framework"
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
              <div
                key={i}
                className={`grid lg:grid-cols-3 gap-8 pb-16 border-b border-[oklch(0.88_0.01_90)] last:border-0 reveal`}
              >
                {/* Icon + title */}
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

                {/* Description */}
                <div className="lg:col-span-1">
                  <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">{svc.desc}</p>
                </div>

                {/* Features */}
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
            Our team will work with you to understand your organisation's needs and recommend the most appropriate combination of services and programmes.
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
