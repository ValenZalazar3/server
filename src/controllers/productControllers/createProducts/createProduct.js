const { Product } = require('../../../db');
const { uploadImage } = require('../../../../../utils/cloudinary');
const fs = require('fs-extra');

const createProduct = async (newProduct, imagen) => {
  try {
    if (imagen) {
      // upload image to cloudinary
      const result = await uploadImage(imagen.tempFilePath);

      newProduct.image = {};
      newProduct.image.public_id = result.public_id;
      newProduct.image.secure_url = result.secure_url;

      // delete image from local
      fs.unlinkSync(imagen.tempFilePath);
    }

    const product = await Product.create(newProduct);
    if (!product) return false;
    return product;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

module.exports = createProduct;
