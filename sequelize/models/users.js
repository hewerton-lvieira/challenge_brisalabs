const Sequelize = require('sequelize');
const sequelize = require('../database.js');

const Users = sequelize.define('users',{
  name:{
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.STRING
  }
})

module.exports = Users
