import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, location, email, message } = await req.json();

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Replace with your email
                pass: process.env.EMAIL_PASS, // Replace with your generated App Password
            },
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nLocation: ${location}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
    }
}
