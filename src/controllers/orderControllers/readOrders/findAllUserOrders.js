const { Order } = require('../../../db');

const findAllUserOrders = async (userId) => {
  try {
    const allUserOrders = await Order.findAll({ where: { userId } });

    return allUserOrders;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findAllUserOrders;
