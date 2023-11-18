const { User, Codes } = require('../../../db');
const bcrypt = require('bcrypt');

const createUserContr = async (
  name,
  email,
  password,
  address,
  code,
  isAdmin
) => {
  try {
    const userExists = await User.findOne({
      where: {
        email
      }
    });
    if (userExists) throw new Error('El correo ya esta en uso');
    //Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const codeExists = await Codes.findOne({
      where: {
        code
      }
    });

    if (!codeExists) throw new Error('El código no existe');

    const discount = codeExists.discount / 100;

    const userCreated = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      discount,
      isAdmin
    });

    if (!userCreated) return false;

    await Codes.destroy({
      where: {
        code
      }
    });

    const user = {
      id: userCreated.id,
      isAdmin: userCreated.isAdmin,
      isActive: userCreated.isActive,
      name: userCreated.name,
      email: userCreated.email,
      address: userCreated.address,
      discount: userCreated.discount
    };

    return user;
  } catch (error) {
    console.error('error in createUser: ' + error);
    return error;
  }
};

module.exports = createUserContr;
