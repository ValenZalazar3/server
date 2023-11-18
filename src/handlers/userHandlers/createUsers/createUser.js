const { createUserContr } = require('../../../controllers');

const createUser = async (req, res) => {
  try {
    const { name, email, password, address, code, isAdmin } =
      req.body;

    userCreated = await createUserContr(
      name,
      email,
      password,
      address,
      code,
      isAdmin
    );

    if (userCreated.message) {
      throw new Error(userCreated.message);
    }
    return res.status(201).json({
      message: 'Usuario creado con éxito',
      user: userCreated
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = createUser;
