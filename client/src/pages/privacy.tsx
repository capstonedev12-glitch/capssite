import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-privacy-headline">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 prose prose-sm dark:prose-invert max-w-none">
              <h2>1. Introduction</h2>
              <p>
                Caps CRM ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you use our customer relationship 
                management platform and related services (the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to this Privacy Policy. If you do not agree with the 
                terms of this Privacy Policy, please do not access the Service.
              </p>

              <h2>2. Information We Collect</h2>
              
              <h3>2.1 Information You Provide to Us</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, phone number, company name, and password when you create an account.</li>
                <li><strong>Profile Information:</strong> Business details, industry information, and preferences you provide.</li>
                <li><strong>Customer Data:</strong> Information about your customers that you store in the Service, including names, contact details, vehicle information, and transaction history.</li>
                <li><strong>Payment Information:</strong> Credit card numbers, billing addresses, and payment details processed through our payment integration partners (Authorize.net, Clover).</li>
                <li><strong>Communications:</strong> Information you provide when you contact us for support, feedback, or inquiries.</li>
              </ul>

              <h3>2.2 Information We Collect Automatically</h3>
              <p>When you use the Service, we automatically collect certain information, including:</p>
              <ul>
                <li><strong>Usage Data:</strong> Pages viewed, features used, actions taken, and time spent on the Service.</li>
                <li><strong>Device Information:</strong> Device type, operating system, browser type, IP address, and unique device identifiers.</li>
                <li><strong>Log Data:</strong> Access times, referring URLs, and other standard log information.</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address.</li>
              </ul>

              <h2>3. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul>
                <li>Maintain your session and remember your preferences</li>
                <li>Analyze usage patterns and improve the Service</li>
                <li>Provide personalized features and content</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may limit 
                your ability to use certain features of the Service.
              </p>

              <h3>3.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the Service to function properly.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Service.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (only with your consent).</li>
              </ul>

              <h2>4. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve the Service</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Analyze usage trends and improve user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>5. Payment Data Handling</h2>
              <p>
                Caps CRM integrates with third-party payment processors (Authorize.net and Clover) to process 
                payments on your behalf. We take the following measures to protect payment data:
              </p>
              <ul>
                <li>We do not store complete credit card numbers on our servers</li>
                <li>All payment data is encrypted using industry-standard TLS/SSL encryption</li>
                <li>Our payment integrations are PCI-DSS compliant</li>
                <li>Payment tokens are used instead of raw card data when possible</li>
              </ul>

              <h2>6. Third-Party Integrations</h2>
              <p>
                The Service integrates with third-party services to enhance functionality. These may include:
              </p>
              <ul>
                <li><strong>Central Dispatch:</strong> For load posting and carrier matching</li>
                <li><strong>Payment Processors:</strong> Authorize.net and Clover for payment processing</li>
                <li><strong>Lead Providers:</strong> Various auto transport lead vendors via our Leads API</li>
                <li><strong>Communication Services:</strong> Email and SMS notification providers</li>
              </ul>
              <p>
                Each third-party service has its own privacy policy governing the use of your information. 
                We encourage you to review their policies.
              </p>

              <h2>7. Data Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information.</li>
                <li><strong>Service Providers:</strong> With vendors who perform services on our behalf (hosting, analytics, support).</li>
                <li><strong>Legal Requirements:</strong> When required by law, subpoena, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Safety:</strong> To protect the rights, property, or safety of Caps CRM, our users, or others.</li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2>8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul>
                <li>256-bit AES encryption for data at rest and in transit</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission over the Internet 
                is 100% secure. We cannot guarantee absolute security.
              </p>

              <h2>9. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to certain exceptions).</li>
                <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time.</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
              </ul>
              <p>
                To exercise these rights, contact us at privacy@capscrm.com. We will respond within 30 days.
              </p>

              <h2>10. GDPR Compliance (EU Users)</h2>
              <p>
                If you are located in the European Economic Area (EEA), you have additional rights under the 
                General Data Protection Regulation (GDPR):
              </p>
              <ul>
                <li>Right to lodge a complaint with your local supervisory authority</li>
                <li>Right to object to processing based on legitimate interests</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p>
                Our legal basis for processing your data includes: performance of a contract, legitimate 
                business interests, compliance with legal obligations, and your consent.
              </p>

              <h2>11. CCPA Compliance (California Users)</h2>
              <p>
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with 
                additional rights:
              </p>
              <ul>
                <li>Right to know what personal information is collected, used, and shared</li>
                <li>Right to delete personal information</li>
                <li>Right to opt out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>

              <h2>12. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide you 
                the Service. We may retain certain information as required by law or for legitimate business 
                purposes, such as:
              </p>
              <ul>
                <li>Financial records for tax and audit purposes (7 years)</li>
                <li>Backup copies for disaster recovery</li>
                <li>Anonymized data for analytics and research</li>
              </ul>

              <h2>13. Children's Privacy</h2>
              <p>
                The Service is not intended for individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have collected information from a child, 
                please contact us immediately.
              </p>

              <h2>14. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
                you to review this Privacy Policy periodically.
              </p>

              <h2>15. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul>
                <li>Email: privacy@capscrm.com</li>
                <li>Phone: 1-800-CAPS-CRM</li>
                <li>Mail: Caps CRM Privacy Team, United States</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
