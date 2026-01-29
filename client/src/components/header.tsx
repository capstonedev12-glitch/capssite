import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/knowledge-hub", label: "Knowledge Hub" },
  { href: "/security", label: "Security" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <div className="flex w-32 items-center justify-center rounded-md">
            <img  src="/caps-logo.png"/>
          </div> 
        </Link>

     <nav
  className="hidden lg:flex items-center gap-4 px-4 py-2 rounded-b-md"
  data-testid="nav-desktop"
>
  {navLinks.map((link) => {
    const isActive = location === link.href;
    return (
      <Link key={link.href} href={link.href}>
        <span className="relative inline-block">
          <Button
            size="sm"
            variant="ghost"
            className={`
              px-2 py-1
              ${isActive ? "text-[#f36500e0] font-semibold" : "text-black"}
              hover:text-primary
            `}
            data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {link.label}
          </Button>
          {isActive && (
            <span className="absolute left-0 right-0 -bottom-0 h-0.5 bg-[#f36500e0]  rounded-full" />
          )}
        </span>
      </Link>
    );
  })}
</nav>



        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:block">
            <Button data-testid="button-header-demo">
              Book a Demo
            </Button>
          </Link>
          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background" data-testid="nav-mobile">
          <nav className="container mx-auto flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact" className="mt-2">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-demo">
                Book a Demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
