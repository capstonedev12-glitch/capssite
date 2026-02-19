import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/knowledge-hub", label: "Knowledge Hub" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-card" data-testid="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="flex w-32 items-center justify-center rounded-md">
                <img src="/caps-logo.png"></img>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm" data-testid="text-footer-description">
              The all-in-one CRM platform built specifically for auto transport businesses. 
              Streamline your operations from lead to delivery.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2" data-testid="footer-email">
                <Mail className="h-4 w-4" />
                <span>support@capscrm.org</span>
              </div>
              <div className="flex items-center gap-2" data-testid="footer-phone">
                <Phone className="h-4 w-4" />
                <span>1-800-CAPS-CRM</span>
              </div>
              <div className="flex items-center gap-2" data-testid="footer-location">
                <MapPin className="h-4 w-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-product">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-company">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-legal">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Caps CRM. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-tagline">
            Built for auto transport professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
