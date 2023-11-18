const { Product } = require('../../../db')
const { deleteImage } = require('../../../../utils/cloudinary')
const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id)

    await Product.destroy({ where: { id } })
    await deleteImage(product.dataValues.image.public_id)

    return product
  } catch (error) {
    console.error(error)
    return false
  }
}

module.exports = deleteProduct
