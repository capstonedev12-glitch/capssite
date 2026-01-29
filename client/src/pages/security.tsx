import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Key,
  Users,
  Server,
  RefreshCw,
  Database,
  Eye,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Fingerprint,
  Cloud,
  FileCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data is encrypted using industry-standard 256-bit AES encryption both at rest and in transit.",
    details: [
      "TLS 1.3 for all data in transit",
      "AES-256 encryption for data at rest",
      "Encrypted database connections",
      "Secure key management practices",
    ],
  },
  {
    icon: Key,
    title: "Secure Payments",
    description: "PCI-DSS compliant payment processing through trusted partners ensures your financial data is always protected.",
    details: [
      "PCI-DSS Level 1 compliant processors",
      "Tokenized payment storage",
      "Fraud detection and prevention",
      "Secure checkout experience",
    ],
  },
  {
    icon: Fingerprint,
    title: "Access Control",
    description: "Multi-factor authentication and single sign-on options keep your account secure from unauthorized access.",
    details: [
      "Two-factor authentication (2FA)",
      "Session management and timeouts",
      "IP-based access restrictions",
      "Secure password policies",
    ],
  },
  {
    icon: Users,
    title: "Role-Based Permissions",
    description: "Granular permission controls let you define exactly what each team member can access and modify.",
    details: [
      "Custom role definitions",
      "Feature-level permissions",
      "Data access restrictions",
      "Audit trails for all actions",
    ],
  },
  {
    icon: Server,
    title: "Server Security",
    description: "Enterprise-grade infrastructure with continuous monitoring and protection against threats.",
    details: [
      "24/7 security monitoring",
      "DDoS protection",
      "Web application firewall (WAF)",
      "Regular security patching",
    ],
  },
  {
    icon: RefreshCw,
    title: "Backup & Recovery",
    description: "Automated daily backups with point-in-time recovery ensure your data is never lost.",
    details: [
      "Daily automated backups",
      "30-day backup retention",
      "Point-in-time recovery",
      "Geo-redundant storage",
    ],
  },
  {
    icon: Database,
    title: "Multi-Tenant Isolation",
    description: "Your data is logically isolated from other customers, ensuring complete privacy and separation.",
    details: [
      "Separate database schemas",
      "Tenant-specific encryption keys",
      "Network segmentation",
      "Cross-tenant access prevention",
    ],
  },
  {
    icon: Eye,
    title: "Compliance & Auditing",
    description: "Comprehensive logging and compliance frameworks to meet regulatory requirements.",
    details: [
      "SOC 2 Type II readiness",
      "GDPR compliance",
      "CCPA compliance",
      "Complete audit logs",
    ],
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "In Progress", description: "Service organization controls audit" },
  { name: "GDPR", status: "Compliant", description: "EU data protection regulation" },
  { name: "CCPA", status: "Compliant", description: "California Consumer Privacy Act" },
  { name: "PCI DSS", status: "Compliant", description: "Payment Card Industry standards (via partners)" },
];

const practices = [
  "All employees undergo security awareness training",
  "Secure software development lifecycle (SDLC) practices",
  "Regular third-party penetration testing",
  "Bug bounty program for responsible disclosure",
  "Incident response team and procedures",
  "Vendor security assessments",
  "Change management controls",
  "Physical security at data centers",
];

export default function Security() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Enterprise-Grade Security
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-security-headline">
              Your Data Security is{" "}
              <span className="text-gradient">Our Top Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Caps CRM is built on a foundation of security. We employ multiple layers of protection 
              to ensure your business data and customer information remain safe at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Security Trust Banner */}
      <section className="py-8 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                {cert.status === "Compliant" ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : (
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <span className="font-medium text-sm">{cert.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({cert.status})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-protect-headline">How We Protect Your Data</h2>
            <p className="text-muted-foreground">
              From encryption to access controls, every aspect of Caps CRM is designed with security in mind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <Card key={index} data-testid={`card-security-feature-${index}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-security-title-${index}`}>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-security-desc-${index}`}>{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground" data-testid={`text-security-detail-${index}-${i}`}>
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Cloud className="h-4 w-4" />
                Cloud Infrastructure
              </div>
              <h2 className="text-3xl font-bold mb-4" data-testid="text-infrastructure-headline">
                Built on World-Class Infrastructure
              </h2>
              <p className="text-muted-foreground mb-6">
                Caps CRM runs on enterprise-grade cloud infrastructure with multiple layers of redundancy, 
                ensuring high availability and data durability.
              </p>
              <ul className="space-y-3">
                {[
                  "99.9% uptime SLA with automatic failover",
                  "Multiple availability zones for redundancy",
                  "Edge caching for global performance",
                  "Real-time health monitoring and alerting",
                  "Automated scaling to handle traffic spikes",
                  "Geographic data residency options",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime SLA</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Monitoring</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30</div>
                  <p className="text-sm text-muted-foreground">Day Backups</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">256</div>
                  <p className="text-sm text-muted-foreground">Bit Encryption</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Practices</h2>
            <p className="text-muted-foreground">
              Security is embedded in our culture, processes, and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {practices.map((practice, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-md bg-card">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
            <p className="text-muted-foreground">
              We maintain compliance with industry standards and regulations to protect your data.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    cert.status === "Compliant" ? "bg-primary/10" : "bg-muted"
                  }`}>
                    {cert.status === "Compliant" ? (
                      <FileCheck className="h-6 w-6 text-primary" />
                    ) : (
                      <RefreshCw className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className={`text-xs font-medium mb-2 ${
                    cert.status === "Compliant" ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {cert.status}
                  </p>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Security Vulnerability Reporting</h3>
                    <p className="text-muted-foreground mb-4">
                      We take security vulnerabilities seriously. If you believe you've discovered a security 
                      issue in Caps CRM, please report it to us responsibly.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Email: <span className="font-medium">security@capscrm.com</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We will acknowledge your report within 24 hours and work with you to understand and 
                      address the issue promptly. We do not pursue legal action against researchers who 
                      follow responsible disclosure practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Questions About Security?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team is happy to discuss our security practices in detail. Contact us to learn more 
            about how we protect your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2" data-testid="button-security-contact">
                Contact Security Team
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/privacy">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-security-privacy">
                View Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
