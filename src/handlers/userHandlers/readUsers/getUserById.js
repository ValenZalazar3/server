const { findUserById } = require('../../../controllers');

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUserById;
