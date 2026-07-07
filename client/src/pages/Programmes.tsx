/* ============================================================
   PROGRAMMES PAGE — Sensemaking Leadership
   Content sourced from: SensemakingFlagshipProgrammev2
   ============================================================ */

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { ArrowRight, Clock, Users, CheckCircle2 } from "lucide-react";

const PROGRAMMES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/programmes-visual-VSYmtoVnxqu8tZVgiopdBU.webp";

const modules = [
  {
    number: "01",
    half: "Day 1 · Morning",
    title: "The World You Lead In",
    focus: "Systems thinking · Me vs We · Today vs Tomorrow · The Singapore Strategy Map",
    what: "Participants map the forces shaping their environment — geopolitical, demographic, technological. They locate themselves in the system, not as bystanders but as actors with choices to make.",
    outcome: "A shared vocabulary for complexity. The realisation that the key variable in any system is people — and that people require more than hardware and software.",
  },
  {
    number: "02",
    half: "Day 1 · Afternoon",
    title: "The Heartware Equation™",
    focus: "Why hardware & software hit a ceiling · What heartware is and how it's built · The ÷ Me corrective",
    what: "The diagnostic at the heart of the programme. Participants examine their own development — where they have invested and where they have not. The ego is named directly as the most consistent threat to effective leadership.",
    outcome: "A clear framework for understanding why capable leaders underperform. Personal awareness of where each participant sits in the equation right now.",
  },
  {
    number: "03",
    half: "Day 2 · Morning",
    title: "The Excavation™",
    focus: "Mining lived experience · Thematic organisation · Framework as discovery",
    what: "Participants surface their own negative and positive leadership incidents. Thematically organise them. Begin to see their own framework emerging — not from a template but from their actual experience. CJ's framework is shared as illustration, not prescription.",
    outcome: "A first draft personal leadership framework. Homework: develop it into something they could teach to others.",
  },
  {
    number: "04",
    half: "Day 2 · Afternoon",
    title: "Teaching What You've Built",
    focus: "Share & discuss · Group sharpening · The teaching test",
    what: "Participants return with their frameworks. Share in groups. Challenge each other's thinking. Then the final requirement: write it up as a class they would run for others. Teaching forces coherence. Coherence forces integrity.",
    outcome: "A completed, articulable personal leadership philosophy. The discipline of walking the talk — because they have now committed to teaching it.",
  },
];

const fitRows = [
  { fit: "Strong Fit", items: ["Senior managers and above", "High-potential leaders approaching senior roles", "Public sector leaders with cross-sector responsibility"] },
  { fit: "Possible Fit", items: ["Mid-level managers with significant team responsibility", "Professionals transitioning into leadership roles"] },
  { fit: "Poor Fit", items: ["Junior staff without leadership experience to excavate", "Organisations seeking a motivational event rather than genuine development"] },
];

export default function Programmes() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label-light mb-4">The Flagship Programme</div>
              <div className="gold-line" />
              <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
                Two Days.<br />Four Modules.<br />One Framework — Yours.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                A complete arc from systems thinking to personal leadership philosophy — built on lived experience, not borrowed frameworks.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src={PROGRAMMES_IMG}
                alt="The Flagship Programme in session"
                className="w-full h-72 object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Two Days */}
      <section className="py-16 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="section-label mb-4 reveal text-center">Why Two Days?</div>
            <div className="gold-line mx-auto reveal" />
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed text-center reveal reveal-delay-1">
              The work cannot be compressed without being compromised. The first day creates the conceptual foundation and the diagnostic. The second day does the actual excavation and the building. The gap between days — during which participants complete their frameworks — is not dead time. It is where the real integration happens.
            </p>
            <div className="mt-8 bg-[oklch(0.26_0.07_255)] rounded-sm p-6 reveal reveal-delay-2">
              <p className="text-white/70 text-sm leading-relaxed italic text-center" style={{ fontFamily: "'Fraunces', serif" }}>
                "A 90-minute session can introduce the Heartware Equation. It cannot produce a leader who has genuinely examined their own experience, organised it into a coherent philosophy, and tested it by preparing to teach it. That requires time, discomfort, and return."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Modules */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4 reveal">The Full Architecture</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">The Four Modules</h2>
          </div>
          <div className="space-y-6">
            {modules.map((mod, i) => (
              <div key={i} className={`bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm overflow-hidden reveal reveal-delay-${i + 1}`}>
                <div className="grid lg:grid-cols-4">
                  {/* Module number + timing */}
                  <div className="bg-[oklch(0.26_0.07_255)] p-8 flex flex-col justify-center">
                    <div className="text-[oklch(0.76_0.12_85)] font-bold text-5xl mb-2" style={{ fontFamily: "'Fraunces', serif" }}>{mod.number}</div>
                    <div className="text-white/50 text-xs tracking-wider uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{mod.half}</div>
                    <div className="w-8 h-1 bg-[oklch(0.76_0.12_85)] mt-4" />
                  </div>
                  {/* Title + focus */}
                  <div className="p-8 lg:border-r border-[oklch(0.88_0.01_90)]">
                    <h3 className="heading-display text-xl text-[oklch(0.26_0.07_255)] mb-3">{mod.title}</h3>
                    <p className="text-[oklch(0.40_0.10_155)] text-xs leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{mod.focus}</p>
                  </div>
                  {/* What happens */}
                  <div className="p-8 lg:border-r border-[oklch(0.88_0.01_90)]">
                    <div className="section-label mb-3">What Happens</div>
                    <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">{mod.what}</p>
                  </div>
                  {/* Outcome */}
                  <div className="p-8 bg-[oklch(0.97_0.015_90)]">
                    <div className="section-label mb-3">Outcome</div>
                    <p className="text-[oklch(0.35_0.04_255)] text-sm leading-relaxed">{mod.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-product model */}
      <section className="py-16 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4 reveal">Two Products</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">
              Not Every Organisation Is Ready for the Full Programme
            </h2>
            <p className="text-[oklch(0.35_0.04_255)] mt-4 leading-relaxed reveal reveal-delay-1">
              We offer two distinct products — each a complete experience in its own right, not a truncated version of the other.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Session Zero */}
            <div className="bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm p-10 reveal">
              <div className="section-label mb-4">Entry Point</div>
              <h3 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-2">Session Zero</h3>
              <div className="flex items-center gap-2 mb-6">
                <Clock size={14} className="text-[oklch(0.50_0.04_255)]" />
                <span className="text-[oklch(0.50_0.04_255)] text-sm">90 minutes</span>
              </div>
              <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-6">
                A 90-minute introduction to the Heartware Equation™ — for organisations with a constrained brief, or who want to experience the approach before committing to the full programme.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Introduces the Heartware Equation™",
                  "Demonstrates the facilitation approach",
                  "Creates demand for the Flagship",
                  "Priced as an entry point — not discounted",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[oklch(0.40_0.10_155)] mt-0.5 shrink-0" />
                    <span className="text-[oklch(0.35_0.04_255)] text-sm">{pt}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-secondary inline-flex items-center gap-2 text-sm">
                Enquire About Session Zero <ArrowRight size={14} />
              </Link>
            </div>

            {/* Flagship */}
            <div className="bg-[oklch(0.26_0.07_255)] rounded-sm shadow-sm p-10 reveal reveal-delay-1">
              <div className="section-label-light mb-4">The Full Experience</div>
              <h3 className="heading-display text-3xl text-white mb-2">The Flagship Programme</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-white/50" />
                  <span className="text-white/50 text-sm">2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-white/50" />
                  <span className="text-white/50 text-sm">20–30 participants</span>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                The full two-day programme. The complete arc from systems thinking through The Excavation™ to personal leadership philosophy. This is the product.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  "Four modules across two days",
                  "Residential or focused offsite format",
                  "Small group work (5–6 per group) for The Excavation™",
                  "Post-programme synthesis report",
                  "Priced to reflect full value",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[oklch(0.76_0.12_85)] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-outline-light inline-flex items-center gap-2 text-sm">
                Enquire About the Flagship <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 bg-[oklch(0.93_0.01_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="section-label mb-4 reveal">Who This Is For</div>
            <div className="gold-line reveal" />
            <h2 className="heading-display text-4xl text-[oklch(0.26_0.07_255)] reveal">The Right Participant</h2>
            <p className="text-[oklch(0.35_0.04_255)] mt-4 leading-relaxed reveal reveal-delay-1">
              This programme is designed for leaders who are past the early stages of their careers — people who have enough experience to excavate something meaningful, and enough influence for their leadership philosophy to actually matter to others.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {fitRows.map((row, i) => (
              <div key={i} className={`rounded-sm p-8 reveal reveal-delay-${i + 1} ${
                i === 0 ? "bg-[oklch(0.26_0.07_255)]" : i === 1 ? "bg-white border border-[oklch(0.88_0.01_90)]" : "bg-[oklch(0.88_0.01_90)]"
              }`}>
                <div className={`text-xs font-bold tracking-widest uppercase mb-5 ${
                  i === 0 ? "text-[oklch(0.76_0.12_85)]" : i === 1 ? "text-[oklch(0.40_0.10_155)]" : "text-[oklch(0.50_0.04_255)]"
                }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {row.fit}
                </div>
                <ul className="space-y-3">
                  {row.items.map((item, j) => (
                    <li key={j} className={`text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-[oklch(0.35_0.04_255)]"}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm p-10 reveal">
            <div className="w-10 h-1 bg-[oklch(0.76_0.12_85)] mb-6" />
            <h3 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-4">A Note on Pricing</h3>
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed mb-4">
              We adopt a transparent, modular pricing structure. Facilitation fees are fixed professional fees for programme delivery. Venue and logistics are billed at cost or managed directly by the client. Post-programme support is available as an optional retainer for ongoing coaching or organisational development consulting.
            </p>
            <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">
              We are honest with early clients that the Flagship is a first formal cohort — and we price and position accordingly. Contact us for a conversation about what is right for your organisation.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Request Pricing <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
