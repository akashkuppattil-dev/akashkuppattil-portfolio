import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, message } = await req.json();

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'akashskuppattil@gmail.com';

    if (!BREVO_API_KEY) {
       console.error("BREVO_API_KEY is missing in environment variables.");
       return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // 1. Send Email to Akash (The Developer) - High Clarity Identity Alert
    const adminEmailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'x-sib-api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Inquiry System", email: CONTACT_EMAIL },
        to: [{ email: CONTACT_EMAIL }],
        subject: `[INQUIRY] New Client: ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; padding: 40px; background: #f9f9f9; color: #111;">
            <div style="max-width: 600px; margin: auto; background: #fff; padding: 30px; border: 1px solid #eee; border-top: 5px solid #111;">
              <h1 style="font-size: 20px; text-transform: uppercase; letter-spacing: 0.1em; color: #111; margin-bottom: 30px;">New Portfolio Inquiry</h1>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #666; width: 120px;">Client Name</td>
                  <td style="padding: 10px 0; font-size: 16px; font-weight: bold;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #666;">Source Email</td>
                  <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #111; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; color: #666;">Contact No.</td>
                  <td style="padding: 10px 0; font-size: 14px;">${mobile}</td>
                </tr>
              </table>

              <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #eee;">
                <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #666; margin-bottom: 10px;">Message Summary</p>
                <p style="font-size: 16px; line-height: 1.6; color: #333; font-style: italic;">"${message}"</p>
              </div>

              <div style="margin-top: 40px; text-align: center;">
                 <a href="https://wa.me/${mobile.replace(/[^0-9]/g, '')}" style="display: inline-block; padding: 12px 24px; background: #111; color: #fff; text-decoration: none; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em;">Quick Connect WhatsApp</a>
              </div>
            </div>
          </div>
        `,
      }),
    });

    // 2. Send Simple & Standard Automated Response to the User
    const userEmailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'x-sib-api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: "Akash Kuppattil", email: CONTACT_EMAIL },
        to: [{ email: email }],
        subject: `Hello ${name}, I've received your inquiry`,
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; line-height: 1.8; color: #111;">
            <p style="font-size: 16px;">Hello <strong style="text-transform: capitalize;">${name.split(' ')[0]}</strong>,</p>
            
            <p>Thank you for reaching out through my portfolio. I've received your request and am currently reviewing the project details.</p>
            
            <p>I will contact you very soon on the number you shared (<strong style="color: #111;">${mobile}</strong>) via **WhatsApp** or **Direct Call** so we can connect and discuss this further.</p>
            
            <p>Looking forward to potentially working together.</p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
               <p style="margin: 0; font-size: 14px; font-weight: bold;">Akash Kuppattil</p>
               <p style="margin: 0; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; color: #666;">Full-Stack Developer & Technical Architect</p>
               <p style="margin: 0; font-size: 11px; text-transform: uppercase; color: #999;">Kerala, India</p>
            </div>
          </div>
        `,
      }),
    });

    if (adminEmailRes.ok && userEmailRes.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await adminEmailRes.json();
      console.error("Brevo API error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 400 });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
