import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, Handshake, ChevronRight, Phone, Building2, TrendingUp, FileCheck } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Index = () => {
  const featuredProperties = properties.filter(p => p.status === "Available").slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" alt="Ghana Real Estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium tracking-wide text-primary-foreground/90">Ghana's Trusted Property Mediators</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Trusted Partner in<br />
              <span className="text-accent">Property Mediation</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl font-body">
              We connect property buyers and sellers across Ghana with integrity, transparency, and professional expertise. Let us negotiate your next deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/properties">View Properties <ChevronRight className="h-4 w-4 ml-1" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/contact">List Your Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Property Sales", desc: "We help property owners sell lands and houses at the best market value." },
              { icon: Users, title: "Buyer Representation", desc: "We guide buyers through finding and acquiring the right property." },
              { icon: Handshake, title: "Mediation & Negotiation", desc: "We mediate between parties to ensure fair, transparent deals." },
              { icon: MapPin, title: "Nationwide Sourcing", desc: "We source properties from all regions across Ghana." },
            ].map((service) => (
              <div key={service.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View All Services <ChevronRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Why Choose Us</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Built on Trust, Driven by Results</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Field Marshals Real Estate Agency has earned a reputation as one of Ghana's most reliable property mediation firms. We don't just list properties — we ensure every deal is done right.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Verified properties with clean documentation" },
                  { icon: TrendingUp, text: "Strong negotiation for the best value" },
                  { icon: MapPin, text: "Nationwide coverage across all regions" },
                  { icon: FileCheck, text: "Transparent processes from start to finish" },
                  { icon: Handshake, text: "Flexible meetings at your convenience" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-sm leading-relaxed opacity-90 mb-6">
                  "Provision of trustworthy, transparent, and efficient property mediation services nationwide through professionalism and digital innovation is our hallmark."
                </p>
                <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  "To become a leading property mediation and management agency known for integrity, reliability, and nationwide reach."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Featured Listings</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Properties Available Now</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/properties">View All <ChevronRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Whether you're buying, selling, or need expert mediation, we're here to help. Contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="tel:+233241584752"><Phone className="h-4 w-4 mr-2" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
