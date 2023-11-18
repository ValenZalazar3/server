const { User } = require('./../../../db');
const bcrypt = require('bcrypt');

const compareUser = async (email, password) => {
  try {
    const userByEmail = await User.findOne({ where: { email } });

    if (!userByEmail) {
      return { access: false, message: 'email' };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      userByEmail.password
    );

    if (!passwordMatch) {
      return { access: false, message: 'password' };
    }

    const user = {
      id: userByEmail.id,
      isAdmin: userByEmail.isAdmin,
      isActive: userByEmail.isActive,
      name: userByEmail.name,
      email: userByEmail.email,
      address: userByEmail.address,
      discount: userByEmail.discount
    };

    return { access: true, message: 'Welcome', user };
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = compareUser;
