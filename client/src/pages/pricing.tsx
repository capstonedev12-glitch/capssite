import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  ArrowRight,
  HelpCircle,
  Zap,
  Users,
  Building2,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for solo brokers and small operations",
    price: 49,
    icon: Zap,
    popular: false,
    features: [
      { name: "Up to 3 users", included: true },
      { name: "500 leads per month", included: true },
      { name: "Lead management", included: true },
      { name: "Lead workflow pipeline", included: true },
      { name: "Basic reporting", included: true },
      { name: "Email support", included: true },
      { name: "Payment integration (Authorize.net)", included: false },
      { name: "Central Dispatch integration", included: false },
      { name: "Leads API access", included: false },
      { name: "AI Chatbot", included: false },
      { name: "Phone number validator", included: false },
      { name: "Custom branding", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For growing teams that need more power",
    price: 149,
    icon: Users,
    popular: true,
    features: [
      { name: "Up to 10 users", included: true },
      { name: "2,500 leads per month", included: true },
      { name: "Lead management", included: true },
      { name: "Lead workflow pipeline", included: true },
      { name: "Advanced reporting & analytics", included: true },
      { name: "Priority email & phone support", included: true },
      { name: "Payment integration (Authorize.net & Clover)", included: true },
      { name: "Central Dispatch integration", included: true },
      { name: "Leads API access", included: true },
      { name: "AI Chatbot", included: true },
      { name: "Phone number validator", included: true },
      { name: "Custom branding", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large operations with custom needs",
    price: null,
    icon: Building2,
    popular: false,
    features: [
      { name: "Unlimited users", included: true },
      { name: "Unlimited leads", included: true },
      { name: "Lead management", included: true },
      { name: "Lead workflow pipeline", included: true },
      { name: "Custom reporting & dashboards", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "All payment integrations", included: true },
      { name: "Central Dispatch integration", included: true },
      { name: "Leads API access", included: true },
      { name: "AI Chatbot with custom training", included: true },
      { name: "Phone number validator", included: true },
      { name: "Custom branding & white-label", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be prorated for the remainder of your billing period. When you downgrade, your new rate takes effect at the next billing cycle.",
  },
  {
    question: "What happens if I exceed my lead limit?",
    answer: "We'll notify you when you're approaching your limit. You can either upgrade to a higher plan or purchase additional lead capacity. We never delete your leads or stop your service without warning.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees for any plan. You can start using Caps CRM immediately after signing up. We also offer free data migration assistance to help you get started.",
  },
  {
    question: "Do you offer annual billing?",
    answer: "Yes, we offer a 20% discount when you pay annually. Contact our sales team for custom annual pricing on Professional and Enterprise plans.",
  },
  {
    question: "What's included in the free trial?",
    answer: "The 14-day free trial includes all Professional plan features so you can experience the full power of Caps CRM. No credit card required to start.",
  },
  {
    question: "Can I get a custom plan for my needs?",
    answer: "Absolutely. Our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and we'll create a tailored solution for your business.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-pricing-headline">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Choose the plan that fits your business. All plans include a 14-day free trial. 
              No credit card required.
            </p>
            <Badge variant="secondary" className="text-sm">
              Save 20% with annual billing
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-plan-name-${plan.name.toLowerCase()}`}>{plan.name}</CardTitle>
                  <CardDescription data-testid={`text-plan-desc-${plan.name.toLowerCase()}`}>{plan.description}</CardDescription>
                  <div className="pt-4">
                    {plan.price ? (
                      <div data-testid={`text-plan-price-${plan.name.toLowerCase()}`}>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold" data-testid={`text-plan-price-${plan.name.toLowerCase()}`}>Custom Pricing</div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                      >
                        {plan.price ? "Start Free Trial" : "Contact Sales"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-compare-headline">Compare Plans</h2>
            <p className="text-muted-foreground">
              See all features side by side to find the perfect fit for your business.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto text-sm" data-testid="table-comparison">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold bg-primary/5">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Users</td>
                  <td className="text-center py-3 px-4">Up to 3</td>
                  <td className="text-center py-3 px-4 bg-primary/5">Up to 10</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Leads per month</td>
                  <td className="text-center py-3 px-4">500</td>
                  <td className="text-center py-3 px-4 bg-primary/5">2,500</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Lead Management</td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Lead Workflow Pipeline</td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Payment Integration</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Central Dispatch Integration</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Leads API</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">AI Chatbot</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4">Custom Training</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Phone Validator</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Real-time Notifications</td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Custom Branding</td>
                  <td className="text-center py-3 px-4"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4 bg-primary/5"><X className="h-4 w-4 text-muted-foreground mx-auto" /></td>
                  <td className="text-center py-3 px-4"><Check className="h-4 w-4 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Support</td>
                  <td className="text-center py-3 px-4">Email</td>
                  <td className="text-center py-3 px-4 bg-primary/5">Priority Email & Phone</td>
                  <td className="text-center py-3 px-4">Dedicated Manager</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-faq-headline">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} data-testid={`card-faq-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2" data-testid={`text-faq-question-${index}`}>{faq.question}</h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-faq-answer-${index}`}>{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground" data-testid="text-pricing-cta-headline">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required. 
            Experience the full power of Caps CRM risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" data-testid="button-pricing-cta-trial">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground" data-testid="button-pricing-cta-sales">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
