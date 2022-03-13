'use strict';
require('dotenv').config();
const SECRET = process.env.SECRET || "my secret";
const JWT = require('jsonwebtoken')

const user = (sequelize, DataTypes) => sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type:DataTypes.ENUM('admin','writer','editor'),
        defaultValue :'user'
    },
    token: {
        type:DataTypes.VIRTUAL,
        get() {return JWT.sign({ username: this.username }, SECRET);}

    },
 
    actions:{
        type: DataTypes.VIRTUAL,
        get() {
            const acl = {
                user : ['read'],
                writer : ['read','create'],
                editor : ['read','create','update'],
                admin : ['read','create','update','delete'],
            }
            return acl[this.role];
        }
    },
})

module.exports = user;