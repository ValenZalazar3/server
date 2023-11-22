const { findAllOrders } = require("../../../controllers");

const getAllOrders = async (req, res) => {
  try {
    const orders = await findAllOrders();
    if (!orders.length) {
      throw new Error("No orders found");
    }
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
module.exports = getAllOrders;
