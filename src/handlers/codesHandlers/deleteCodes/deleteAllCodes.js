const { removeAllCodes } = require('../../../controllers');

const deleteAllCodes = (req, res) => {
  const { name } = req.params;
  try {
    const codesRemoved = removeAllCodes(name);
    if (!codesRemoved) {
      return res
        .status(404)
        .send({ message: 'No se encontraron códigos' });
    }
    return res
      .status(200)
      .send({ message: 'Todos los códigos borrados' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = deleteAllCodes;
