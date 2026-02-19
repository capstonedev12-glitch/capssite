import type { Express } from "express";
import type { Server } from "http"; 
import { insertContactSchema } from "@shared/schema"; 
import nodemailer from "nodemailer";
import { z } from "zod";
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: {
        name: "Capstone Auto Transport",
        address: process.env.SMTP_FROM!,
      },
      to: process.env.SMTP_TO!,
      subject: `New Contact Form: ${validatedData.firstName} ${validatedData.lastName}`,
      replyTo: validatedData.email,

      text: `
New Contact Form Submission

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "N/A"}

Message:
${validatedData.message}
      `.trim(),

      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><b>Email:</b> ${validatedData.email}</p>
        <p><b>Phone:</b> ${validatedData.phone || "N/A"}</p>
        <p><b>Message:</b><br/>${validatedData.message}</p>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    });

  } catch (error) {
    console.error("Contact submission error:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }
});


  return httpServer;
}
