import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (origin.startsWith("http://localhost")) {
      return callback(null, true);
    }
    callback(new Error("Not allowed by CORS"));
  }
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { margin: 0; padding: 0; background-color: #f4f4f5; font-family: Arial, sans-serif; }
              .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
              .header { background: #18181b; padding: 32px; text-align: center; }
              .header h1 { margin: 0; color: #ffffff; font-size: 22px; letter-spacing: 1px; }
              .header p { margin: 6px 0 0; color: #a1a1aa; font-size: 13px; }
              .body { padding: 32px; }
              .field { margin-bottom: 24px; }
              .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #71717a; margin-bottom: 6px; }
              .value { font-size: 15px; color: #18181b; background: #f4f4f5; padding: 12px 16px; border-radius: 8px; }
              .message-value { white-space: pre-line; line-height: 1.6; }
              .footer { background: #f4f4f5; padding: 20px 32px; text-align: center; }
              .footer p { margin: 0; font-size: 12px; color: #a1a1aa; }
              .reply-btn { display: inline-block; margin-top: 16px; padding: 10px 24px; background: #18181b; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>📬 New Contact Message</h1>
                <p>Someone reached out via your website</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message-value">${message}</div>
                </div>
                <a href="mailto:${email}" class="reply-btn">Reply to ${name}</a>
              </div>
              <div class="footer">
                <p>Sent from your website contact form · Mayhem Bangladesh</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));