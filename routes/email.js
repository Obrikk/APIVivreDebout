const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('', (req, res) => {
    const { email, nomPrenom, tel, msg } = req.body;

    if (!email || !nomPrenom || !tel || !msg) {
        return res.json({ message: 'Veuillez remplir tous les champs' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Message de ${nomPrenom}`,
        text: `Mail de l'envoyeur  : ${email},
        //
        Telephone : ${tel},
        //
        //
        Message : ${msg}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Il y a eu une erreur lors de l'envoi du mail", error);
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        } else {
            console.log('Email envoyé', info.response);
            return res.status(200).json({ message: 'Email envoyé !!' });
        }
    });
});

module.exports = router;
