const { Codes } = require('../../../db');

const findAllCodes = async () => {
  try {
    const codes = await Codes.findAll();

    if (!codes.length) return false;
    return codes;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findAllCodes;
