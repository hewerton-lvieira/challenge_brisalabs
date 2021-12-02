const Sequelize = require('sequelize')
const sequelize = require('../database.js')

const Chaves = sequelize.define('chaves', {
  valor: {
    type: Sequelize.STRING
  },
  id_user: {
    type: Sequelize.INTEGER
  }
})

module.exports = Chaves
