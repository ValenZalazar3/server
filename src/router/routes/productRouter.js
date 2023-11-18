const { Router } = require('express');
const fileUpload = require('express-fileupload');
// middlewares
const authAdmin = require('../../middlewares/authAdmin');
// handlers
const {
  getAllProducts,
  getBestSellers,
  postProduct,
  postAllProducts,
  getProductById,
  getAllMeasures,
  handleProductDelete,
  handleIsActive,
  handlePutProduct
} = require('../../handlers');

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/measures', getAllMeasures);
productRouter.get('/bestsellers', authAdmin(getBestSellers));
productRouter.get('/:id', authAdmin(getProductById));
productRouter.post('/all', authAdmin(postAllProducts));
productRouter.post(
  '/',
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
  }),
  postProduct
);
productRouter.patch('/:id', authAdmin(handleIsActive));
productRouter.put('/:id', authAdmin(handlePutProduct));
productRouter.delete('/:id', authAdmin(handleProductDelete));

module.exports = productRouter;
