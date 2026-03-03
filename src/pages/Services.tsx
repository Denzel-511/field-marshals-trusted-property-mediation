import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users, Settings, Handshake, MapPin, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Sales (Lands & Houses)",
    description: "We represent property owners looking to sell their lands, houses, and commercial spaces. Our team handles valuation guidance, marketing, buyer screening, and negotiation to ensure you get the best value for your property.",
  },
  {
    icon: Users,
    title: "Property Purchase Assistance",
    description: "For buyers, we act as your dedicated representative. We help you identify properties that match your budget and preferences, verify documentation, and negotiate on your behalf to secure the best deal.",
  },
  {
    icon: Settings,
    title: "Property Management",
    description: "We provide ongoing management services for property owners, including tenant sourcing, rent collection, maintenance coordination, and regular property inspections to protect your investment.",
  },
  {
    icon: Handshake,
    title: "Property Mediation & Negotiation",
    description: "As neutral mediators, we facilitate fair negotiations between buyers and sellers. Our expertise ensures that both parties reach an agreement that is transparent, equitable, and legally sound.",
  },
  {
    icon: MapPin,
    title: "Nationwide Property Sourcing",
    description: "Need a property in a specific region? We leverage our extensive network across all regions of Ghana to source properties that meet your exact requirements, saving you time and effort.",
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">What We Offer</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Comprehensive property mediation services designed to make buying, selling, and managing property in Ghana seamless.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div key={service.title} className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-xl border border-border bg-card ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need Our Help?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Whether you're buying, selling, or managing property, our team is ready to assist you every step of the way.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us <ChevronRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
