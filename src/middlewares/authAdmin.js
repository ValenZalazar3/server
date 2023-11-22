const { User } = require("../db");

module.exports = function authAdmin(handler) {
  return async (req, res) => {
    try {
      let userId = "notLogged";
      if (req.query.userId !== undefined) userId = req.query.userId;
      else if (req.body.userId !== undefined) userId = req.body.userId;
      else if (req.params.userId !== undefined) userId = req.params.userId;

      /* if (userId === "notLogged") {
        return res.status(401).json({ error: "Acceso no autorizado" });
      } */

      const user = await User.findByPk(userId);

      /* if (user?.isAdmin) { */
      return handler(req, res);
      /*  } else {
        throw new Error('Acceso no autorizado');
      } */
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
};
