const { request, response } = require('express')
const express = require('express')

const User = require('../sequelize/models/users')

const sequelize = require('../sequelize/database')
const server = express()

server.use(express.json())

server.get('/users', async (request, response) => {
  const users = await User.findAll() 
  return response.json(users)
})

server.post('/users', async (request, response) => {
  const { name, phone } = request.body
  const user = await User.create({ name, phone })
  return response.json(user)
})

server.listen(3000, () => {
  console.log('Server Online.')
})
