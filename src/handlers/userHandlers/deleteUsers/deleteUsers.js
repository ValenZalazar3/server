const { deleteUser } = require('../../../controllers');

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteUser(id);
    if (!response) throw new Error('User not found');
    res.status(204).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteUsers;
