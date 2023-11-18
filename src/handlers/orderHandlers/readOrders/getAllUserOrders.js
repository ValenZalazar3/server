const { findAllUserOrders } = require('../../../controllers');

const getAllUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const allUserOrders = await findAllUserOrders(userId);

    if (!allUserOrders)
      throw new Error('No se encontraron ordenes para este usuario');

    return res.status(200).json(allUserOrders);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUserOrders;
