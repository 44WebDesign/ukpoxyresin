import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Resend lazily to prevent crash if key is missing on startup
let resendClient: Resend | null = null;
const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("RESEND_API_KEY is not set. Emails will only be logged to console.");
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(key);
  }
  return resendClient;
};

const app = express();

app.use(express.json());

// API Route for newsletter
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;
  const contactEmail = process.env.CONTACT_EMAIL || "contact@poxyuk.co.uk";
  
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  console.log(`[NEWSLETTER SUBSCRIPTION]: New subscription from ${email}`);
  
  const resend = getResend();
  if (resend) {
    try {
      await resend.emails.send({
        from: "PoxyResin <onboarding@resend.dev>", // Note: Custom domains require setup in Resend
        to: contactEmail,
        subject: "New PoxyResin Subscriber",
        html: `
          <h1>New Subscriber Alert!</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p>This user has just signed up for the 20% discount code via the website.</p>
        `,
      });
      console.log(`Email sent successfully to ${contactEmail}`);
    } catch (error) {
      console.error("Error sending email via Resend:", error);
    }
  } else {
    console.log(`[SIMULATED EMAIL TO ${contactEmail}]: New PoxyResin Subscriber - ${email} signed up for discount code.`);
  }

  res.json({ success: true, message: "Subscription received" });
});

async function startServer() {
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Only listen if not running as a Vercel function
  if (process.env.VERCEL !== "1") {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
