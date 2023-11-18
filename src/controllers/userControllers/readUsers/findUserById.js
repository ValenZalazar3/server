const { User } = require('../../../db');

const findUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('User not found with id:' + id);
    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findUserById;
