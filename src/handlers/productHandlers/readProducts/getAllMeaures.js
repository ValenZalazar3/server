const { findAllMeasures } = require('../../../controllers');

const getAllMeasures = async (req, res) => {
  try {
    const measures = await findAllMeasures();
    if (!measures) throw new Error('No measures found');
    res.status(200).json(measures);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getAllMeasures;
