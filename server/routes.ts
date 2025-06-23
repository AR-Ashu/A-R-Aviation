import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for waitlist functionality
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const parseResult = insertWaitlistSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          message: "Invalid waitlist data", 
          errors: parseResult.error.format() 
        });
      }

      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(parseResult.data.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "Email already registered on the waitlist"
        });
      }

      // Create the waitlist entry
      const waitlistEntry = await storage.createWaitlistEntry(parseResult.data);
      
      return res.status(201).json({ 
        message: "Successfully joined the waitlist",
        data: waitlistEntry 
      });
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({ 
        message: "An error occurred while joining the waitlist" 
      });
    }
  });

  // Get all waitlist entries (could be protected in a real app)
  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.json({ data: entries });
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      return res.status(500).json({ 
        message: "An error occurred while fetching waitlist entries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
