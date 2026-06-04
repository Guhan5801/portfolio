const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static portfolio files
app.use(express.static(__dirname));

// Dynamically parse .env file on demand to get latest credentials without restarting server
function getSmtpCredentials() {
    const creds = {
        host: process.env.SMTP_HOST || '',
        port: process.env.SMTP_PORT || '',
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
        to: process.env.SMTP_TO || ''
    };

    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        try {
            const content = fs.readFileSync(envPath, 'utf8');
            const lines = content.split(/\r?\n/);
            lines.forEach(line => {
                const match = line.match(/^\s*([^#=\s]+)\s*=\s*(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    let val = match[2].trim();
                    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                        val = val.slice(1, -1);
                    }
                    if (key === 'SMTP_HOST') creds.host = val;
                    if (key === 'SMTP_PORT') creds.port = val;
                    if (key === 'SMTP_USER') creds.user = val;
                    if (key === 'SMTP_PASS') creds.pass = val;
                    if (key === 'SMTP_TO') creds.to = val;
                }
            });
        } catch (err) {
            console.error('Error reading .env file:', err);
        }
    }
    return creds;
}

// API to send email
app.post('/api/send', async (req, res) => {
    const { name, email, message, subject, _subject } = req.body;

    // Get SMTP credentials dynamically from .env or process environment
    const { host, port, user, pass, to } = getSmtpCredentials();

    if (!host || !port || !user || !pass || !to) {
        return res.status(400).json({ 
            error: 'SMTP Server is not configured. Please enter your credentials in the `.env` file in the project folder.' 
        });
    }

    const emailSubject = subject || _subject || 'New Contact Form Submission';

    try {
        // Create Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: host,
            port: parseInt(port),
            secure: port === '465', // true for 465, false for other ports (587, etc.)
            auth: {
                user: user,
                pass: pass
            }
        });

        // Set up email options
        const mailOptions = {
            from: `"${name}" <${user}>`, // Standard practice: Authenticated user as sender
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

        // Send the mail
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        console.error('SMTP error:', err);
        res.status(500).json({ error: `SMTP Transport Error: ${err.message}` });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Portfolio local server running at http://localhost:${PORT}`);
});
