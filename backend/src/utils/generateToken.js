const jwt = require('jsonwebtoken');

// Función para generar un token JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' }); // '1h' define que el token expirará en una hora
};

module.exports = generateToken;
