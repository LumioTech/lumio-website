import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Lumio Contact <onboarding@resend.dev>',
      to: ['season0112@gmail.com'],
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0F; color: #E6EDF3; padding: 40px; border-radius: 8px; border: 1px solid rgba(0, 240, 255, 0.2);">
          <div style="border-bottom: 1px solid rgba(0, 240, 255, 0.2); padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #00F0FF; font-size: 24px; margin: 0; text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);">
              LUMIO AI LAB
            </h1>
            <p style="color: #8B92A8; font-size: 14px; margin: 5px 0 0 0;">New Contact Form Submission</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #00F0FF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Name</h2>
            <p style="color: #E6EDF3; font-size: 16px; margin: 0;">${name}</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #00F0FF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Email</h2>
            <p style="color: #E6EDF3; font-size: 16px; margin: 0;">
              <a href="mailto:${email}" style="color: #00F0FF; text-decoration: none;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #00F0FF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</h2>
            <div style="background: rgba(18, 18, 26, 0.6); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 8px; padding: 20px;">
              <p style="color: #E6EDF3; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="border-top: 1px solid rgba(0, 240, 255, 0.2); padding-top: 20px; margin-top: 30px;">
            <p style="color: #8B92A8; font-size: 12px; margin: 0;">
              Sent from lumio.com contact form
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
