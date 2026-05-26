/* ============================================================
   FOOTER — Sensemaking Leadership
   Design: Deep navy background, three-column layout,
   gold accent on brand mark, Space Grotesk labels
   ============================================================ */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.22_0.07_255)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[oklch(0.76_0.12_85)] rounded-sm flex items-center justify-center">
                <span className="text-[oklch(0.26_0.07_255)] font-bold text-sm" style={{ fontFamily: "'Fraunces', serif" }}>SL</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Fraunces', serif" }}>
                  Sensemaking Leadership
                </div>
                <div className="text-[oklch(0.76_0.12_85)] text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Pte Ltd
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Developing leaders who make meaning of complexity and drive lasting organisational change across Singapore and the region.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center hover:bg-[oklch(0.76_0.12_85)] hover:text-[oklch(0.26_0.07_255)] transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center hover:bg-[oklch(0.76_0.12_85)] hover:text-[oklch(0.26_0.07_255)] transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="section-label-light mb-5">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/programmes", label: "Programmes" },
                { href: "/insights", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-white/60 text-sm hover:text-[oklch(0.76_0.12_85)] transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label-light mb-5">Services</h4>
            <ul className="space-y-2">
              {[
                "Leadership Development",
                "WSQ Training *upcoming",
                "Service Excellence",
                "Transformative Learning",
                "Process Optimisation",
                "Facilitation & Coaching",
                "Business Analysis",
              ].map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label-light mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.76_0.12_85)] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Singapore
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[oklch(0.76_0.12_85)] mt-0.5 shrink-0" />
                <a href="mailto:hello@sensemakingleadership.asia"
                  className="text-white/60 text-sm hover:text-[oklch(0.76_0.12_85)] transition-colors">
                  hello@sensemakingleadership.asia
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[oklch(0.76_0.12_85)] mt-0.5 shrink-0" />
                <a href="tel:+6500000000"
                  className="text-white/60 text-sm hover:text-[oklch(0.76_0.12_85)] transition-colors">
                  +65 0000 0000
                </a>
              </li>
            </ul>


          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            © {new Date().getFullYear()} Sensemaking Leadership Pte Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-white/60 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-xs hover:text-white/60 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
