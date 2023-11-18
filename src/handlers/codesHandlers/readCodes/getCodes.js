const { findAllCodes } = require('../../../controllers');

const getAllCodes = async (req, res) => {
  try {
    const codes = await findAllCodes();
    if (!codes) throw new Error('No codes found');
    res.status(200).json(codes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getAllCodes;
