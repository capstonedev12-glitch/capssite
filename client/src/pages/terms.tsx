import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <Layout>
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-terms-headline">
              Terms & Conditions
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
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," 
                "you," or "your") and Caps CRM ("Company," "we," "our," or "us") governing your access to and 
                use of the Caps CRM platform and related services (collectively, the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with 
                any part of these Terms, you may not access the Service.
              </p>

              <h2>2. Service Description</h2>
              <p>
                Caps CRM is a customer relationship management platform designed for auto transport businesses. 
                The Service includes features for lead management, quote generation, order processing, payment 
                integration, dispatch coordination, and related business operations.
              </p>

              <h2>3. Account Registration and Responsibilities</h2>
              
              <h3>3.1 Account Creation</h3>
              <p>To use the Service, you must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update any changes to your information</li>
              </ul>

              <h3>3.2 Account Security</h3>
              <p>
                You are responsible for all activities that occur under your account. You must immediately notify 
                us of any unauthorized use of your account or any other security breach. We are not liable for 
                any loss or damage arising from your failure to protect your account credentials.
              </p>

              <h3>3.3 Multiple Users</h3>
              <p>
                Your subscription may include access for multiple users. You are responsible for ensuring that 
                all users under your account comply with these Terms. Actions taken by your users are considered 
                your actions for the purposes of these Terms.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
              <ul>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others, including intellectual property rights</li>
                <li>Transmit viruses, malware, or other malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use the Service to send spam or unsolicited communications</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Share your login credentials with unauthorized parties</li>
                <li>Scrape, copy, or extract data from the Service without permission</li>
              </ul>

              <h2>5. Payment Terms</h2>

              <h3>5.1 Subscription Fees</h3>
              <p>
                Access to the Service requires a paid subscription. Subscription fees are billed in advance on a 
                monthly or annual basis depending on your selected plan. All fees are non-refundable except as 
                expressly stated in these Terms.
              </p>

              <h3>5.2 Payment Methods</h3>
              <p>
                You must provide a valid payment method. By providing a payment method, you authorize us to charge 
                that payment method for all fees when due. If your payment method fails, we may suspend your access 
                to the Service until payment is received.
              </p>

              <h3>5.3 Price Changes</h3>
              <p>
                We may change our prices at any time. Price changes will take effect at the start of your next 
                billing cycle. We will provide at least 30 days' notice of any price increase.
              </p>

              <h3>5.4 Taxes</h3>
              <p>
                Prices do not include applicable taxes. You are responsible for paying all taxes associated with 
                your subscription except for taxes based on our net income.
              </p>

              <h3>5.5 Payment Processing Fees</h3>
              <p>
                When using our integrated payment processing features (Authorize.net, Clover), standard processing 
                fees from those providers apply. These fees are separate from your Caps CRM subscription.
              </p>

              <h2>6. Free Trial</h2>
              <p>
                We may offer a free trial period for new users. At the end of the trial, you will be automatically 
                enrolled in a paid subscription unless you cancel before the trial ends. You may only use one free 
                trial per organization.
              </p>

              <h2>7. Data Ownership</h2>

              <h3>7.1 Your Data</h3>
              <p>
                You retain all rights to data you input into the Service ("Your Data"). You grant us a limited 
                license to use Your Data solely to provide and improve the Service. We will not share Your Data 
                with third parties except as described in our Privacy Policy.
              </p>

              <h3>7.2 Data Export</h3>
              <p>
                You may export Your Data at any time using the export features provided in the Service. Upon 
                termination of your account, you will have 30 days to export Your Data before it is permanently 
                deleted.
              </p>

              <h2>8. Intellectual Property</h2>
              <p>
                The Service, including its original content, features, and functionality, is owned by Caps CRM 
                and is protected by copyright, trademark, and other intellectual property laws. You may not copy, 
                modify, distribute, or create derivative works based on the Service without our prior written consent.
              </p>

              <h2>9. Third-Party Services</h2>
              <p>
                The Service integrates with third-party services (e.g., Central Dispatch, payment processors, lead 
                vendors). Your use of these integrations is subject to the terms and policies of those third parties. 
                We are not responsible for the actions or omissions of third-party services.
              </p>

              <h2>10. Service Availability</h2>
              <p>
                We strive to maintain 99.9% uptime for the Service. However, we do not guarantee uninterrupted access. 
                The Service may be temporarily unavailable due to maintenance, upgrades, or circumstances beyond our 
                control. We will provide advance notice of scheduled maintenance when possible.
              </p>

              <h2>11. Termination</h2>

              <h3>11.1 Termination by You</h3>
              <p>
                You may cancel your subscription at any time through your account settings or by contacting support.
                Unless otherwise stated in your plan, cancellation will take effect at the end of your current billing period.
                You will continue to have access to the Service until the end of that period.
              </p>
              <p>
                To ensure your subscription is not renewed for the next billing cycle, you must provide cancellation notice
                at least <strong>seven (7) days</strong> before your next billing date for monthly subscriptions, or
                <strong> thirty (30) days</strong> before the end of an annual subscription term.
              </p>
              <p>
                You remain responsible for all fees and charges incurred up to and including the effective cancellation date.
                Except where required by applicable law, all subscription fees are <strong>non-refundable</strong>, and we do not
                provide refunds or credits for partial billing periods, unused time, downgrades, or unused features.
              </p>

              <h3>11.2 Termination by Us</h3>
              <p>We may suspend or terminate your access to the Service immediately if:</p>
              <ul>
                <li>You breach these Terms</li>
                <li>Your account is past due for more than 30 days</li>
                <li>You engage in fraudulent, abusive, or illegal activity</li>
                <li>Continued service would violate applicable laws</li>
                <li>Your use of the Service creates a security risk, operational risk, or legal exposure for Caps CRM</li>
              </ul>
              <p>
                If we terminate or suspend your account due to a violation of these Terms or non-payment, you remain responsible
                for any unpaid amounts due up to the termination date.
              </p>

              <h3>11.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use the Service ceases immediately (or at the end of your current billing period
                if you canceled in accordance with Section 11.1). We may delete Your Data after a 30-day grace period unless
                retention is required by law. You are responsible for exporting Your Data prior to deletion.
              </p>


              <h2>12. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAPS CRM SHALL NOT BE LIABLE FOR:
              </p>
              <ul>
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use the Service</li>
                <li>Damages arising from third-party services or integrations</li>
              </ul>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE 
                TWELVE (12) MONTHS PRECEDING THE CLAIM.
              </p>

              <h2>13. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR 
                IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
                PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, 
                OR COMPLETELY SECURE.
              </p>

              <h2>14. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Caps CRM, its officers, directors, employees, and agents 
                from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul>
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your Data or content you submit to the Service</li>
              </ul>

              <h2>15. Dispute Resolution</h2>
              <p>
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association. You agree to waive 
                your right to participate in a class action lawsuit.
              </p>

              <h2>16. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions. Any legal action must be brought 
                in the courts located in Delaware.
              </p>

              <h2>17. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by 
                posting the new Terms on the Service and updating the "Last updated" date. Continued use of the 
                Service after changes constitutes acceptance of the modified Terms.
              </p>

              <h2>18. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue 
                in full force and effect.
              </p>

              <h2>19. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                Caps CRM regarding the Service and supersede all prior agreements and understandings.
              </p>

              <h2>20. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us:
              </p>
              <ul>
                <li>Email: legal@capscrm.com</li>
                <li>Phone: 1-800-CAPS-CRM</li>
                <li>Mail: Caps CRM Legal Department, United States</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
