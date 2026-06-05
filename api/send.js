const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message, subject, _subject } = req.body;

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.SMTP_TO;

    if (!host || !port || !user || !pass || !to) {
        return res.status(400).json({ 
            error: 'SMTP Server is not configured. Please set the environment variables on Vercel.' 
        });
    }

    const emailSubject = subject || _subject || 'New Contact Form Submission';

    try {
        const transporter = nodemailer.createTransport({
            host: host,
            port: parseInt(port),
            secure: port === '465',
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: `"${name}" <${user}>`,
            replyTo: email,
            to: to,
            subject: emailSubject,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
                    <h2 style="color: #06b6d4; margin-top: 0;">New Contact Form Message</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 100px;">Name:</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Subject:</td>
                            <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${emailSubject}</td>
                        </tr>
                    </table>
                    <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; color: #334155;">${message}</div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error('SMTP error:', err);
        return res.status(500).json({ error: `SMTP Transport Error: ${err.message}` });
    }
};
