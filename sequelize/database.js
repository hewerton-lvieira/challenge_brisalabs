const Sequelize = require('sequelize')

const sequelize = new Sequelize('api2', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
})

/** */
const sequelize2 = new Sequelize({
  host: 'localhost',
  database: 'api2',
  username: 'postgres',
  password: 'root',
  dialect: 'postgres',
  port: 5432,
  logging: true
})

module.exports = sequelize

async function test() {
  try {
    let result = await sequelize.authenticate()
    console.log(
      'Sequelize realizou a conexão com o banco de dados com sucesso!'
    )
  } catch (error) {
    console.error('houve um erro ao conectar com o banco de dados.')
    console.error(error)
    process.exit()
  }
}
//test()
