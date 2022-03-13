'use strict';
require('dotenv').config();
const {Sequelize,DataTypes} = require('sequelize');
const collection = require('./collection-class');
const sport = require('./sport');
const user = require('./userModel');
const image = require('./image');
const food = require('./food');
const clothes = require('./clothes')



const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL ;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }:{};

  let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

  

 let foodCollection = new collection(food(sequelize,DataTypes));
 let clothesCollection =new collection(clothes(sequelize,DataTypes));
 let imgCollection = new collection(image(sequelize,DataTypes));
 let sportCollection =new collection(sport(sequelize,DataTypes));

  module.exports = {
    databaseexported: sequelize, 
    user: user(sequelize,DataTypes),
    food : foodCollection,
    clothes : clothesCollection,
    img : imgCollection,
    sport : sportCollection,

}
