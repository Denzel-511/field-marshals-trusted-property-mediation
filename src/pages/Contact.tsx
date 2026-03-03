import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary pt-32 pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Have a property inquiry or want to list your property? Reach out to us today.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Reach Us Directly</h3>
                <div className="space-y-5">
                  <a href="tel:+233241584752" className="flex items-start gap-3 group">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+233 24 158 4752</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Office Location</p>
                      <p className="text-sm text-muted-foreground">CharlesFely Estates, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">info@fieldmarshals.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Meetings</p>
                      <p className="text-sm text-muted-foreground">By appointment — arranged at mutually convenient locations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/233241584752?text=Hello%2C%20I%27d%20like%20to%20make%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] rounded-lg p-4 hover:bg-[hsl(142,70%,35%)] transition-colors"
              >
                <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <div>
                  <p className="font-medium text-sm">Chat with us on WhatsApp</p>
                  <p className="text-xs opacity-80">Quick response guaranteed</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    <Input placeholder="Subject" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required />
                  </div>
                  <Textarea placeholder="Your message..." rows={6} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
                  <Button type="submit" size="lg" className="w-full sm:w-auto px-12">Send Message</Button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border bg-muted h-64 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Google Maps — CharlesFely Estates, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
