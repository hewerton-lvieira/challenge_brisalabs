const db = require('./_database')
async function dropTables(){
  await db.connect()
  await db.query('DROP TABLE users CASCADE')
  await db.query('DROP TABLE chaves CASCADE')
  await db.query('DROP TABLE transacao CASCADE')
  await db.end()

  console.log('TABELAS REMOVIDAS');
}

dropTables()