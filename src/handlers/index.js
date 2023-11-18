//users
const getAllUsers = require('../handlers/userHandlers/readUsers/getAllUsers');
const getUserById = require('../handlers/userHandlers/readUsers/getUserById');
const createUser = require('../handlers/userHandlers/createUsers/createUser');
const updateUser = require('./../handlers/userHandlers/updateUsers/updateUser');
const loginUser = require('./../handlers/userHandlers/createUsers/loginUser');
const deleteUsers = require('./../handlers/userHandlers/deleteUsers/deleteUsers');
//orders
const getAllOrders = require('../handlers/orderHandlers/readOrders/getAllOrders');
const getAllUserOrders = require('./orderHandlers/readOrders/getAllUserOrders');
const postOrder = require('../handlers/orderHandlers/createOrders/postOrder');
//products
const getAllProducts = require('../handlers/productHandlers/readProducts/getAllProducts');
const getAllMeasures = require('../handlers/productHandlers/readProducts/getAllMeaures');
const getBestSellers = require('../handlers/productHandlers/readProducts/getBestSellers');
const getProductById = require('../handlers/productHandlers/readProducts/getProductById');
const postProduct = require('../handlers/productHandlers/createProducts/postProduct');
const postAllProducts = require('./productHandlers/createProducts/postAllProducts');
const handleProductDelete = require('../handlers/productHandlers/handleDeleteProduct');
const handleIsActive = require('../handlers/productHandlers/handleModifyProducts/handleIsActive');
const handlePutProduct = require('../handlers/productHandlers/handleModifyProducts/handlePutProduct');
//codes
const getAllCodes = require('../handlers/codesHandlers/readCodes/getCodes');
const postCodes = require('../handlers/codesHandlers/createCodes/postCodes');
const deleteAllCodes = require('../handlers/codesHandlers/deleteCodes/deleteAllCodes');
const deleteCodeByName = require('../handlers/codesHandlers/deleteCodes/deleteCodeByName');
//mails
const sendClientMails = require('../handlers/mailsHandlers/createMails/sendClientMails');
const sendAdminMails = require('../handlers/mailsHandlers/createMails/sendAdminMails');
const sendOrderMails = require('../handlers/mailsHandlers/createMails/sendOrderMails');
module.exports = {
  //users
  getAllUsers,
  createUser,
  getUserById,
  loginUser,
  updateUser,
  deleteUsers,

  //orders
  getAllOrders,
  getAllUserOrders,
  postOrder,

  //products
  getAllMeasures,
  getAllProducts,
  getBestSellers,
  postProduct,
  postAllProducts,
  getProductById,
  handleProductDelete,
  handleIsActive,
  handlePutProduct,
  //codes
  getAllCodes,
  postCodes,
  deleteAllCodes,
  deleteCodeByName,
  //mails
  sendClientMails,
  sendAdminMails,
  sendOrderMails
};
