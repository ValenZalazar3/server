const { Order } = require('../../../db');

const findAllOrders = async () => {
  try {
    const orders = await Order.findAll();

    return orders;
  } catch (error) {
    console.error('error in findAllOrders: ' + error);
    return false;
  }
};

module.exports = findAllOrders;
