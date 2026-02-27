import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Users,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  Phone,
  Bot,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
  FileText,
  Bell,
  Globe,
  Search,
  Lock,
} from "lucide-react";
import { useRef, useState } from "react";

const keyFeatures = [
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Accept payments seamlessly with Authorize.net and Clover integration. Charge customers directly from your CRM.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Gain actionable insights with comprehensive dashboards. Track revenue, leads, conversions, and team performance.",
  },
  {
    icon: Globe,
    title: "Central Dispatch Integration",
    description: "Connect directly to Central Dispatch for real-time load posting, carrier matching, and order syncing.",
  },
  {
    icon: Phone,
    title: "Phone Number Validator",
    description: "Automatically validate customer phone numbers to reduce failed contacts and improve communication rates.",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "24/7 intelligent customer support with our AI-powered chatbot. Answer inquiries and capture leads automatically.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay informed with instant alerts on lead updates, payment confirmations, and dispatch changes.",
  },
];

const uspItems = [
  {
    icon: Truck,
    title: "Built for Auto Transport",
    description: "Unlike generic CRMs, Caps CRM is designed specifically for brokers, dispatchers, and carriers in the auto transport industry.",
  },
  {
    icon: Zap,
    title: "All-in-One Platform",
    description: "From lead capture to delivery confirmation, manage your entire operation without switching between multiple tools.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, SOC 2 compliance readiness, and multi-tenant data isolation keep your business safe.",
  },
  {
    icon: TrendingUp,
    title: "Scale with Confidence",
    description: "Whether you ship 10 or 10,000 vehicles per month, Caps CRM grows with your business needs.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Capture Leads",
    description: "Receive leads from your website, Leads API, or manual entry. All leads flow into one unified dashboard.",
  },
  {
    step: "02",
    title: "Generate Quotes",
    description: "Create professional quotes in seconds with automated pricing based on routes, vehicle types, and market conditions.",
  },
  {
    step: "03",
    title: "Manage Orders",
    description: "Convert quotes to orders with one click. Track shipments, assign carriers, and coordinate dispatching.",
  },
  {
    step: "04",
    title: "Get Paid",
    description: "Collect payments through integrated payment processing. Track invoices and reconcile accounts automatically.",
  },
];

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Owner, FastShip Auto Transport",
    content: "Caps CRM transformed our business. We went from managing spreadsheets to closing 40% more deals in just 3 months. The Central Dispatch integration alone saves us hours every day.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager, Premier Vehicle Logistics",
    content: "The lead workflow feature is incredible. Our team can see exactly where every lead is in the pipeline, and the automated follow-ups have dramatically improved our conversion rates.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Dispatch Coordinator, CrossCountry Carriers",
    content: "Finally, a CRM that understands auto transport. The payment integration with Authorize.net has streamlined our billing process completely. Highly recommend.",
    rating: 5,
  },
];

const painPoints = [
  "Scattered customer data across spreadsheets and sticky notes",
  "Lost leads due to slow follow-up times",
  "Manual quote generation eating up valuable hours",
  "No visibility into team performance or sales pipeline",
  "Disconnected tools requiring constant data re-entry",
  "Payment collection headaches and delayed cash flow",
];

export default function Home() {
  const videoRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const togglePlay = async () => {
  const video = videoRef.current;
  if (!video) return;
  if (video.paused) {
    await video.play();
    setIsPlaying(true);
  } else {
    video.pause();
    setIsPlaying(false);
  }
};
  return (
    <Layout> 
      <section className="relative overflow-hidden hero-gradient">
        <div className="container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6" data-testid="badge-hero">
              <Truck className="h-4 w-4" />
              <span data-testid="text-hero-badge">The #1 CRM for Auto Transport Professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-headline">
              Streamline Your Auto Transport Business with{" "}
              <span className="text-gradient">Caps CRM</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subheadline">
              From lead capture to final delivery, manage your entire operation in one powerful platform. 
              Built by transport professionals, for transport professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2" data-testid="button-hero-demo">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-hero-trial">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
            <div className="mt-10 relative">
              <div className="absolute inset-0 -z-10 blur-3xl bg-primary/20 rounded-full" />
              <div className="mx-auto max-w-7xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden h-full">
                <img
                  src="/dashboard.png"
                  alt="Caps CRM Dashboard Preview"
                  className="w-full h-full"
                  data-testid="image-dashboard-preview"
                />
              </div>
            </div>
            <div className="mt-10">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Star, title: "4.9/5 Rating", desc: "Auto transport teams" },
                { icon: Clock, title: "Setup in 24 Hours", desc: "Fast onboarding" },
                { icon: Shield, title: "Secure by Design", desc: "Tenant isolation" },
                { icon: CheckCircle, title: "14-Day Trial", desc: "No credit card" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/70 backdrop-blur px-4 py-3 shadow-sm"
                  data-testid={`social-proof-${index}`}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,hsl(var(--primary)/0.12),transparent)]" />
      </section> 
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Bot className="h-4 w-4" />
              Product Demo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See Caps CRM in 60 Seconds
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch how brokers manage leads, quotes, orders, dispatch, and payments — all from one clean dashboard.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl"> 
             <div className="relative w-full rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full "
                playsInline
                preload="metadata"
                poster="/dashboard.png"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                data-testid="video-demo"
              >
                <source src="/videos/Demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg backdrop-blur-md">
                  {isPlaying ? (
                    <div className="flex gap-2">
                      <div className="w-2 h-6 bg-black rounded"></div>
                      <div className="w-2 h-6 bg-black rounded"></div>
                    </div>
                  ) : (
                    <div
                      className="w-0 h-0 ml-1"
                      style={{
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        borderLeft: "18px solid black",
                      }}
                    />
                  )}
                </div>
              </button>
            </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/features">
                <Button size="lg" variant="outline">
                  Explore Features
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Want a guided walkthrough? Book a live demo and we’ll set it up with your workflow.
            </p>
          </div>
        </div>
      </section> 
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-problem-headline">
              Running an Auto Transport Business Shouldn't Be This Hard
            </h2>
            <p className="text-lg text-muted-foreground">
              If you're dealing with any of these challenges, you're not alone. 
              Most auto transport businesses struggle with outdated systems and disconnected tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-md bg-destructive/5 border border-destructive/10"
                data-testid={`pain-point-${index}`}
              >
                <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-xs font-bold">!</span>
                </div>
                <p className="text-sm text-muted-foreground" data-testid={`text-pain-point-${index}`}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-solution-headline">
              One Platform. Complete Control.
            </h2>
            <p className="text-lg text-muted-foreground">
              Caps CRM brings together every tool you need to run a successful auto transport business. 
              No more juggling multiple systems or losing track of important details.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-feature-desc-${index}`}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features">
              <Button variant="outline" className="gap-2" data-testid="button-see-features">
                See All Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
 
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-usp-headline">
              Why Auto Transport Companies Choose Caps CRM
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges of the auto transport industry because we built this platform alongside industry veterans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {uspItems.map((item, index) => (
              <div key={index} className="flex gap-4" data-testid={`usp-item-${index}`}>
                <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-usp-title-${index}`}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm" data-testid={`text-usp-desc-${index}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-it-works-headline">
              How Caps CRM Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in minutes. Our streamlined workflow makes managing your auto transport business effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center" data-testid={`step-item-${index}`}>
                <div className="text-5xl font-bold text-primary/90 mb-4" data-testid={`text-step-number-${index}`}>{step.step}</div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-step-desc-${index}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Globe className="h-4 w-4" />
              Seamless Integrations
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect With The Tools You Already Use
            </h2>

            <p className="text-lg text-muted-foreground">
              Caps CRM integrates directly with industry-leading platforms to streamline 
              payments, dispatching, and location services.
            </p>
          </div>
      
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            
            <div className="flex justify-center">
              <img
                src="/logos/maps.png"
                alt="Google Maps API"
                className="h-14 object-contain grayscale-[70%] opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
      
            <div className="flex justify-center">
              <img
                src="/logos/authorize.png"
                alt="Authorize.net"
                className="h-14 object-contain grayscale-[70%] opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
      
            <div className="flex justify-center">
              <img
                src="/logos/central.png"
                alt="Central Dispatch"
                className="h-14 object-contain grayscale-[70%] opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
      
            <div className="flex justify-center">
              <img
                src="/logos/clover.png"
                alt="Clover"
                className="h-14 object-contain grayscale-[70%] opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>

          </div>
      
          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground">
              More integrations coming soon — built specifically for auto transport businesses.
            </p>
          </div>

        </div>
      </section>
 
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Enterprise-Grade Security
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-security-headline">
                Your Data is Protected by Industry-Leading Security
              </h2>
              <p className="text-muted-foreground mb-6">
                We take security seriously. Caps CRM employs multiple layers of protection to ensure your business data and customer information remain safe.
              </p>
              <ul className="space-y-3">
                {[
                  "256-bit AES encryption for all data",
                  "PCI-DSS compliant payment processing",
                  "SOC 2 Type II certification ready", 
                  "Role-based access controls",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/security" className="inline-block mt-6">
                <Button variant="outline" className="gap-2" data-testid="button-learn-security">
                  Learn More About Security
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lock, label: "Encrypted Data" },
                { icon: Shield, label: "PCI Compliant" },
                { icon: Users, label: "Access Control" },
                { icon: Clock, label: "24/7 Monitoring" },
              ].map((item, index) => (
                <Card key={index} data-testid={`card-security-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium text-sm" data-testid={`text-security-label-${index}`}>{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-headline">
              Trusted by Auto Transport Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about transforming their businesses with Caps CRM.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4" data-testid={`rating-stars-${index}`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`text-testimonial-content-${index}`}>"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-sm" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs" data-testid={`text-testimonial-role-${index}`}>{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground" data-testid="text-final-cta-headline">
            Ready to Transform Your Auto Transport Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful auto transport companies using Caps CRM to streamline operations, 
            close more deals, and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" data-testid="button-cta-demo">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground" data-testid="button-cta-trial">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
