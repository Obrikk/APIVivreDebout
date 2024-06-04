// Import des modules
const { DataTypes } = require('sequelize')
const sequelize = require('../db.config')

// Définition du modele User
const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER(10),
        primaryKey: true,
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
    prenom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    pseudo:{
        type:DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail:true    //On verifie que le type d'info correspond à un email
        }
    },
    password:{
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i  //Une contrainte avec une regex
    }
}, {paranoid: true}) //Ici pour faire du soft delete

module.exports = User