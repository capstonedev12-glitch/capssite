import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  Calendar,
  MessageSquare,
  Headphones,
  CheckCircle,
  Loader2,
} from "lucide-react";

const contactOptions = [
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "See Caps CRM in action with a personalized walkthrough",
  },
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Get pricing information and discuss your needs",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Get help with your existing Caps CRM account",
  },
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: undefined,
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <Layout> 
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-contact-headline">
              Let's Talk
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-contact-subheadline">
              Ready to transform your auto transport business? Get in touch with our team 
              for a personalized demo, pricing information, or support.
            </p>
          </div>
        </div>
      </section>
 
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-contact-option-${index}`}>
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2" data-testid={`text-option-title-${index}`}>{option.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-option-desc-${index}`}>{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
 
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"> 
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle data-testid="text-form-title">Send Us a Message</CardTitle>
                  <CardDescription data-testid="text-form-description">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {contactMutation.isSuccess ? (
                    <div className="text-center py-12" data-testid="container-success">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2" data-testid="text-success-title">Message Received!</h3>
                      <p className="text-muted-foreground mb-6" data-testid="text-success-message">
                        Thank you for reaching out. A member of our team will contact you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => contactMutation.reset()} 
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John" 
                                    {...field} 
                                    data-testid="input-first-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Smith" 
                                    {...field} 
                                    data-testid="input-last-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    placeholder="john@company.com" 
                                    {...field} 
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="tel" 
                                    placeholder="(555) 123-4567" 
                                    {...field} 
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Auto Transport Company" 
                                  {...field} 
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>What can we help you with?</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-inquiry-type">
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="demo" data-testid="option-demo">Book a Demo</SelectItem>
                                  <SelectItem value="sales" data-testid="option-sales">Sales Inquiry</SelectItem>
                                  <SelectItem value="support" data-testid="option-support">Customer Support</SelectItem>
                                  <SelectItem value="partnership" data-testid="option-partnership">Partnership Opportunity</SelectItem>
                                  <SelectItem value="other" data-testid="option-other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your business and how we can help..." 
                                  rows={5} 
                                  {...field} 
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="w-full gap-2"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {contactMutation.isPending ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
 
            <div className="lg:col-span-2 space-y-6">
              <Card data-testid="card-contact-info">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4" data-testid="text-contact-info-title">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-email-support">support@capscrm.org</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-email-sales">sales@capscrm.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-phone-primary">1-800-CAPS-CRM</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-phone-number">(1-800-227-7276)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Business Hours</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-hours-weekday">Monday - Friday: 8am - 8pm EST</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-hours-weekend">Saturday: 9am - 5pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Headquarters</p>
                        <p className="text-muted-foreground text-sm" data-testid="text-location">United States</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground" data-testid="card-immediate-help">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2" data-testid="text-immediate-help-title">Need Immediate Help?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4" data-testid="text-immediate-help-desc">
                    Existing customers can access 24/7 support through their Caps CRM dashboard 
                    or call our priority support line.
                  </p>
                  <p className="font-medium text-sm" data-testid="text-priority-support">
                    Priority Support: 1-800-CAPS-CRM ext. 2
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-what-to-expect">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2" data-testid="text-expect-title">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2" data-testid="text-expect-1">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      Response within 24 business hours
                    </li>
                    <li className="flex items-center gap-2" data-testid="text-expect-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      Personalized demo tailored to your needs
                    </li>
                    <li className="flex items-center gap-2" data-testid="text-expect-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      No-pressure, consultative approach
                    </li>
                    <li className="flex items-center gap-2" data-testid="text-expect-4">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      Custom pricing for your business size
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
