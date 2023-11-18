const { Router } = require('express');
const orderRouter = Router();
// middlewares
const isLogged = require('../../middlewares/isLogged');
const authAdmin = require('../../middlewares/authAdmin');
//handlers
const { getAllOrders, getAllUserOrders, postOrder } = require('../../handlers');

orderRouter.get('/', isLogged(getAllOrders));
orderRouter.get('/:userId', authAdmin(getAllUserOrders));

orderRouter.post('/', isLogged(postOrder));

module.exports = orderRouter;
