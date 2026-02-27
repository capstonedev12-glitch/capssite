import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Caps CRM?",
    answer:
      "Caps CRM is an all-in-one platform built specifically for auto transport businesses to manage leads, quotes, orders, payments, and carrier communication from a single dashboard.",
  },
  {
    question: "Who is Caps CRM designed for?",
    answer:
      "Caps CRM is designed for auto transport brokers, dispatchers, and logistics companies looking to streamline operations and improve efficiency.",
  },
  {
    question: "Does Caps CRM support mobile devices?",
    answer:
      "Yes. Caps CRM works on all modern browsers and a dedicated mobile app experience is currently in development.",
  },
  {
    question: "Can I migrate my existing data?",
    answer:
      "Absolutely. Our onboarding team helps migrate leads, customers, and order history from spreadsheets or other CRM systems.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use enterprise-grade encryption and continuous monitoring to ensure your business data remains protected at all times.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide 24/7 support via email and chat to help you whenever you need assistance.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. You can start a free trial with full access to all features to evaluate Caps CRM risk-free.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* HERO */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Got Questions?
            <span className="text-gradient"> We’ve Got Answers</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Everything you need to know about Caps CRM, pricing,
            security, and how it helps auto transport businesses grow.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Still have questions?
          </h2>

          <p className="text-muted-foreground mb-6">
            Our team is here to help you understand how Caps CRM fits
            your business.
          </p>

          <a href="/contact">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Contact Support
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
}