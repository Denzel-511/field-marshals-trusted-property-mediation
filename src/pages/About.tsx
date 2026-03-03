import { Shield, MapPin, Handshake, Monitor, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">About Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            From field-based operations to a digital-first property mediation agency serving all of Ghana.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Field Marshals Real Estate Agency was founded with a clear mission: to bridge the gap between property owners and buyers across Ghana. Our name reflects our roots — marshalling the field, going directly to communities to identify opportunities and build trust.
                </p>
                <p>
                  Over the years, we've evolved from a field-based operation to a fully digital, professional agency. But our core values remain unchanged — integrity, transparency, and dedication to our clients' interests.
                </p>
                <p>
                  We don't own properties. We represent, negotiate, and manage on behalf of our clients. This independence means we always act in your best interest, whether you're buying, selling, or managing property.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  "Provision of trustworthy, transparent, and efficient property mediation services nationwide through professionalism and digital innovation is our hallmark."
                </p>
              </div>
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "To become a leading property mediation and management agency known for integrity, reliability, and nationwide reach."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-2">Our Edge</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Years of Field Experience", desc: "Deep knowledge of Ghana's property landscape, built through years of hands-on work across multiple regions." },
              { icon: Handshake, title: "Strong Negotiation Approach", desc: "We advocate fiercely for our clients, ensuring you get the best possible deal every time." },
              { icon: MapPin, title: "Nationwide Sourcing", desc: "From Accra to Tamale, we source properties across all regions of Ghana." },
              { icon: Users, title: "Flexible Meeting Arrangements", desc: "We meet you where it's convenient. Appointments are arranged at mutually agreed locations." },
              { icon: Monitor, title: "Digital Transparency", desc: "Our digital-first approach means you can track progress, view listings, and communicate with ease." },
              { icon: Shield, title: "Trust & Integrity", desc: "Every transaction is handled with the utmost care for ethical standards and client protection." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
