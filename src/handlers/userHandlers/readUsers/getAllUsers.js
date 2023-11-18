const { findAllUsers } = require('../../../controllers');

const getAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    if (!users.length) {
      throw new Error('No users found');
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getAllUsers;
