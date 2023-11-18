const { removeCodeByName } = require('../../../controllers');

const deleteCodeByName = async (req, res) => {
  try {
    const codeRemoved = await removeCodeByName();
    if (!codeRemoved) {
      return res
        .status(404)
        .send({ message: 'No se encontraron códigos' });
    }
    return res
      .status(200)
      .send({ message: 'El código ha sido eliminado' });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = deleteCodeByName;
