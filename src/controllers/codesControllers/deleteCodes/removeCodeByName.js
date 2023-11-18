const { Codes } = require('../../../db');
const removeCodeByName = async (name) => {
  try {
    const code = await Codes.findOne({
      where: {
        name
      }
    });
    if (!code) {
      return false;
    }
    await code.destroy();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = removeCodeByName;
