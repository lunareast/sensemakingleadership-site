/* ============================================================
   ABOUT PAGE — Sensemaking Leadership
   Content sourced from: SensemakingFlagshipProgrammev2
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/about-section-jgjZvVbmmGdPRpNRZLDMBD.webp";
const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const values = [
  {
    title: "Practitioner-Led",
    desc: "Most leadership development is delivered by people who study leadership. Everything we do is grounded in the lived experience of someone who has practised it — at scale, in high-stakes environments, across military command, Cabinet, and the private sector.",
  },
  {
    title: "Inside Out",
    desc: "Durable leadership is built from the inside out. We address the heartware — purpose, values, trust, relationships — that determines whether technical competence actually translates into impact.",
  },
  {
    title: "Owned, Not Borrowed",
    desc: "We do not hand participants a framework and ask them to apply it. We help them discover their own — from their own experience. Ownership of a framework you discovered is fundamentally different from compliance with one you were handed.",
  },
  {
    title: "Honest About What We Are",
    desc: "Sensemaking Leadership is a new company. But this is not a new practice. We are honest with early clients that the Flagship is a first formal cohort — and we price and position accordingly. Integrity before scale.",
  },
];

const teamMembers = [
  {
    name: "Tan Chuan-Jin (CJ)",
    role: "Practitioner & Lead Facilitator",
    credential: "25 years across military command, Cabinet & private sector",
    bio: "CJ brings the practitioner's perspective and the credibility of lived experience across sectors. The Heartware Equation is not a framework invented to start a company — it is a framework distilled from 25 years of actual practice, now being made available in a structured form for the first time.",
    highlights: [
      "Singapore Cabinet Minister (former)",
      "Military command experience",
      "Executive Chairman, HyperEdge",
      "Co-founder, APG Pay (fintech)",
    ],
  },
  {
    name: "Samuel",
    role: "Learning Architect",
    credential: "MSc Science of Learning, NTU",
    bio: "Samuel brings the learning architecture — psychotherapy-informed facilitation and competency-based curriculum design. He translates CJ's approach into structured developmental experience, ensuring the methodology produces measurable, transferable outcomes that persist beyond the programme.",
    highlights: [
      "MSc Science of Learning, Nanyang Technological University",
      "Psychotherapy-informed facilitator",
      "Competency-based curriculum designer",
      "Accredited Adult Educator",
    ],
  },
  {
    name: "John",
    role: "Organisational Developer",
    credential: "Corporate & non-profit delivery expertise",
    bio: "John brings organisational development depth and delivery capability across corporate and non-profit contexts. Both Samuel and John translate CJ's approach into structured developmental experience. Together they provide the operational rigour and delivery systems that ensure the programme scales without losing its integrity.",
    highlights: [
      "Organisational development specialist",
      "Corporate and non-profit delivery",
      "Programme design and facilitation",
      "Change management expertise",
    ],
  },
];

export default function About() {
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
            <div className="section-label-light mb-4">About Us</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
              A New Company.<br />Not a New Practice.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Sensemaking Leadership is a new company. But what is being formalised here has been developed and tested over nearly 25 years, across environments where the consequences of poor leadership were real and immediate — not simulated in a classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-sm p-10 border border-[oklch(0.88_0.01_90)] shadow-sm reveal">
              <div className="w-12 h-1 bg-[oklch(0.40_0.10_155)] mb-6" />
              <h2 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-4">Our Mission</h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">
                To develop leaders who navigate complexity with clarity, drive transformative learning, and build organisations that endure — through a methodology grounded in lived experience, not borrowed frameworks.
              </p>
            </div>
            <div className="bg-[oklch(0.26_0.07_255)] rounded-sm p-10 shadow-sm reveal reveal-delay-1">
              <div className="w-12 h-1 bg-[oklch(0.76_0.12_85)] mb-6" />
              <h2 className="heading-display text-3xl text-white mb-4">The Problem We Exist to Solve</h2>
              <p className="text-white/70 leading-relaxed">
                Most leaders were never actually trained to lead. They were trained to be excellent in their domain — and then figured it out as they went. That is not a personal failing. It is a structural gap. And it is one of the most consequential and least addressed challenges in organisational development today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label mb-4 reveal">The Founding Team</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">
              A Practitioner, a Learning Architect, and an Organisational Developer
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] mt-4 leading-relaxed reveal reveal-delay-1">
              The combination is not common. Together, the three founders bring what most leadership development programmes lack: someone who has actually done it, someone who knows how to teach it, and someone who knows how to scale it.
            </p>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, i) => (
              <div key={i} className={`grid lg:grid-cols-3 gap-8 bg-white rounded-sm p-8 lg:p-10 border border-[oklch(0.88_0.01_90)] shadow-sm reveal reveal-delay-${i + 1}`}>
                <div className="lg:col-span-1">
                  <div className="w-10 h-1 bg-[oklch(0.76_0.12_85)] mb-4" />
                  <h3 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-1">{member.name}</h3>
                  <p className="text-[oklch(0.40_0.10_155)] text-sm font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{member.role}</p>
                  <p className="text-[oklch(0.50_0.04_255)] text-xs italic">{member.credential}</p>
                </div>
                <div className="lg:col-span-1">
                  <p className="text-[oklch(0.35_0.04_255)] leading-relaxed text-sm">{member.bio}</p>
                </div>
                <div className="lg:col-span-1">
                  <h4 className="section-label mb-3">Credentials</h4>
                  <ul className="space-y-2">
                    {member.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[oklch(0.40_0.10_155)] mt-0.5 shrink-0" />
                        <span className="text-[oklch(0.35_0.04_255)] text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label mb-4 reveal">What Guides Us</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">Our Commitments</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <div className="border-accent-left">
                  <h3 className="font-semibold text-[oklch(0.26_0.07_255)] mb-2 text-lg" style={{ fontFamily: "'Fraunces', serif" }}>{v.title}</h3>
                  <p className="text-[oklch(0.45_0.04_255)] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensemaking in Practice */}
      <section className="py-20 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label-light mb-4 reveal">Sensemaking in Practice</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-white reveal">
              The Practitioner's Credential
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed reveal reveal-delay-1">
              Most leadership development is delivered by people who study leadership. This programme is delivered by someone who has practised it — at scale, in high-stakes environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2009",
                title: "The National Day Reframe",
                body: "Tasked with organising Singapore's National Day Parade, CJ asked a different question: what is this actually for? The answer was national belonging — not the parade. The result was extending the Pledge recitation simultaneously across the island and around the world. First time it had been done. Now a fixture people look forward to every year.",
              },
              {
                year: "Policy",
                title: "Systems Thinking at Scale",
                body: "KidStart — early childhood intervention for children from disadvantaged backgrounds. Manpower policy reform — lifting wages for lower-income workers while keeping Singapore open to global talent. Both required holding competing pressures, acting on a long-term thesis, and building coalition across stakeholders with conflicting short-term interests.",
              },
              {
                year: "Now",
                title: "The Private Sector",
                body: "CJ is currently building APG Pay (fintech & payments) and serving as Executive Chairman of HyperEdge (prefabricated data centres). When he speaks about leading through uncertainty in the private sector, it is not theoretical. He is doing it now — and bringing those lessons directly into the programme.",
              },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <div className="text-[oklch(0.76_0.12_85)] font-bold text-sm mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.year}</div>
                <h3 className="heading-display text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="gold-line mx-auto reveal" />
          <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] mb-5 reveal">
            Work With Us
          </h2>
          <p className="text-[oklch(0.35_0.04_255)] max-w-xl mx-auto mb-8 reveal reveal-delay-1">
            Whether you are ready for the full Flagship Programme or want to start with Session Zero, we are ready to have a real conversation about what your organisation needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center reveal reveal-delay-2">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get In Touch <ArrowRight size={16} />
            </Link>
            <Link href="/programmes" className="btn-secondary inline-flex items-center gap-2">
              Our Programmes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
