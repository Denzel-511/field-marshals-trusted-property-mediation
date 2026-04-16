import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Maximize, ChevronLeft, Phone, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  if (!property) {
    return (
      <main className="pt-32 pb-20 text-center container-wide px-4">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Property Not Found</h1>
        <Button asChild variant="outline"><Link to="/properties">Back to Properties</Link></Button>
      </main>
    );
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inquiry sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link to="/properties" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ChevronLeft className="h-4 w-4" /> Back to Properties
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Image & Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
              <Badge className={`absolute top-4 left-4 ${property.status === "Sold" ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"}`}>
                {property.status}
              </Badge>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant="secondary">{property.type}</Badge>
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground mb-2">{property.title}</h1>
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" /> {property.location}
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-y border-border py-4 mb-6">
                {property.bedrooms && <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {property.bedrooms} Bedrooms</span>}
                {property.bathrooms && <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {property.bathrooms} Bathrooms</span>}
                <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {property.area}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{property.description}</p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {property.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Inquiry */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-4">Inquire About This Property</h3>
              <form onSubmit={handleInquiry} className="space-y-4">
                <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                <Textarea placeholder="Your message..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
                <Button type="submit" className="w-full">Send Inquiry</Button>
              </form>
              <div className="mt-4 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <a href={`https://wa.me/233241584752?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(property.title)}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+233241584752"><Phone className="h-4 w-4 mr-2" /> Call Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetail;
