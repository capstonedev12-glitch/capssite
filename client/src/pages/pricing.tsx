import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  ArrowRight,
  HelpCircle,
  Users,
  Building2,
} from "lucide-react";
import { useState } from "react";
const plans = [
  {
    name: "Agent",
    description: "For dispatchers & sales agents",
    price: 25,
    icon: Users,
    popular: false,
    features: [
      { name: "Access own leads only", included: true },
      { name: "View & create own quotes and orders", included: true },
      { name: "Cannot assign leads", included: false },
      { name: "Cannot charge payments", included: false },
      { name: "Central Dispatch posting", included: true },
      { name: "No system-wide notifications", included: false },
      { name: "No change logs access", included: false },
      { name: "No admin permissions", included: false },
    ],
  },
  {
    name: "Super Admin",
    description: "Full system control for owners & managers",
    price: 100,
    icon: Building2,
    popular: false,
    features: [
      { name: "Access all leads, quotes & orders", included: true },
      { name: "Assign & manage leads", included: true },
      { name: "Charge payments (Authorize.Net & Clover)", included: true },
      { name: "Central Dispatch post / unpost", included: true },
      { name: "Central Dispatch activity notifications", included: true },
      { name: "System-wide change logs", included: true },
      { name: "Manage all users & permissions", included: true },
      { name: "Full admin & configuration access", included: true },
    ],
  },
];
const faqs = [
  {
    question: "Can I upgrade an Agent to Super Admin later?",
    answer:
      "Yes. You can upgrade an Agent account to Super Admin at any time. The new pricing will apply immediately.",
  },
  {
    question: "Is pricing per user or per account?",
    answer:
      "Agent pricing is per user. Super Admin pricing applies per admin account.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No, there are no setup fees. You can start using Caps CRM immediately.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes, annual billing is available with discounted pricing. Contact our sales team for details.",
  },
];
export default function Pricing() {
  const [agents, setAgents] = useState(1);
  const [admins, setAdmins] = useState(1);

  const agentCost = agents * 25;
  const adminCost = admins * 100;
  const total = agentCost + adminCost;

  return (
    <Layout>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Role-Based Pricing
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Pay only for the role you need. No hidden fees.
          </p>
          <Badge variant="secondary">14-Day Free Trial</Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular ? "border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className="h-12 w-12 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        {f.included ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span
                          className={!f.included ? "text-muted-foreground" : ""}
                        >
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="pt-6">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Agent pricing is per user. Super Admin pricing is per admin account.
          </p>
        </div>
      </section> 
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Agent vs Super Admin
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Agent</th>
                  <th className="text-center py-3 px-4 bg-primary/5">
                    Super Admin
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Access Scope", "Own only", "All system data"],
                  ["Lead Assignment", false, true],
                  ["Charge Payments", false, true],
                  ["Central Dispatch", true, true],
                  ["Notifications", false, true],
                  ["Change Logs", false, true],
                  ["Admin Controls", false, true],
                ].map(([label, a, s], i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4">{label}</td>
                    <td className="text-center">
                      {a === true ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : a === false ? (
                        <X className="mx-auto h-4 w-4 text-muted-foreground" />
                      ) : (
                        a
                      )}
                    </td>
                    <td className="text-center bg-primary/5">
                      {s === true ? (
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      ) : (
                        s
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            Monthly Cost Calculator
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Estimate your monthly cost based on users and admin accounts.
          </p>

          <Card>
            <CardContent className="p-8 space-y-8"> 
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium">
                    Agent Users
                  </label>
                  <span className="font-semibold">
                    {agents} × $25
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={50}
                  value={agents}
                  onChange={(e) => setAgents(Number(e.target.value))}
                  className="w-full"
                />
              </div>
 
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium">
                    Super Admin Accounts
                  </label>
                  <span className="font-semibold">
                    {admins} × $100
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={admins}
                  onChange={(e) => setAdmins(Number(e.target.value))}
                  className="w-full"
                />
              </div>
 
              <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Monthly Total
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    ${total}/month
                  </p>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
 
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex gap-3">
                  <HelpCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-bl from-orange-400 to-blue-400 text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/80 mb-8">
          Start your free trial today. No credit card required.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="gap-2">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
