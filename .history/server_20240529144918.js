// Imports des modules nécessaires

const express = require('express')
const cors = require('cors')

// import de la connexionà la db
let DB = require('./db.config')


// Initialisation du serveur 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//import des modules de routage
const user_router = require('./routes/users')
const auth_router = require('./routes/auth')



// Mise en place du routage
app.get('/', (req,res) => {
    res.cookie()
})

app.use('/users', user_router)
app.use('/auth', auth_router)

app.get('*', (req, res) => res.status(501).send('What the hell are you doing ?!'))

// Demarrer serveur avec test DB
DB.authenticate()
    .then( () => console.log('Database connection is OK'))
    .then( () => {
        app.listen(process.env.SERVER_PORT, ()=>{
            console.log(`This server is running on port ${process.env.SERVER_PORT}. Have fun !`)
        })
    })
    .catch(err => console.log('Erreur de connexion à la BDD', err))


