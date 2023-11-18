const { createCodes } = require('../../../controllers');

const postCodes = async (req, res) => {
  try {
    const { discount } = req.body;
    const codeCreated = await createCodes(discount);

    if (!codeCreated)
      throw new Error(
        'Error de servidor, el código no se pudo crear'
      );

    res.status(201).json(codeCreated);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = postCodes;
