// Import des modules
const { DataTypes } = require('sequelize')
const DB = require ('../db.config')

// Définition du modele User
const User = Db.define('User', {
    id:{
        type: DataTypes.INTEGER(10),
        primarykey: true
    }
})