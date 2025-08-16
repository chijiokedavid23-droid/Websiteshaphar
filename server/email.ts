import { MailService } from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(apiKey);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || params.text || '',
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export async function sendContactFormEmail(
  formData: ContactFormData,
  recipientEmail = 'info@shaphargroup.com'
): Promise<boolean> {
  const subject = `New Contact Form Submission from ${formData.name}`;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a8a, #065f46); padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="color: #e5e7eb; margin: 5px 0 0 0;">Shaphargroup Website Contact Form</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h2 style="color: #1f2937; margin-top: 0; font-size: 18px;">Contact Details</h2>
          
          <div style="margin: 15px 0;">
            <strong style="color: #374151;">Name:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${formData.name}</p>
          </div>
          
          <div style="margin: 15px 0;">
            <strong style="color: #374151;">Email:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${formData.email}</p>
          </div>
          
          ${formData.company ? `
          <div style="margin: 15px 0;">
            <strong style="color: #374151;">Company:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${formData.company}</p>
          </div>
          ` : ''}
          
          <div style="margin: 15px 0;">
            <strong style="color: #374151;">Message:</strong>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 5px;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the Shaphargroup website contact form.
              <br>
              <strong>Reply directly to this email to respond to ${formData.name}.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const textContent = `
New Contact Form Submission - Shaphargroup Website

Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}\n` : ''}

Message:
${formData.message}

---
This email was sent from the Shaphargroup website contact form.
Reply directly to this email to respond to ${formData.name}.
  `;

  return await sendEmail({
    to: recipientEmail,
    from: 'noreply@shaphargroup.com', // Use a verified sender email
    subject: subject,
    text: textContent,
    html: htmlContent,
  });
}