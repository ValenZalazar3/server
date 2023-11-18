const { createAdminMails } = require('../../../controllers');

const sendAdminMails = () => {
  try {
    const response = createAdminMails();
    if (response === 'Pedido cargado') {
      res.status(200).send({ message: response });
    } else {
      throw new Error('Error al cargar el pedido');
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = sendAdminMails;
