const { createOrder } = require('../../../controllers');

const postOrder = async (req, res) => {
  try {
    const { products, totalPrice, userId } = req.body;

    if (!products) {
      res
        .status(404)
        .json({ message: 'No hay productos en el carrito' });
    }
    if (!totalPrice) {
      res.status(404).json({ message: 'No hay precio total' });
    }
    if (!userId) {
      res.status(404).json({ message: 'No hay id' });
    }

    const finalOrder = await createOrder({
      products: products,
      totalPrice: totalPrice,
      userId: userId
    });

    return res.status(200).json(finalOrder);
  } catch (error) {
    return res.status(500).json({ message: 'Error en post order' });
  }
};

module.exports = postOrder;
