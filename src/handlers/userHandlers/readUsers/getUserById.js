const { findUserById } = require('../../../controllers');

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await findUserById(id);
  res.status(200).json(user);
};

module.exports = getUserById;
