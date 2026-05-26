/* ============================================================
   CONTACT PAGE — Sensemaking Leadership
   ============================================================ */

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663064472366/d9LisnvZb933dYZtQnPs5E/contact-bg-j8RKpDwerdsXYvnhnfvsD7.webp";

const enquiryTypes = [
  "Leadership Development Programme",
  "Competency-Based Training",
  "Service Excellence Programme",
  "Customised Learning Solution",
  "Facilitation or Coaching",
  "Curriculum Development",
  "General Enquiry",
];

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    enquiryType: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a static site, this would integrate with a form service (e.g., Formspree, Netlify Forms)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_90)]">
      <Navigation />

      {/* Page Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundImage: `url(${CONTACT_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[oklch(0.22_0.07_255/0.88)]" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label-light mb-4">Get In Touch</div>
            <div className="gold-line" />
            <h1 className="heading-display text-5xl lg:text-6xl text-white mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you have a specific programme in mind or are just beginning to explore your organisation's learning and development needs, we are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 bg-[oklch(0.97_0.015_90)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-1 reveal">
              <h2 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[oklch(0.76_0.12_85)]" />
                  </div>
                  <div>
                    <div className="section-label mb-1">Email</div>
                    <a href="mailto:hello@sensemakingleadership.asia"
                      className="text-[oklch(0.35_0.04_255)] text-sm hover:text-[oklch(0.40_0.10_155)] transition-colors">
                      hello@sensemakingleadership.asia
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[oklch(0.76_0.12_85)]" />
                  </div>
                  <div>
                    <div className="section-label mb-1">Phone</div>
                    <a href="tel:+6500000000"
                      className="text-[oklch(0.35_0.04_255)] text-sm hover:text-[oklch(0.40_0.10_155)] transition-colors">
                      +65 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[oklch(0.76_0.12_85)]" />
                  </div>
                  <div>
                    <div className="section-label mb-1">Location</div>
                    <p className="text-[oklch(0.35_0.04_255)] text-sm">
                      Singapore<br />
                      (Regional delivery: Malaysia, Indonesia)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.26_0.07_255)] rounded-sm flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[oklch(0.76_0.12_85)]" />
                  </div>
                  <div>
                    <div className="section-label mb-1">Response Time</div>
                    <p className="text-[oklch(0.35_0.04_255)] text-sm">
                      We aim to respond to all enquiries within 1–2 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[oklch(0.26_0.07_255)] rounded-sm p-6">
                <div className="w-8 h-1 bg-[oklch(0.76_0.12_85)] mb-4" />
                <h3 className="text-white font-semibold mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                  Training & Programme Enquiries
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  If you are enquiring about specific programmes, in-house delivery, or customised learning solutions, please include details about your organisation and team size in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 reveal reveal-delay-1">
              {submitted ? (
                <div className="bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm p-12 text-center">
                  <CheckCircle2 size={48} className="text-[oklch(0.40_0.10_155)] mx-auto mb-5" />
                  <h3 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-3">
                    Thank You
                  </h3>
                  <p className="text-[oklch(0.35_0.04_255)] leading-relaxed">
                    Your enquiry has been received. A member of our team will be in touch within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-[oklch(0.88_0.01_90)] shadow-sm p-8 lg:p-10">
                  <h2 className="heading-display text-2xl text-[oklch(0.26_0.07_255)] mb-8">
                    Send Us an Enquiry
                  </h2>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="section-label block mb-2" htmlFor="name">Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2" htmlFor="email">Email Address *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="section-label block mb-2" htmlFor="organisation">Organisation</label>
                      <input
                        id="organisation" name="organisation" type="text"
                        value={form.organisation} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        placeholder="Your organisation name"
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2" htmlFor="role">Your Role</label>
                      <input
                        id="role" name="role" type="text"
                        value={form.role} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        placeholder="e.g. HR Director"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="section-label block mb-2" htmlFor="enquiryType">Enquiry Type *</label>
                    <select
                      id="enquiryType" name="enquiryType" required
                      value={form.enquiryType} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      <option value="">Select an enquiry type</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-7">
                    <label className="section-label block mb-2" htmlFor="message">Your Message *</label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-[oklch(0.88_0.01_90)] bg-[oklch(0.97_0.015_90)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.40_0.10_155)] transition-shadow resize-none"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      placeholder="Tell us about your organisation's needs, the number of participants, preferred timing, and any other relevant details."
                    />
                  </div>

                  <button type="submit" className="btn-primary inline-flex items-center gap-2 w-full justify-center">
                    <Send size={16} /> Send Enquiry
                  </button>

                  <p className="text-[oklch(0.50_0.04_255)] text-xs text-center mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Your information is kept confidential and will only be used to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
