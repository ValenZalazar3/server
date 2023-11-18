const { Router } = require('express');
// middleware
const authAdmin = require('../../middlewares/authAdmin');
// handlers
const {
  getAllCodes,
  postCodes,
  deleteAllCodes,
  deleteCodeByName
} = require('../../handlers');
const codesRouter = Router();

codesRouter.get('/', authAdmin(getAllCodes));
codesRouter.post('/', authAdmin(postCodes));
codesRouter.delete('/', authAdmin(deleteAllCodes));
codesRouter.delete('/:name', authAdmin(deleteCodeByName));
module.exports = codesRouter;
