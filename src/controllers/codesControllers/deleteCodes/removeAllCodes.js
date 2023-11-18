const { Codes } = require('../../../db');

const removeAllCodes = async () => {
  try {
    const codes = await Codes.findAll();
    if (!codes) return false;
    for (let i = 0; i < codes.length; i += 1) {
      await codes[i].destroy();
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = removeAllCodes;
