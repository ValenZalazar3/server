const express = require('express')
const next = require('next')
const { sequelize } = require('./src/db')
const router = require('./src/router/index')

const bodyParser = require('body-parser')
const morgan = require('morgan')

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(morgan('dev'))
  server.use(express.json())
  server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

  server.use(bodyParser.json({ limit: '50mb' }))

  server.use('/', router)

  // Next.Js configuration
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3000

  sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`Server listening on port: ${PORT}`)
    })
  })
})

module.exports = app
