require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'epicfail27370@gmail.com',
        pass: '#Lechat2004'
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
