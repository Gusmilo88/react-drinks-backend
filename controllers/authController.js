const createError = require("http-errors");
const User = require("../models/User");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if ([name, email, password].includes("") || !name || !email || !password) {
      throw createError(400, "Todos los campos son obligatorios");
    }

    let user = await User.findOne({
      email,
    });

    if (user) {
      throw createError(400, "El email ya se encuentra registrado");
    }

    user = new User(req.body);
    user.token = "asadsasd";
    const useStore = await user.save();

    //TODO: Enviar email de confimarción de registro 

    return res.status(201).json({
        ok: true,
        message : "Usuario registrado con éxito"
    })

  } catch (error) {
    return res.status(error.status || 500).json({
        ok : false,
        message : error.message || "Hubo un error"
    })
  }
};

module.exports = {
    register
};
