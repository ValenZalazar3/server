const findAllBestSellers = require('../../../controllers');

const getBestSellers = async (req, res) => {
  try {
    const bestSellers = await findAllBestSellers();
    if (!bestSellers) throw new Error('No bestSellers found');
    res.status(200).json(bestSellers);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getBestSellers;
