const { Sequelize } = require('sequelize')
const defineOrderModel = require('./models/Order')
const defineProductModel = require('./models/Product.js')
const defineUserModel = require('./models/User.js')
const defineCodesModel = require('./models/Codes')
require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL } = process.env
// Instance of Sequelize
const conection =
  DB_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

const sequelize = new Sequelize(`${conection}`, {
  logging: false,
  native: false,
  ssl: true
})

// Define models
const User = defineUserModel(sequelize)
const Order = defineOrderModel(sequelize)
const Product = defineProductModel(sequelize)
const Codes = defineCodesModel(sequelize)

// Export models and connection
module.exports = { User, Order, Product, Codes, sequelize }
