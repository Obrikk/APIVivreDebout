require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ht.audric@gmail.com',
    subject: 'Test Email',
    text: 'Ceci est un email de test'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Il y a eu une erreur lors de l'envoi du mail:", error);
    } else {
        console.log('Email envoyé', info.response);
    }
});
