import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const body = formSchema.parse(request.body);
    const { name, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'stepbydev0@gmail.com',
      subject: `New message from ${name} on Kinetic Tech Page`,
      html: `
        <p>You have received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return response.status(500).json({ message: 'Error sending email' });
    }

    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({ message: 'Invalid input', errors: error.errors });
    }
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}