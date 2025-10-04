import nodemailer from "nodemailer";

export async function POST(req) {
    
  const { fullName, email, phone, message,service,budget } = await req.json();

  if (!fullName || !email || !service || !budget) {
    return new Response(JSON.stringify({ error: "All fields required" }), { status: 400 });
  }

  // Verify Turnstile
  const captchaRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
  });
  const captchaData = await captchaRes.json();

  if (!captchaData.success) {
    return new Response(JSON.stringify({ error: "Captcha verification failed" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email template (HTML)
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
        <h2 style="color: #333;">New Contact Email</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 10px; background: #fff; border: 1px solid #ddd;">
          ${message}
        </div>
        <br/>
        <p style="font-size: 12px; color: #666;">This message was sent from your website contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: "Contact Form Message",
      text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: htmlContent,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email not sent" }), { status: 500 });
  }
}
