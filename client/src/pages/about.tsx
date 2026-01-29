import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Target,
  Heart,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Award,
  Clock,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description: "Every feature is designed specifically for auto transport professionals. We don't try to be everything to everyone.",
  },
  {
    icon: Heart,
    title: "Customer-First",
    description: "Your success is our success. We listen to feedback, respond quickly, and continuously improve based on your needs.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We protect your data like it's our own. Security isn't an afterthought—it's built into everything we do.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description: "Powerful doesn't have to mean complicated. We make complex workflows simple and intuitive.",
  },
];

const roadmapItems = [
  {
    quarter: "Q1 2026",
    title: "Enhanced Mobile Experience",
    description: "Full-featured mobile app for iOS and Android with offline capabilities",
    status: "in-progress",
  },
  {
    quarter: "Q2 2026",
    title: "AI-Powered Insights",
    description: "Machine learning predictions for lead scoring and demand forecasting",
    status: "planned",
  },
  {
    quarter: "Q3 2026",
    title: "Advanced Carrier Network",
    description: "Expanded carrier database with real-time capacity and rating system",
    status: "planned",
  },
  {
    quarter: "Q4 2026",
    title: "Enterprise Features",
    description: "Multi-location management, custom workflows, and white-label options",
    status: "planned",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Truck className="h-4 w-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-about-headline">
              Built by Auto Transport Professionals,{" "}
              <span className="text-gradient">For Auto Transport Professionals</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We understand the challenges of running an auto transport business because we've lived them. 
              Caps CRM was born from firsthand experience in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-why-built-headline">Why We Built Caps CRM</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For years, we watched auto transport businesses struggle with the same problems: 
                  leads scattered across spreadsheets, quotes taking too long to generate, payments 
                  delayed, and no single source of truth for customer data.
                </p>
                <p>
                  We tried every CRM on the market. Generic solutions that didn't understand 
                  auto transport. Industry software that hadn't been updated in a decade. 
                  Cobbled-together tools that never quite worked right.
                </p>
                <p>
                  So we decided to build the solution ourselves. Caps CRM is the result of 
                  years of experience in auto transport, combined with modern software 
                  development practices. It's the tool we always wished we had.
                </p>
                <p>
                  Today, Caps CRM powers hundreds of auto transport businesses across the 
                  country—from single-operator brokers to multi-location enterprises.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card data-testid="card-stat-0">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-value-0">500+</div>
                  <p className="text-sm text-muted-foreground" data-testid="text-stat-label-0">Businesses Trust Us</p>
                </CardContent>
              </Card>
              <Card data-testid="card-stat-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-value-1">1M+</div>
                  <p className="text-sm text-muted-foreground" data-testid="text-stat-label-1">Orders Processed</p>
                </CardContent>
              </Card>
              <Card data-testid="card-stat-2">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-value-2">99.9%</div>
                  <p className="text-sm text-muted-foreground" data-testid="text-stat-label-2">Uptime Guaranteed</p>
                </CardContent>
              </Card>
              <Card data-testid="card-stat-3">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-value-3">24/7</div>
                  <p className="text-sm text-muted-foreground" data-testid="text-stat-label-3">Support Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid="text-mission-title">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower auto transport businesses with technology that simplifies operations, 
                  accelerates growth, and creates exceptional customer experiences. We believe 
                  every broker, dispatcher, and carrier deserves access to enterprise-grade tools.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid="text-vision-title">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the operating system for the auto transport industry. We envision 
                  a future where every vehicle shipment is tracked, every payment is seamless, 
                  and every customer interaction is informed and professional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make, from product development to customer support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where We're Headed</h2>
            <p className="text-muted-foreground">
              We're constantly improving Caps CRM based on customer feedback and industry trends. 
              Here's a glimpse of what's coming.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "in-progress"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.quarter}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {item.status === "in-progress" ? (
                        <>
                          <Clock className="h-3 w-3 text-primary" />
                          <span className="text-primary">In Progress</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3" />
                          <span>Planned</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Our Commitment
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Security & Reliability You Can Trust
              </h2>
              <p className="text-muted-foreground mb-6">
                Your business data is your most valuable asset. We've invested heavily in 
                security infrastructure, compliance certifications, and operational excellence 
                to ensure Caps CRM is always available and always secure.
              </p>
              <ul className="space-y-3">
                {[
                  "99.9% uptime SLA with credits for any downtime",
                  "SOC 2 Type II certification in progress",
                  "Daily automated backups with point-in-time recovery",
                  "Dedicated security team monitoring 24/7",
                  "Regular third-party security audits",
                  "GDPR and CCPA compliant data handling",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/security" className="inline-block mt-6">
                <Button variant="outline" className="gap-2" data-testid="button-about-security">
                  Learn More About Security
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">256-bit Encryption</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">SOC 2 Ready</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">99.9% Uptime</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-medium text-sm">24/7 Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Become part of the Caps CRM family. Start your free trial today and see why 
            hundreds of auto transport businesses trust us with their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" data-testid="button-about-demo">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-about-trial">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
