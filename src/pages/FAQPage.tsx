import React, { useEffect } from 'react';
import FAQHero from '@/components/FAQHero';
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, Clock, DollarSign, Zap, Users } from "lucide-react";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <FAQHero />

      {/* Getting Started Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Getting Started</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What is PARCELIS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS is a comprehensive package protection service backed by InsureShip, a trusted provider with over 20 years of experience. We protect your shipments from loss, damage, and theft—including porch piracy—while completely removing the burden from merchants. Your customers file claims directly through our self-service portal, and we handle everything from there.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How is PARCELIS different from carrier insurance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unlike carrier insurance, PARCELIS provides comprehensive coverage including porch piracy and theft—issues that carriers typically don't cover. We offer faster claim resolution (5-7 days vs. weeks or months), zero merchant involvement, and a self-service claims portal for your customers. Plus, we work across all major carriers, so you're protected no matter who ships your packages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Who is InsureShip and why does it matter?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                InsureShip has been providing package protection solutions for over 20 years, protecting millions of shipments for thousands of merchants. Their expertise and financial stability ensure that claims are paid quickly and reliably. When you choose PARCELIS, you're backed by decades of industry-leading experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How do I get started with PARCELIS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Getting started is simple: fill out our online application form, complete the quick integration with your e-commerce platform (usually takes less than 15 minutes), and you're ready to go. No long-term contracts required, and you can start protecting packages immediately after approval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Is there a long-term contract required?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No! PARCELIS operates on flexible terms with no long-term commitments. You can start and stop coverage as your business needs change. We believe in earning your business every day through excellent service, not by locking you into contracts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Coverage & Protection Section */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Coverage & Protection</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What does PARCELIS coverage include?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS provides comprehensive protection against loss, damage, and theft of packages—including porch piracy. We cover packages from the moment they leave your facility until they're safely in your customer's hands. This includes in-transit damage, lost packages, stolen deliveries, and weather-related damage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Does PARCELIS cover porch piracy/package theft?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Unlike most carrier insurance, PARCELIS specifically covers porch piracy and package theft. This is one of our most valuable benefits, as package theft has become increasingly common and is rarely covered by traditional shipping insurance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Which carriers are supported?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS supports all major carriers including USPS, UPS, FedEx, and DHL. We also support international shipments through various carriers. This multi-carrier approach means you're protected regardless of which shipping provider you choose for each order.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What are the coverage limits?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS provides coverage up to $2,500 per box and $25,000 per shipment. These generous limits ensure that even high-value orders are fully protected. If you regularly ship items exceeding these values, contact us to discuss custom coverage options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What's NOT covered by PARCELIS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS does not cover items that are prohibited by carriers (hazardous materials, illegal items), packages with insufficient packaging, declared value discrepancies, or fraud. We also don't cover mysterious disappearances without proof of shipment or delivery confirmation. Full terms and conditions are provided during signup.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Can I insure international shipments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! PARCELIS supports international shipments across multiple carriers. International coverage follows the same comprehensive protection standards as domestic shipments, including protection against loss, damage, and theft.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Pricing & Costs Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Pricing & Costs</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-12" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How much does PARCELIS cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS pricing is based on your order value and volume. The exact rate depends on your industry, average order value, and shipping volume. Visit our pricing page or contact us for a custom quote based on your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Who pays for the protection—me or my customers?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You have options! Many merchants pass the small cost to customers as an optional add-on at checkout, while others absorb it as a cost of doing business to provide peace of mind. Our platform supports both models, and we can help you determine the best approach for your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Are there any setup fees or monthly minimums?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No setup fees and no monthly minimums! You only pay for the packages you protect. This makes PARCELIS accessible to businesses of all sizes, from startups to enterprise retailers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Integration & Setup Section */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Integration & Setup</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-15" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Which e-commerce platforms does PARCELIS integrate with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                PARCELIS integrates seamlessly with Shopify, NEXT Commerce, WooCommerce, BigCommerce, and Magento. We also offer API access for custom platforms. Our integrations are designed to work with your existing checkout flow with minimal disruption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How long does integration take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most merchants complete the integration in under 15 minutes. For Shopify and NEXT Commerce, it's often just a one-click app installation. More complex platforms may require up to an hour, but our support team is available to help with any technical questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Do I need technical expertise to set up PARCELIS?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Not at all! Our integrations are designed to be merchant-friendly with step-by-step instructions. Most merchants complete setup on their own, but our support team is always available if you need assistance. No coding or technical skills required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Claims Process Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Claims Process</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-18" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How does the claims process work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                When an issue occurs, your customer simply visits our self-service claims portal, submits their claim with relevant details (tracking number, photos of damage, etc.), and we take it from there. Our team reviews the claim, verifies the information, and processes payment directly to the customer—all within 5-7 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Do I need to handle customer claims?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No! This is one of the biggest advantages of PARCELIS. Your customers file claims directly through our portal, and we handle everything from investigation to payment. You have zero involvement, freeing up your time to focus on growing your business instead of dealing with shipping issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How long does claim resolution take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most claims are resolved within 5-7 days. This is significantly faster than carrier insurance, which can take weeks or even months. Our streamlined process and dedicated claims team ensure your customers get their money back quickly, protecting your brand reputation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-21" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What documentation is needed for a claim?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Customers typically need to provide: tracking number, photos of damage (if applicable), delivery confirmation or police report (for theft), and any correspondence with the carrier. Our claims portal guides customers through exactly what's needed for their specific situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-22" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How are customers compensated when a claim is approved?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Once a claim is approved, we issue payment directly to the customer via their preferred method (typically direct deposit or check). The payment covers the full value of the lost or damaged items, up to the coverage limits. Customers don't need to wait for you to issue a refund or replacement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Support Section */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={32} />
            <h2 className="text-3xl font-bold">Support & Additional Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-23" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                What kind of support does PARCELIS provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We provide comprehensive support through multiple channels: email support, detailed documentation, integration guides, and a responsive support team. Our goal is to make your experience with PARCELIS as smooth as possible, from setup through daily operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-24" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Can I see analytics or reporting on protected orders?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! Your PARCELIS dashboard provides detailed analytics including: number of protected packages, claim rates, claim resolution times, and total coverage value. These insights help you understand shipping performance and customer satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-25" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                How do I contact PARCELIS for help?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                You can reach us through our contact page, where you'll find our email address and a contact form. We respond to all inquiries within one business day. For urgent issues, our support team prioritizes quick resolution to keep your business running smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Bottom CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help. Reach out to learn more about how PARCELIS can protect your packages and delight your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://apps.shopify.com/parcelis" target="_blank" rel="noopener noreferrer">Get Parcelis</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FAQPage;
