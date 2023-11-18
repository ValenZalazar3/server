const { Product } = require('../../../db');

const isActiveProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);

    if (!product) {
      throw new Error('Producto no encontrado');
    }

    await product.update({ isActive: true });

    return { message: 'Producto actualizado exitosamente' };
  } catch (error) {
    throw error;
  }
};

module.exports = isActiveProduct;
