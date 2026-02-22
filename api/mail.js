import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  // 1. ADDED: Test GET request to check API status
  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'API is working!', 
      message: 'Vercel + Vite + Neon are connected.' 
    });
  }

  // 2. Original POST logic for form submission
  if (req.method === 'POST') {
    const sql = neon(process.env.DATABASE_URL);
    const { email, password, subject, body } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await sql`
        INSERT INTO form_submissions (encrypted_email, password, subject, body) 
        VALUES (${email}, ${hashedPassword}, ${subject}, ${body})
      `;

      return res.status(200).json({ success: true, message: 'Submission stored securely.' });
    } catch (error) {
      console.error('Database Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Handle any other methods
  return res.status(405).json({ error: 'Method not allowed' });
}