import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button"; 
import {
  Users,
  ArrowRight,
  GitBranch,
  CreditCard,
  Bell,
  Webhook,
  Search,
  FileCheck, 
  CheckCircle,
} from "lucide-react";

const featureVisuals = [
  "/vectors/lead-management.jpg",
  "/vectors/workflow.jpg",
  "/vectors/payment.jpg",
  "/vectors/notifications.jpg",
  "/vectors/leads-api.jpg",
  "/vectors/search.png",
  "/vectors/data-compliance.jpg", 
];


const features = [
  {
    id: "lead-management",
    icon: Users,
    title: "Lead Management",
    tagline: "Never lose track of a potential customer again",
    description: "Capture, organize, and nurture leads from multiple sources in one centralized dashboard. Track every interaction and ensure no opportunity slips through the cracks.",
    whatItDoes: [
      "Centralized lead database with custom fields and tags",
      "Import leads from your website, email, phone, or third-party sources",
      "Automatic lead scoring based on engagement and potential value",
      "Lead assignment rules to distribute leads across your team",
      "Contact history tracking with notes, calls, and email logs",
      "Duplicate detection and merge capabilities",
    ],
    whyItMatters: "In the auto transport industry, speed matters. The first broker to respond often wins the deal. With Caps CRM's lead management, you can respond faster, track better, and convert more leads into paying customers.",
    howItHelps: "Auto transport businesses using our lead management feature report a 35% improvement in response times and a 28% increase in lead-to-quote conversion rates. You'll spend less time searching for information and more time closing deals.",
  },
  {
    id: "lead-workflow",
    icon: GitBranch,
    title: "Lead Workflow (Lead → Quote → Order)",
    tagline: "A seamless pipeline from first contact to final delivery",
    description: "Transform how you manage your sales pipeline with our intuitive lead workflow system. Move leads through your funnel with visual clarity and automation.",
    whatItDoes: [ 
      "Automated stage transitions based on actions or time",
      "One-click quote generation from lead details",
    ],
    whyItMatters: "Manual handoffs between lead, quote, and order stages create delays and errors. An automated workflow ensures nothing falls through the cracks and your team always knows what to do next.",
    howItHelps: "Streamline your entire sales process from initial inquiry to booked order. Your dispatchers see orders the moment they're confirmed, carriers get assigned automatically, and customers receive real-time updates throughout.",
  },
  {
    id: "payment-integration",
    icon: CreditCard,
    title: "Payment Integration (Charge Customers)",
    tagline: "Get paid faster with integrated payment processing",
    description: "Accept payments directly within Caps CRM using industry-leading payment processors. No more chasing checks or juggling multiple payment systems.",
    whatItDoes: [
      "Integrated Authorize.net and Clover payment processing",
      "One-click payment collection from customer records", 
      "Partial payments and deposit handling",
      "Complete transaction history and reconciliation reports",
    ],
    whyItMatters: "Cash flow is the lifeblood of any auto transport business. Delayed payments mean delayed carrier payments, which can damage relationships. Integrated payments accelerate your cash cycle.",
    howItHelps: "Collect deposits at booking, balance before pickup, or payment on delivery—whatever works for your business. Customers can pay securely online, and you can track every dollar in real-time.",
  },
  {
    id: "realtime-notifications",
    icon: Bell,
    title: "Real-time Notifications",
    tagline: "Stay informed the moment something happens",
    description: "Never miss a critical update with instant notifications across all your devices. Know immediately when leads come in, payments process, or orders change status.",
    whatItDoes: [
      "Push notifications on desktop",
      "Email alerts for high-priority events",
      "Customizable notification preferences by event type",
      "Team-wide broadcasts for important announcements",
      "Quiet hours and do-not-disturb settings",
      "Notification history and audit logs",
    ],
    whyItMatters: "In auto transport, timing is everything. A delayed response to a new lead or missed carrier update can cost you thousands. Real-time notifications keep you ahead of the competition.",
    howItHelps: "Get alerted the instant a high-value lead comes in, a payment is received, or a driver reports a delivery. Your team stays synchronized and customers get faster responses.",
  },
  {
    id: "leads-api",
    icon: Webhook,
    title: "Leads API (Receive Leads from Vendors)",
    tagline: "Automate lead flow from all your vendor sources",
    description: "Connect your lead vendors directly to Caps CRM. Receive and process leads in real-time without manual data entry or delayed imports.",
    whatItDoes: [
      "RESTful API for seamless vendor integration",
      "Support for major auto transport lead providers", 
      "Automatic field mapping and data validation",
      "Lead source tracking for ROI analysis",
      "Webhook support for custom integrations",
    ],
    whyItMatters: "Buying leads is expensive. Every minute between lead arrival and your response reduces your chance of conversion. Direct API integration eliminates delays and maximizes your lead investment.",
    howItHelps: "Leads from your vendors flow directly into your pipeline. Your team is notified instantly, automatic assignments route leads to available agents, and you can track exactly which sources deliver the best ROI.",
  },
  {
    id: "global-search",
    icon: Search,
    title: "Global Search",
    tagline: "Find anything in your CRM in seconds",
    description: "Powerful search functionality that finds what you need across leads, orders, customers, and more. Stop wasting time clicking through screens.",
    whatItDoes: [
      "Instant search across all CRM data types",
      "Search by phone, email, name or order number", 
      "Advanced filters for refined results", 
      "Search result previews without leaving current page",
    ],
    whyItMatters: "When a customer calls, you need their information immediately. Searching through multiple screens or spreadsheets wastes time and frustrates callers. Global search puts everything at your fingertips.",
    howItHelps: "Press Ctrl+K from anywhere in the app and start typing. Find the customer, order, or lead you need in under 2 seconds. Impress callers with instant access to their complete history.",
  },
  {
    id: "data-compliance",
    icon: FileCheck,
    title: "Data Compliance",
    tagline: "Stay compliant with data protection regulations",
    description: "Built-in compliance features help you meet GDPR, CCPA, and industry-specific requirements. Protect your business from regulatory risks.",
    whatItDoes: [
      "GDPR-compliant data handling and consent tracking",
      "CCPA consumer rights management",
      "Data retention policies with automatic archival",
      "Right to deletion (data erasure) capabilities",
      "Consent logging and audit trails",
      "Privacy-first data export and portability",
    ],
    whyItMatters: "Data protection regulations carry serious penalties for non-compliance. Your customers trust you with their personal information, and regulators expect you to protect it.",
    howItHelps: "Handle data subject requests with a few clicks, maintain complete audit trails of consent and data processing, and ensure your auto transport business stays on the right side of privacy laws.",
  },
  // {
  //   id: "data-security",
  //   icon: Shield,
  //   title: "Data Security",
  //   tagline: "Enterprise-grade protection for your business data",
  //   description: "Your data is protected by multiple layers of security including encryption, access controls, and continuous monitoring. Sleep soundly knowing your business is safe.",
  //   whatItDoes: [
  //     "256-bit AES encryption for data at rest and in transit",
  //     "Role-based access control (RBAC) with granular permissions",
  //     "Two-factor authentication (2FA) for all users",
  //     "IP whitelisting and session management",
  //     "Activity logging and security audit trails",
  //     "Automated threat detection and response",
  //   ],
  //   whyItMatters: "Auto transport businesses handle sensitive customer data including addresses, phone numbers, and payment information. A data breach can destroy customer trust and your reputation.",
  //   howItHelps: "Every piece of data in Caps CRM is encrypted. Access is strictly controlled based on user roles. Suspicious activity triggers immediate alerts. Your customers' data is as secure as your biggest competitors'.",
  // },
];

export default function Features() {
  return (
    <Layout>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-features-headline">
              Powerful Features for{" "}
              <span className="text-gradient">Modern Auto Transport</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Every feature in Caps CRM is designed with auto transport professionals in mind. 
              Streamline your workflow, close more deals, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2" data-testid="button-features-demo">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-features-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-8 border-b sticky top-16 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {features.map((feature) => (
              <a key={feature.id} href={`#${feature.id}`} data-testid={`link-feature-${feature.id}`}>
                <Button variant="ghost" size="sm" className="gap-2" data-testid={`button-nav-${feature.id}`}>
                  <feature.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{feature.title.split("(")[0].trim()}</span>
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                id={feature.id}
                className="scroll-mt-32"
                data-testid={`section-feature-${feature.id}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <feature.icon className="h-4 w-4" />
                      Feature
                    </div>
                    <h2 className="text-3xl font-bold mb-2" data-testid={`text-feature-title-${feature.id}`}>{feature.title}</h2>
                    <p className="text-lg text-primary font-medium mb-4" data-testid={`text-feature-tagline-${feature.id}`}>{feature.tagline}</p>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">What It Does</h3>
                        <ul className="space-y-2">
                          {feature.whatItDoes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="rounded-xl border bg-card p-4 flex items-center justify-center hover:shadow-lg transition">
                      <img
                        src={featureVisuals[index]}  
                        alt={`${feature.title} visual`}
                        className="w-full h-auto object-contain rounded-2xl" 
                      />
                    </div>
                  </div>

                </div>
                {index < features.length - 1 && <div className="border-t mt-24" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground" data-testid="text-features-cta-headline">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how Caps CRM can transform your auto transport business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" data-testid="button-features-cta-demo">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground" data-testid="button-features-cta-pricing">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
