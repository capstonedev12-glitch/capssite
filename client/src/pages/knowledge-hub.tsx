import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  HelpCircle,
  FileText,
  Sparkles,
  Award,
  ArrowRight,
  Clock,
  User,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Articles", icon: BookOpen },
  { id: "getting-started", label: "Getting Started", icon: GraduationCap },
  { id: "tutorials", label: "CRM Tutorials", icon: FileText },
  { id: "industry-tips", label: "Industry Tips", icon: Lightbulb },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "updates", label: "Product Updates", icon: Sparkles },
  { id: "best-practices", label: "Best Practices", icon: Award },
];

const articles = [
  {
    id: 1,
    title: "Getting Started with Caps CRM: A Complete Onboarding Guide",
    excerpt: "Everything you need to know to set up your account, import your first leads, and start closing deals with Caps CRM. This comprehensive guide walks you through the entire onboarding process.",
    category: "getting-started",
    readTime: "8 min read",
    author: "Caps CRM Team",
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "How to Set Up Your Lead Workflow Pipeline",
    excerpt: "Learn how to customize your lead stages, create automated triggers, and build a sales pipeline that matches your unique business process. Maximize conversions with an optimized workflow.",
    category: "tutorials",
    readTime: "6 min read",
    author: "Mike Johnson",
    date: "Jan 12, 2025",
  },
  {
    id: 3,
    title: "Central Dispatch Integration: Complete Setup Guide",
    excerpt: "Step-by-step instructions for connecting your Caps CRM account to Central Dispatch. Sync loads, find carriers, and manage your dispatch operations from one dashboard.",
    category: "tutorials",
    readTime: "10 min read",
    author: "Caps CRM Team",
    date: "Jan 10, 2025",
  },
  {
    id: 4,
    title: "5 Strategies to Convert More Auto Transport Leads",
    excerpt: "Industry veterans share their top strategies for turning cold leads into booked orders. Learn the psychology of auto transport customers and how to address their concerns.",
    category: "industry-tips",
    readTime: "7 min read",
    author: "Sarah Martinez",
    date: "Jan 8, 2025",
  },
  {
    id: 5,
    title: "Frequently Asked Questions About Caps CRM",
    excerpt: "Find answers to the most common questions about Caps CRM features, pricing, integrations, and support. Updated regularly based on customer feedback.",
    category: "faqs",
    readTime: "5 min read",
    author: "Support Team",
    date: "Jan 5, 2025",
  },
  {
    id: 6,
    title: "What's New: January 2025 Product Update",
    excerpt: "Discover the latest features and improvements in Caps CRM. This month's release includes enhanced reporting, mobile app updates, and new Central Dispatch features.",
    category: "updates",
    readTime: "4 min read",
    author: "Product Team",
    date: "Jan 1, 2025",
  },
  {
    id: 7,
    title: "Best Practices for Auto Transport Payment Collection",
    excerpt: "Learn proven strategies for collecting payments on time, reducing chargebacks, and maintaining healthy cash flow in your auto transport business.",
    category: "best-practices",
    readTime: "9 min read",
    author: "David Chen",
    date: "Dec 28, 2024",
  },
  {
    id: 8,
    title: "How to Use the Leads API for Vendor Integration",
    excerpt: "Technical guide for setting up lead vendor integrations using the Caps CRM Leads API. Includes code examples, webhook configuration, and troubleshooting tips.",
    category: "tutorials",
    readTime: "12 min read",
    author: "Dev Team",
    date: "Dec 22, 2024",
  },
  {
    id: 9,
    title: "Understanding Auto Transport Seasons and Pricing",
    excerpt: "Master the art of seasonal pricing in auto transport. Learn when rates peak, how to forecast demand, and how to adjust your strategy for maximum profitability.",
    category: "industry-tips",
    readTime: "8 min read",
    author: "Industry Experts",
    date: "Dec 18, 2024",
  },
  {
    id: 10,
    title: "Dispatch Management Best Practices for Growing Teams",
    excerpt: "Scale your dispatch operations without losing quality. Learn how top auto transport companies manage larger carrier networks and higher order volumes.",
    category: "best-practices",
    readTime: "11 min read",
    author: "Ops Team",
    date: "Dec 15, 2024",
  },
];

export default function KnowledgeHub() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-knowledge-headline">
              Knowledge Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Guides, tutorials, and best practices to help you get the most out of Caps CRM and grow your auto transport business.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b sticky top-16 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                className="gap-2"
                onClick={() => setActiveCategory(category.id)}
                data-testid={`button-category-${category.id}`}
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover-elevate flex flex-col" data-testid={`card-article-${article.id}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${article.id}`}>
                      {categories.find((c) => c.id === article.category)?.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1" data-testid={`text-read-time-${article.id}`}>
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-snug" data-testid={`text-article-title-${article.id}`}>{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1" data-testid={`text-article-excerpt-${article.id}`}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                    <span className="flex items-center gap-1" data-testid={`text-article-author-${article.id}`}>
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span data-testid={`text-article-date-${article.id}`}>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our support team is here to help. Reach out with your questions and we'll get back to you quickly.
          </p>
          <Link href="/contact">
            <Button className="gap-2" data-testid="button-knowledge-contact">
              Contact Support
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
