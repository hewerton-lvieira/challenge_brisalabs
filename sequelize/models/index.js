const sequelize = require('../database.js')

const models = {
  users: require('./users'),
  chaves: require('./chaves'),
  sequelize: sequelize
}

module.exports = models
