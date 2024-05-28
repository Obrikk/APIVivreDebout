// Import des modules
const { DataTypes } = require('sequelize')
const DB = require ('../db.config')

// Définition du modele User
const User = Db.define('User', {
    id:{
        type: DataTypes.INTEGER(10),
        primarykey: true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    prenom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    pseudo:{
        type:DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
})