const { User } = require('./../../../db');

const updateUserById = async (id, userUpdated) => {
  try {
    const user = await User.update(userUpdated, { where: { id } });

    if (!user) throw new Error('User not found with id:' + id);

    return user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = updateUserById;
