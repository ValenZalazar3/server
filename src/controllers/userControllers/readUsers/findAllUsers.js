const { User } = require('../../../db');

const findAllUsers = async () => {
  try {
    const users = await User.findAll();

    return users;
  } catch (error) {
    console.error('error in findAllUsers: ' + error);
    return false;
  }
};

module.exports = findAllUsers;
