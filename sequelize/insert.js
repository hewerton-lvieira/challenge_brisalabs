const models = require('./models')

async function insert() {
  const users1 = await models.users.create({
    name: 'Bruno',
    phone: '88987788778'
  })
  const users2 = await models.users.create({
    name: 'Bruna',
    phone: '88984488778'
  })

  await models.sequelize.close()
  console.log('Dados Inseridos')
}
insert()
