const structuredData = require('./../../../auxData/structuredData');
const { createAllProducts } = require('./../../../controllers');

const postAllProducts = async (req, res) => {
  try {
    const arraysOfColumns = structuredData();

    await createAllProducts(arraysOfColumns);

    res.status(200).send('Productos creados con exito');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postAllProducts;
