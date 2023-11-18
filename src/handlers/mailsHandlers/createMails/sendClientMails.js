const { createClientMails } = require('../../../controllers');

const sendClientMails = async (req, res) => {
  try {
    const response = await createClientMails();

    if (response === 'Mails enviados') {
      res.status(200).send({ message: response });
    } else {
      throw new Error('Error al enviar los mails');
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = sendClientMails;
