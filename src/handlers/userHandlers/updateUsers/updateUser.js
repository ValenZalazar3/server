const { updateUserById } = require('./../../../controllers');

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, address, isAdmin } = req.body;

    const recibedProperties = {
      name,
      email,
      password,
      address,
      isAdmin
    };

    const filledProperties = Object.entries(recibedProperties)
      .filter(([_, value]) => {
        return (
          (typeof value === 'string' && value.trim() !== '') ||
          (Array.isArray(value) && value.length > 0) ||
          typeof value === 'object' ||
          typeof value === 'boolean'
        );
      })
      .map(([key, value]) => [key, value]);

    const filledObject = Object.fromEntries(filledProperties);

    const user = await updateUserById(id, filledObject);

    if (!user) {
      throw new Error('el usuario no se pudo actualizar');
    }

    return res.status(200).json('el usuario fue actualizado con exito');
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = updateUser;
