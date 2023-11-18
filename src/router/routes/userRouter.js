const { Router } = require('express');
const userRouter = Router();
// middlewares
const isLogged = require('../../middlewares/isLogged');
const authAdmin = require('../../middlewares/authAdmin');
// handlers
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  loginUser,
  deleteUsers
} = require('../../handlers');

//read
userRouter.get('/', authAdmin(getAllUsers));
userRouter.get('/:id', isLogged(getUserById));
//create
userRouter.post('/', authAdmin(createUser));
userRouter.post('/login', loginUser);
//update
userRouter.put('/:id', authAdmin(updateUser));
//delete
userRouter.delete('/delete/:id', authAdmin(deleteUsers));

module.exports = userRouter;
