const { createOrder } = require("../../../controllers");

const postOrder = async (req, res) => {
  try {
    const { products, totalPrice, userId, userName } = req.body;

    if (!products || !totalPrice || !userId || !userName) {
      return res.status(400).json({ message: "Faltan campos obligatorios en la solicitud" });
    }

    const finalOrder = await createOrder({
      products,
      totalPrice,
      userId,
      userName,
    });

    return res.status(200).json({
      id: finalOrder.id,
      message: "Orden creada exitosamente",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = postOrder;
