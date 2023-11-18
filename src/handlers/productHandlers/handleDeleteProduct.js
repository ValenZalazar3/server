const deleteProduct = require('../../controllers/productControllers/deleteProducts/deleteProduct');

const handleProductDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({
        message: 'Producto no encontrado'
      });
    }
    return res.status(200).json({
      message: 'Producto eliminado'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar producto'
    });
  }
};

module.exports = handleProductDelete;
