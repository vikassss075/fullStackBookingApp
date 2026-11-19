const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const User = sequelize.define('Users',{
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = User;