// Imports des modules nécessaires
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const DB = require('./db.config');
const multer = require('./middleware/multer-config.js'); // Assurez-vous que multer-config.js est correctement configuré

// Initialisation du serveur
const app = express();

// Middlewares
app.use(cors()); // Permet toutes les origines par défaut
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Import des modules de routage
const user_router = require('./routes/users');
const auth_router = require('./routes/auth');
const sorties_router = require('./routes/sorties');
const email_router = require('./routes/email');
const upload_router = require('./routes/upload.js');
const articles_router = require('./routes/articles.js')

// Mise en place du routage
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l api' });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/articles', articles_router)
app.use('/users', user_router);
app.use('/login', auth_router);
app.use('/sorties', sorties_router);
app.use('/email', email_router);
app.use('/upload', upload_router);

// Gestion des routes non définies
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Démarrage du serveur avec test de connexion à la base de données
DB.authenticate()
    .then(() => console.log('Database connection is OK'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}. Have fun!`);
        });
    })
    .catch(err => console.log('Erreur de connexion à la BDD', err));
