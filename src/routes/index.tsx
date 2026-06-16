import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATELIER — Premium Design & Build Studio, Chennai" },
      {
        name: "description",
        content:
          "Chennai's premium design + build studio. Luxury villas, commercial spaces, interiors, renovations and architecture — delivered with precision, transparency and craftsmanship.",
      },
      { property: "og:title", content: "ATELIER — Premium Design & Build, Chennai" },
      {
        property: "og:description",
        content:
          "15+ years. 500+ landmark projects. RERA & ISO certified. Crafting spaces built for generations.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <div className="font-bold text-lg">ATELIER</div>
              <div className="text-xs text-muted-foreground">Chennai · Design + Build</div>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Design & Build
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Luxury residential, commercial and interior construction in Chennai.
            <br />
            500+ projects. 15+ years. RERA & ISO certified.
          </p>
          <button className="bg-foreground text-background px-8 py-3 rounded-lg font-semibold hover:opacity-90">
            Get Consultation
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Villas", desc: "Luxury homes with modern design" },
              { title: "Commercial Spaces", desc: "Office & retail developments" },
              { title: "Interior Design", desc: "Premium interior solutions" },
            ].map((service) => (
              <div key={service.title} className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2026 ATELIER. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
