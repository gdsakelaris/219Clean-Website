import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, phone, address, service, message } = body;

		// Debug: Check environment variables (remove in production)
		if (process.env.NODE_ENV === "development") {
			console.log("Environment variables:", {
				GMAIL_USER: process.env.GMAIL_USER,
				GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD
					? "✓ Present"
					: "✗ Missing",
				NODE_ENV: process.env.NODE_ENV,
			});
		}

		// Validate required fields
		if (!name || !email || !address || !service) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Validate environment variables
		if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
			console.error("Missing Gmail credentials in environment variables");
			return NextResponse.json(
				{ error: "Server configuration error" },
				{ status: 500 }
			);
		}

		// Create transporter using Gmail SMTP
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER, // christian219clean@gmail.com
				pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
			},
		});

		// Email content
		const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h2 style="color: #2c3e50; margin: 0 0 20px 0;">New Estimate Request from ${name}</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <strong style="color: #495057;">From:</strong> ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <strong style="color: #495057;">Email:</strong> ${email}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <strong style="color: #495057;">Phone:</strong> ${
									phone || "Not provided"
								}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <strong style="color: #495057;">Address:</strong> ${address}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <strong style="color: #495057;">Service Needed:</strong> ${service}
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <strong style="color: #495057;">Project Details:</strong>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 8px; border-left: 4px solid #007bff;">
              ${message || "No additional details provided"}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px dashed #dee2e6; color: #6c757d; font-size: 12px;">
            Reply directly to: ${email}
            <br>
            This message was sent from the 219Clean website contact form.
          </div>
        </div>
      </div>
    `;

		// Send email
		await transporter.sendMail({
			from: `"219Clean Contact Form" <${process.env.GMAIL_USER}>`,
			to: "christian219clean@gmail.com", // Send to Christian's business email
			replyTo: email,
			subject: `New Estimate Request from ${name}`,
			html: emailContent,
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Email sending error:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
