//users
const findAllUsers = require("./userControllers/readUsers/findAllUsers");
const createUserContr = require("./userControllers/createUsers/createUserContr");
const findUserById = require("./userControllers/readUsers/findUserById");
const updateUserById = require("./userControllers/updateUsers/updateUserById");
const compareUser = require("./userControllers/createUsers/compareUser");
const deleteUser = require("./userControllers/deleteUsers/deleteUser");
//orders
const findAllOrders = require("./orderControllers/readOrders/findAllOrders");
const findAllUserOrders = require("./orderControllers/readOrders/findAllUserOrders");
const createOrder = require("./orderControllers/createOrders/createOrder");
//products
const findAllProducts = require("./productControllers/readProducts/findAllProducts");
const findAllBestSellers = require("./productControllers/readProducts/findBestSellers");
const findAllMeasures = require("./productControllers/readProducts/findAllMeasures");
const findProductByPk = require("./productControllers/readProducts/findProductByPk");
const createProduct = require("./productControllers/createProducts/createProduct");
const createAllProducts = require("./productControllers/createProducts/createAllProducts");
const deleteProduct = require("./productControllers/deleteProducts/deleteProduct");
const isActiveProduct = require("./productControllers/modifyProduct/isActiveProduct");
const putProduct = require("./productControllers/modifyProduct/putProduct");
//codes
const findAllCodes = require("./codesControllers/readCodes/findAllCodes");
const createCodes = require("./codesControllers/createCodes/createCodes");
const removeAllCodes = require("./codesControllers/deleteCodes/removeAllCodes");
const removeCodeByName = require("./codesControllers/deleteCodes/removeCodeByName");
//mails
const createOrderMails = require("./mailsControllers/createMails/createOrderMails");
const createClientMails = require("./mailsControllers/createMails/createClientMails");
const createAdminMails = require("./mailsControllers/createMails/createAdminMails");

module.exports = {
  //users
  findAllUsers,
  createUserContr,
  updateUserById,
  findUserById,
  compareUser,
  deleteUser,
  //orders
  findAllOrders,
  findAllUserOrders,
  createOrder,
  //products
  createProduct,
  createAllProducts,
  findAllProducts,
  findAllBestSellers,
  findProductByPk,
  findAllMeasures,
  deleteProduct,
  isActiveProduct,
  putProduct,
  //codes
  findAllCodes,
  createCodes,
  removeAllCodes,
  removeCodeByName,
  //mails
  createAdminMails,
  createClientMails,
  createOrderMails,
};
