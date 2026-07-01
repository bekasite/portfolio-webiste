import { Resend } from 'resend'
import type { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <contact@x-prime.dev>',
      replyTo: email,
      to: 'beka@x-prime.dev',
      subject: `Portfolio Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Failed to send email:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
