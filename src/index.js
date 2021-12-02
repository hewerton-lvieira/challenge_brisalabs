const { request, response } = require('express')
const express = require('express')

const User = require('../sequelize/models/users')
const Chave = require('../sequelize/models/chaves')

const sequelize = require('../sequelize/database')
const server = express()

server.use(express.json())

server.get('/users', async (request, response) => {
  const users = await User.findAll()
  return response.json(users)
})

server.get('/chaves', async (request, response) => {
  const chaves = await Chave.findAll()
  return response.json(chaves)
})

server.post('/users', async (request, response) => {
  const { name, phone } = request.body
  const user = await User.create({ name, phone })
  return response.json(user)
})

server.post('/chaves', async (request, response) => {
  const { user_id, pix_key } = request.body
  const user = await User.findByPk(user_id)

  if (user === null) {
    return response.status(404).json({ message: 'Não existe usuario' })
  }

  const pix_by_user = await Chave.findAll({ where: { id_user: user_id } })

  if (pix_by_user.length < 3) {
    const exist_pix = await Chave.findOne({ where: { valor: pix_key } })

    if (exist_pix) {
      return response.status(501).json({ message: 'Chave PIX já cadastrada.' })
    }

    const trx = await sequelize.transaction()
    try {
      const pix = {
        valor: pix_key,
        id_user: user_id
      }

      const pix_created = await Chave.create(pix, { transaction: trx })
      await trx.commit()

      return response.json(pix_created)
    } catch (error) {
      await trx.rollback()
      return response.status(500).json({ message: error })
    }
  }

  return response
    .status(501)
    .json({ message: 'Usuario não possui mais chaves disponiveis.' })
})

server.listen(3000, () => {
  console.log('Server Online.')
})
