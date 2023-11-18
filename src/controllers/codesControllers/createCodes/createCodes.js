const { Codes } = require('../../../db');

const createCodes = async (discount) => {
  try {
    const createCode = () => {
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
      }
      return code;
    };

    const finalCode = createCode();

    const codeExists = await Codes.findOne({
      where: { code: finalCode }
    });

    if (codeExists) throw new Error('The code already exists');

    const codeToCreate = {
      discount: discount,
      code: finalCode
    };

    const codeCreated = await Codes.create(codeToCreate);

    if (!codeCreated) return false;

    return codeCreated;
  } catch (error) {
    console.error(error);

    return false;
  }
};

module.exports = createCodes;
