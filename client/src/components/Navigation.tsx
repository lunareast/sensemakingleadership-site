/* ============================================================
   NAVIGATION — Sensemaking Leadership
   Design: Fixed top nav, deep navy background on scroll,
   transparent over hero. Left-anchored brand mark.
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programmes", label: "Programmes" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[oklch(0.26_0.07_255)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Brand mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[oklch(0.76_0.12_85)] rounded-sm flex items-center justify-center">
                <span className="text-[oklch(0.26_0.07_255)] font-bold text-sm" style={{ fontFamily: "'Fraunces', serif" }}>SL</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                  Sensemaking Leadership
                </div>
                <div className="text-[oklch(0.76_0.12_85)] text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Pte Ltd
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "text-[oklch(0.76_0.12_85)]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm ml-2">
              Enquire Now
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.26_0.07_255)] border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-[oklch(0.35_0.07_255)] text-[oklch(0.76_0.12_85)]"
                    : "text-white/80 hover:bg-[oklch(0.35_0.07_255)] hover:text-white"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm mt-2 text-center">
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
