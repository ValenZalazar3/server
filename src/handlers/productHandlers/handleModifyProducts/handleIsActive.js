const { isActiveProduct } = require('../../../controllers/index');

const handleIsActive = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await isActiveProduct(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handleIsActive;
