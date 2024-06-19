const {DataTypes} = require('sequelize')
const sequelize = require('../db.config')

const Article =sequelize.define('Article',{
    id:{
        type:DataTypes.INTEGER(10),
        primaryKey :true,
        autoIncrement: true
    },
    nom:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    type:{
        type:DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    date:{
        type:DataTypes.DATE,
        allowNull: false
    },
    description:{
        type
    }
    // coutBrut:{
    //     type:DataTypes.INTEGER(10),
    //     allowNull: false
    // },
    // priseCharge:{
    //     type:DataTypes.INTEGER(10),
    //     allowNull: false
    // },
    // coutTotal:{
    //     type:DataTypes.INTEGER(10),
    //     allowNull: false
    // },
}, {paranoid: true})


module.exports = Sortie