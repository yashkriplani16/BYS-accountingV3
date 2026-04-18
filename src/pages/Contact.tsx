import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll be in touch within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner
        image={heroContact}
        title="Get in Touch"
        subtitle="We'd love to hear from you. Let's start a conversation."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Send Us a Message</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-3 mb-8">
                How Can We Help?
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-none border-border bg-background"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-none border-border bg-background"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-none border-border bg-background"
                  />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-10 w-full border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a Service</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="tax">Tax Planning</option>
                    <option value="advisory">Business Advisory</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="reporting">Financial Reporting</option>
                  </select>
                </div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-none border-border bg-background"
                />
                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 text-base w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Contact Details</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mt-3 mb-8">
                Visit Our Office
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm">Level 10, 123 Business Street<br />Sydney, NSW 2000, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+61 2 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">info@bysaccounting.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday – Friday: 8:30 AM – 5:30 PM<br />Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 w-full h-64 bg-secondary flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm">Map Integration Available</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
