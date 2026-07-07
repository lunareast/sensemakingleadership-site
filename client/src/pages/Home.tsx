/* ============================================================
   HOME PAGE — Sensemaking Leadership
   Content sourced from: SensemakingFlagshipProgrammev2, SLcomments, Strategic Commentary
   Design: Corporate Bauhaus, Structured Authority
   ============================================================ */

import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ArrowRight, CheckCircle2, Users, Brain, Heart,
  Lightbulb, Target, Quote
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/hero-banner-v2-2m3iGG8GMCETDBneQH3DGi.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/about-section-jgjZvVbmmGdPRpNRZLDMBD.webp";
const FRAMEWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/services-visual-LfMb4K8tKAWzSRqUQ7xskW.webp";
const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const heartwareElements = [
  {
    label: "Hardware",
    desc: "Technical knowledge, domain expertise, structures and systems.",
    note: "Gets you into the room. Does not keep you there.",
    color: "bg-[oklch(0.35_0.07_255)]",
  },
  {
    label: "Software",
    desc: "Methodologies, frameworks, analytical tools, processes.",
    note: "Builds competence. Does not, by itself, produce impact.",
    color: "bg-[oklch(0.35_0.07_255)]",
  },
  {
    label: "Heartware ×",
    desc: "Purpose, values, trust, relationships — the interior conditions that drive judgment and conviction.",
    note: "The multiplier. Transforms competence into impact.",
    color: "bg-[oklch(0.40_0.10_155)]",
  },
  {
    label: "÷ Me",
    desc: "Ego, personal agenda, the need to be seen and to be right.",
    note: "The larger it grows, the more it collapses everything above it toward zero.",
    color: "bg-[oklch(0.55_0.14_30)]",
  },
];

const services = [
  {
    icon: <Brain size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "The Flagship Programme",
    desc: "A two-day leadership development experience. Four modules. A complete arc from systems thinking to personal leadership philosophy — built on lived experience, not borrowed frameworks.",
  },
  {
    icon: <Lightbulb size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Session Zero",
    desc: "A 90-minute introduction to the Heartware Equation™ — for organisations that want to experience the approach before committing to the full programme.",
  },
  {
    icon: <Heart size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Service Excellence",
    desc: "Transforming service culture from the inside out — addressing the values, beliefs, and relational patterns that drive service behaviour, not just the techniques.",
  },
  {
    icon: <Target size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Facilitation & Coaching",
    desc: "Psychotherapy-informed facilitation and executive coaching that creates the psychological safety required for genuine reflection and lasting change.",
  },
  {
    icon: <Users size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Organisational Development",
    desc: "Working with leadership teams to build the heartware conditions — trust, alignment, shared purpose — that determine whether strategy actually gets executed.",
  },
  {
    icon: <Brain size={28} className="text-[oklch(0.40_0.10_155)]" />,
    title: "Curriculum Development",
    desc: "Competency-based learning design for organisations and training providers — grounded in adult learning science and built for measurable workplace transfer.",
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
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.07_255/0.97)] via-[oklch(0.22_0.07_255/0.88)] to-[oklch(0.22_0.07_255/0.60)]" />

        <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="section-label-light mb-6">Singapore · Malaysia · Indonesia</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-[1.05]">
              Making Meaning.<br />
              <span className="text-[oklch(0.76_0.12_85)]">Leading Change.</span>
            </h1>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-6 max-w-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Most leaders were never actually trained to lead. They were trained to be excellent in their domain — and then figured out leadership as they went.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Sensemaking Leadership exists to close that gap — through a methodology built on 25 years of practice across military command, Cabinet, and the private sector.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/programmes" className="btn-primary inline-flex items-center gap-2">
                The Flagship Programme <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline-light inline-flex items-center gap-2">
                Speak to Us
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
          <div className="w-px h-10 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="section-label mb-4">The Problem Worth Solving</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-6">
                Nobody Actually Taught Me How to Do This
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                When you speak candidly with senior leaders, the same thing surfaces. They were promoted because of domain excellence — and then found themselves responsible for a team, a division, an organisation, and figured it out as they went. Sometimes at significant cost.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                The most difficult problems leaders face are rarely technical. They are problems of judgment, of understanding what is really going on beneath the surface, and of bringing people together around a way forward.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-8">
                Organisations invest heavily in hardware (structures, systems) and software (skills, competencies) — but almost universally neglect heartware: the purpose, values, trust, and relationships that determine whether everything else actually works.
              </p>
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

      {/* ── HEARTWARE EQUATION ── */}
      <section className="py-24 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="section-label-light mb-4 reveal">The Intellectual Architecture</div>
            <div className="gold-line mx-auto reveal" />
            <h2 className="heading-display text-4xl lg:text-5xl text-white mb-6 reveal">
              The Heartware Equation™
            </h2>
            <p className="text-white/70 leading-relaxed reveal reveal-delay-1">
              A diagnostic for understanding why capable leaders underperform — and what to do about it.
            </p>
          </div>

          {/* Equation display */}
          <div className="max-w-2xl mx-auto mb-14 reveal reveal-delay-1">
            <div className="bg-[oklch(0.35_0.07_255)] rounded-sm p-8 text-center">
              <p className="text-white/60 text-sm mb-3 tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Equation</p>
              <div className="text-white font-bold text-2xl lg:text-3xl mb-2" style={{ fontFamily: "'Fraunces', serif" }}>
                SUCCESS = [(HARDWARE + SOFTWARE) × HEARTWARE]
              </div>
              <div className="w-64 h-px bg-[oklch(0.76_0.12_85)] mx-auto my-3" />
              <div className="text-[oklch(0.76_0.12_85)] font-bold text-2xl lg:text-3xl" style={{ fontFamily: "'Fraunces', serif" }}>
                ÷ Me (Ego)
              </div>
              <p className="text-white/50 text-xs mt-4 italic" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                The operations are deliberate. Heartware multiplies. Ego divides — and a large enough ego collapses the entire numerator toward zero.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {heartwareElements.map((el, i) => (
              <div key={i} className={`${el.color} rounded-sm p-6 reveal reveal-delay-${i + 1}`}>
                <div className="text-[oklch(0.76_0.12_85)] font-bold text-lg mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                  {el.label}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-3">{el.desc}</p>
                <p className="text-white/50 text-xs italic">{el.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center reveal reveal-delay-3">
            <Link href="/programmes" className="btn-outline-light inline-flex items-center gap-2">
              See How We Apply This <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="section-label mb-4 reveal">What We Do</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-5 reveal">
              Our Services
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed reveal reveal-delay-1">
              Every engagement is grounded in the same intellectual architecture — the Heartware Equation™, The Excavation™ methodology, and the conviction that durable leadership is built from the inside out.
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

      {/* ── THE EXCAVATION ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <img
                src={FRAMEWORK_IMG}
                alt="The Transformative Learning Framework"
                className="w-full rounded-sm shadow-xl"
              />
            </div>
            <div className="reveal reveal-delay-1 order-1 lg:order-2">
              <div className="section-label mb-4">The Method That Makes It Different</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl lg:text-5xl text-[oklch(0.26_0.07_255)] mb-6">
                The Excavation™
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                Most leadership programmes go: here is a framework — now apply it to yourself. This programme inverts that sequence entirely.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-6">
                Participants surface their own lived experience — the incidents, decisions, and relationships that shaped how they lead. They organise it. They articulate it. And then they commit to teaching it to others.
              </p>
              <div className="border-accent-left mb-8">
                <p className="text-[oklch(0.26_0.07_255)] italic text-lg" style={{ fontFamily: "'Fraunces', serif" }}>
                  "Ownership of a framework you discovered is fundamentally different from compliance with a framework you were handed."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Conventional", text: "Framework designed by expert → participant applies it → partial ownership → fades" },
                  { label: "The Excavation™", text: "Raw material from participant's experience → their own articulation → total ownership → durable" },
                ].map((item, i) => (
                  <div key={i} className={`rounded-sm p-4 text-sm ${i === 0 ? "bg-[oklch(0.93_0.01_90)] text-[oklch(0.45_0.04_255)]" : "bg-[oklch(0.26_0.07_255)] text-white"}`}>
                    <div className="font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>{item.label}</div>
                    {item.text}
                  </div>
                ))}
              </div>
              <Link href="/programmes" className="btn-primary inline-flex items-center gap-2">
                See the Full Programme <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className="py-24 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label-light mb-4 reveal">The Founding Team</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-white reveal">
              A Practitioner, a Learning Architect, and an Organisational Developer
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Tan Chuan-Jin",
                role: "Practitioner & Lead Facilitator",
                bio: "25 years of leadership practice across military command, Cabinet, and the private sector. Currently building APG Pay (fintech) and serving as Executive Chairman of HyperEdge. When he speaks about leading through uncertainty, it is not theoretical — he is doing it now.",
              },
              {
                name: "Samuel",
                role: "Learning Architect",
                bio: "Psychotherapy-informed facilitator and competency-based curriculum designer. MSc in the Science of Learning (NTU). Translates CJ's approach into structured developmental experience — ensuring the methodology produces measurable, transferable outcomes.",
              },
              {
                name: "John",
                role: "Organisational Developer",
                bio: "Organisational development depth and delivery capability across corporate and non-profit contexts. Brings the operational rigour and delivery systems that ensure the programme scales without losing its integrity.",
              },
            ].map((member, i) => (
              <div key={i} className={`bg-[oklch(0.35_0.07_255)] rounded-sm p-8 reveal reveal-delay-${i + 1}`}>
                <div className="w-12 h-1 bg-[oklch(0.76_0.12_85)] mb-5" />
                <h3 className="heading-display text-xl text-white mb-1">{member.name}</h3>
                <p className="text-[oklch(0.76_0.12_85)] text-xs font-semibold mb-4 tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center reveal reveal-delay-3">
            <Link href="/about" className="btn-outline-light inline-flex items-center gap-2">
              About Sensemaking Leadership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SENSEMAKING IN PRACTICE ── */}
      <section className="py-24 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label mb-4 reveal">Sensemaking in Practice</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">
              Not Theory. Lived Experience.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The National Day Reframe",
                body: "In 2009, tasked with organising Singapore's National Day Parade, CJ asked a different question: what is this actually for? The answer was not the parade — it was national belonging. The result was extending the Pledge recitation simultaneously across the island and around the world. First time it had been done. Now a fixture people genuinely look forward to every year.",
                label: "Sensemaking in action",
              },
              {
                title: "Policy as Systems Thinking",
                body: "KidStart — early childhood intervention for children from disadvantaged backgrounds, built on the insight that the most consequential interventions happen before formal education begins. Manpower policy reform — lifting wages for lower-income workers while keeping Singapore open to global talent. Both required holding competing pressures and acting on a long-term thesis.",
                label: "Systems thinking at scale",
              },
              {
                title: "The Private Sector Now",
                body: "CJ is currently building APG Pay (fintech & payments) and serving as Executive Chairman of HyperEdge (prefabricated data centres). When he speaks about leading through uncertainty in the private sector, it is not theoretical. He is doing it now — and bringing those lessons directly into the programme.",
                label: "Current practice",
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-sm p-8 border border-[oklch(0.88_0.01_90)] shadow-sm reveal reveal-delay-${i + 1}`}>
                <div className="section-label mb-3">{item.label}</div>
                <h3 className="heading-display text-xl text-[oklch(0.26_0.07_255)] mb-4">{item.title}</h3>
                <p className="text-[oklch(0.45_0.04_255)] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.26 0.07 255) 0%, oklch(0.35 0.09 200) 50%, oklch(0.40 0.10 155) 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[oklch(0.76_0.12_85)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <div className="section-label-light mb-4 reveal">Ready to Begin?</div>
          <div className="gold-line mx-auto reveal" />
          <h2 className="heading-display text-4xl lg:text-5xl text-white mb-6 reveal">
            Start with Session Zero
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 reveal reveal-delay-1">
            A 90-minute introduction to the Heartware Equation™. Experience the approach before committing to the full Flagship Programme. No obligation — just a first encounter with a methodology that takes leadership seriously.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal reveal-delay-2">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Enquire About Session Zero <ArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="btn-outline-light inline-flex items-center gap-2">
              The Flagship Programme
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
