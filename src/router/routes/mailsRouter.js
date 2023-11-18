const { Router } = require('express');
const mailsRouter = Router();
// middlewares
const isLogged = require('../../middlewares/isLogged');
const authAdmin = require('../../middlewares/authAdmin');
//handlers
const { sendClientMails, sendAdminMails, sendOrderMails } = require('../../handlers');

mailsRouter.post('/client', authAdmin(sendClientMails));
mailsRouter.post('/admin', isLogged(sendAdminMails));
mailsRouter.post('/order', isLogged(sendOrderMails));

module.exports = mailsRouter;
