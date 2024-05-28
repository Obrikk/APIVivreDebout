// Imports des modules nécessaires

const express = require('express')
const cors = require('cors')

// Initialisation du serveur 
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Mise en place du routage
app.get('/', (req,res) => res.send(`I'm online well done !`))

app.get('*', (req, res) => res.status(501).send('What the hell are you doing ?!'))

// Demarrer serveur
app.listen(process.env.SERVER_PORT, ()=>{
    console.log('This server is running on port 8989. Have fun !`)
})