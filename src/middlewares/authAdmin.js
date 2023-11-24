const { User } = require("../db");

module.exports = function authAdmin(handler) {
  return async (req, res) => {
    try {
      let userId = req.query.userId || req.body.userId || req.params.userId || "notLogged";

      if (userId === "notLogged") {
        return res
          .status(401)
          .json({ error: "Acceso no autorizado: el usuario no está autenticado" });
      }

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(401).json({ error: "Acceso no autorizado: usuario no encontrado" });
      }

      if (!user.isAdmin) {
        return res
          .status(403)
          .json({ error: "Acceso no autorizado: el usuario no es un administrador" });
      }

      return handler(req, res);
    } catch (error) {
      return res.status(500).json({ error: "Error en el servidor", message: error.message });
    }
  };
};
