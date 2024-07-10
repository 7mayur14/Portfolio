const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

// Endpoint to handle form submission
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mayurmane656@gmail.com',
            pass: 'Rahimatpur@123'
        }
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'mayurmane656@gmail.com',
        subject: 'Contact Downloaded Resume',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ status: 'error', message: error.toString() });
        }
        res.status(200).json({ status: 'success', message: 'Email sent: ' + info.response });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
