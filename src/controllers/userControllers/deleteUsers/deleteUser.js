const { User } = require('../../../db');

const deleteUser = async (id) => {
  try {
    const response = await User.update(
      { isActive: false },
      { where: { id } }
    );
    if (!response) return false;
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = deleteUser;
