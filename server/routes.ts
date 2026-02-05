import type { Express } from "express";
import type { Server } from "http";
import axios from "axios";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try { 
      const validatedData = insertContactSchema.parse(req.body);
 
      await axios.post("https://example.com/api/contact", validatedData, {
        headers: {
          "Content-Type": "application/json", 
        }
      });

      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully"
      });

    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });

  return httpServer;
}
