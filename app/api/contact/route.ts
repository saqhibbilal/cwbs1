import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, contact, subject, inquiry } = await request.json()

    if (!name || !contact || !subject || !inquiry) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = "info@fusioncloudtrainings.com"

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error("SMTP environment variables are not set")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    })

    const html = `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Inquiry:</strong></p>
      <p>${inquiry?.replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: `CWBS Website <${smtpUser}>`,
      to: toEmail,
      replyTo: contact,
      subject: `[CWBS] ${subject}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}


