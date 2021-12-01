const pg = require('pg')

const client = new pg.client({
  user: 'api2',
  host: 'localhost',
  database: 'api2',
  password: 'root',
  port: 5432
})

module.exports = client