const { Router } = require('express');
const {
  orderRouter,
  productRouter,
  userRouter,
  codesRouter,
  mailsRouter
} = require('./routes');

const router = Router();

router.use('/api/order', orderRouter);

router.use('/api/product', productRouter);

router.use('/api/user', userRouter);

router.use('/api/codes', codesRouter);

router.use('/api/mails', mailsRouter);

module.exports = router;
