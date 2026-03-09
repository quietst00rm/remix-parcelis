import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ShoppingBag, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ContactHero from "@/components/ContactHero";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xkgegeav", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send message");
      toast.success("Message sent! We'll respond within 24-48 hours.");
      setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or email us directly at support@myparcelis.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpCards = [
    {
      icon: Mail,
      title: "Email Us Directly",
      description: "Get a response within 24–48 hours",
      href: "mailto:support@myparcelis.com",
      external: false,
    },
    {
      icon: ShoppingBag,
      title: "Get Parcelis",
      description: "Install from the Shopify App Store",
      href: "https://apps.shopify.com/parcelis",
      external: true,
    },
    {
      icon: DollarSign,
      title: "View Pricing",
      description: "Calculate your costs and savings",
      href: "/pricing",
      external: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <ContactHero />

      {/* Centered Contact Form */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto mb-20">
          <div className="rounded-2xl border border-border shadow-lg overflow-hidden bg-card">
            <div className="h-1 bg-primary" />
            <div className="p-8 md:p-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24–48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="application">Application Question</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Or email us directly at{" "}
                <a href="mailto:support@myparcelis.com" className="text-primary hover:underline font-medium">
                  support@myparcelis.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Other Ways to Get Help */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Other Ways to Get Help
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {helpCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              );

              if (card.external) {
                return (
                  <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                );
              }
              if (card.href.startsWith("mailto:")) {
                return (
                  <a key={card.title} href={card.href}>
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={card.title} to={card.href}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Supported Carriers */}
        <section className="max-w-4xl mx-auto rounded-2xl bg-muted p-8 md:p-12">
          <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-8">Supported Carriers</h2>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src={uspsLogo} alt="USPS logo" className="h-10 object-contain" />
            <img src={upsLogo} alt="UPS logo" className="h-10 object-contain" />
            <img src={fedexLogo} alt="FedEx logo" className="h-10 object-contain" />
            <img src={dhlLogo} alt="DHL logo" className="h-10 object-contain" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
