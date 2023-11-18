const { createProduct } = require('../../../controllers');
const postProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const imagen = req.files?.imagen;

    const product = await createProduct(newProduct, imagen);

    if (!product) throw new Error('Error al crear el producto');

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: error.message });
  }
};

module.exports = postProduct;
