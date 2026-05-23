/* ============================================================
   ABOUT PAGE — Sensemaking Leadership
   Sections: Page hero, Mission/Vision, Our Story, Team, Values
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, Award, Users, Globe, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/about-section-jgjZvVbmmGdPRpNRZLDMBD.webp";
const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const values = [
  {
    icon: <BookOpen size={24} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Evidence-Based Practice",
    desc: "Every programme is grounded in research — drawing from cognitive science, psychotherapy, systems thinking, and adult learning theory.",
  },
  {
    icon: <Users size={24} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Relational Intelligence",
    desc: "We believe transformation happens in relationship. Our facilitation creates safe, generative spaces where people can think, feel, and grow together.",
  },
  {
    icon: <Award size={24} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Rigorous Standards",
    desc: "As an SSG-approved provider, we hold ourselves to the highest standards of curriculum design, delivery quality, and learner outcomes.",
  },
  {
    icon: <Globe size={24} className="text-[oklch(0.76_0.12_85)]" />,
    title: "Contextual Relevance",
    desc: "We contextualise every programme for the specific cultural, organisational, and sectoral realities of our clients — in Singapore and across the region.",
  },
];

const milestones = [
  { year: "2018", event: "Founded in Singapore with a focus on leadership development and service excellence." },
  { year: "2019", event: "Achieved SSG approval and launched first WSQ-accredited programmes." },
  { year: "2020", event: "Expanded facilitation methodology to integrate psychotherapy-informed learning principles." },
  { year: "2021", event: "Extended regional delivery to Malaysia and Indonesia." },
  { year: "2022", event: "Launched competency-based curriculum for the social service and healthcare sectors." },
  { year: "2023", event: "Developed proprietary Transformative Learning Framework integrating five core disciplines." },
  { year: "2024", event: "Crossed 500 leaders developed across public, private, and social sectors." },
  { year: "2025", event: "Expanded WSQ portfolio to 20+ programmes with SkillsFuture Credit eligibility." },
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
              Our Story & Purpose
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Sensemaking Leadership was founded on the conviction that the most pressing challenge facing organisations today is not a skills gap — it is a meaning gap. Leaders who can make sense of complexity, build trust, and inspire purposeful action are the ones who create lasting change.
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
                To develop leaders and organisations that navigate complexity with clarity, act with purpose, and create meaningful impact — through transformative learning experiences grounded in evidence and delivered with excellence.
              </p>
            </div>
            <div className="bg-[oklch(0.26_0.07_255)] rounded-sm p-10 shadow-sm reveal reveal-delay-1">
              <div className="w-12 h-1 bg-[oklch(0.76_0.12_85)] mb-6" />
              <h2 className="heading-display text-3xl text-white mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">
                A region where every organisation is led by reflective, adaptive leaders who understand that sensemaking — the ability to construct meaning from ambiguity — is the foundational competency of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Team */}
      <section className="py-20 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="section-label mb-4">Our Founder</div>
              <div className="gold-line" />
              <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] mb-6">
                Samuel Nexis
              </h2>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                Samuel is a curriculum developer, service excellence expert, and accredited facilitator with over 15 years of experience in competency-based training and leadership development. He holds a Master of Science in the Science of Learning from Nanyang Technological University (NTU), Singapore.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-5">
                His unique methodology integrates psychotherapy principles into transformative learning design — creating programmes that address not just knowledge and skills, but the deeper mindsets, beliefs, and relational patterns that drive behaviour.
              </p>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-8">
                Samuel is also a business analyst and process optimisation consultant, bringing a systems perspective to every engagement. He has designed and delivered programmes for government agencies, financial institutions, healthcare organisations, and social enterprises across Singapore, Malaysia, and Indonesia.
              </p>
              <div className="space-y-2">
                {[
                  "MSc Science of Learning, Nanyang Technological University",
                  "Accredited Facilitator (IAF-affiliated)",
                  "Certified Business Analyst",
                  "SSG-Approved Adult Educator",
                  "Psychotherapy-Informed Practitioner",
                ].map((cred, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[oklch(0.40_0.10_155)] shrink-0" />
                    <span className="text-[oklch(0.35_0.04_255)] text-sm">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2 relative">
              <img
                src={ABOUT_IMG}
                alt="Samuel Nexis facilitating a leadership session"
                className="w-full h-[520px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[oklch(0.26_0.07_255/0.92)] rounded-sm p-5">
                <p className="text-white text-sm italic leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
                  "The goal of every programme we design is not to transfer information — it is to transform the way people see themselves, their relationships, and their capacity to lead."
                </p>
                <p className="text-[oklch(0.76_0.12_85)] text-xs mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  — Samuel Nexis, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label mb-4 reveal">What Guides Us</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className={`flex gap-5 reveal reveal-delay-${i + 1}`}>
                <div className="w-12 h-12 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[oklch(0.26_0.07_255)] mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{v.title}</h3>
                  <p className="text-[oklch(0.45_0.04_255)] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[oklch(0.26_0.07_255)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="section-label-light mb-4 reveal">Our Journey</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-white reveal">Key Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex gap-8 items-start reveal reveal-delay-${(i % 4) + 1}`}>
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-[oklch(0.76_0.12_85)] font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.year}</span>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[oklch(0.76_0.12_85)] shrink-0 relative z-10 -mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-[oklch(0.26_0.07_255)]" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed pt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="gold-line mx-auto reveal" />
          <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] mb-5 reveal">
            Partner With Us
          </h2>
          <p className="text-[oklch(0.35_0.04_255)] max-w-xl mx-auto mb-8 reveal reveal-delay-1">
            Whether you are looking for a trusted learning partner, a facilitator for your next leadership retreat, or an SSG-funded training solution, we are ready to help.
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
