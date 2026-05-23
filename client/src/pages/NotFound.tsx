import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.97_0.015_90)]">
      <Navigation />
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-[oklch(0.88_0.01_90)] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>404</div>
          <div className="w-12 h-1 bg-[oklch(0.76_0.12_85)] mx-auto mb-6" />
          <h1 className="heading-display text-3xl text-[oklch(0.26_0.07_255)] mb-4">Page Not Found</h1>
          <p className="text-[oklch(0.45_0.04_255)] mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Return to Home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
