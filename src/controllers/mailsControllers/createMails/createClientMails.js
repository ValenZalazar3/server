const { User } = require('../../../db');
const mailSender = require('../../../utils/nodemailer');

const { newProducts } = require('../../../utils/templates');

const createClientMails = async () => {
  try {
    const allUsers = await User.findAll();
    if (allUsers.length === 0) {
      throw new Error('No hay usuarios');
    }

    for (let i = 0; i < allUsers.length; i++) {
      const mailOptions = {
        from: `ENCHUFANDO ${process.env.EMAIL}`,
        to: allUsers[i].email,
        subject: `Bienvenido ${allUsers[i].name}`,
        html: newProducts
      };
      mailSender(mailOptions);
    }
    return 'Mails enviados';
  } catch (error) {
    console.error(error);
    return error;
  }
};
module.exports = createClientMails;
