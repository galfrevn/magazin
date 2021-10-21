// Utilidades
// Este documento proporciona funciones que se reutilizan en numerosos documentos.

// Librerias (Documento Config, Generador de tokens (JWT))
import config from "./config";
import jwt from "jsonwebtoken"

// Funcion que create un token y asisna a un usuario
export const generateToken = (user) => {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  }, config.JWT_SECRET );
};

// Funcion que comprueba si el token de un usuario es correcto o existe
export const isAuth = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.status(401).send({message: "Token no encontrado"});
  } else {
    const token = bearerToken.slice(7, bearerToken.length);
    jwt.verify(token, config.JWT_SECRET, (err, data) => {
      if(err) {
        res.status(401).send({message: "Token invalido"});
      } else {
        req.user = data;
        next();
      };
    });
  };
}

// Funcion que comprueba si un usuario es administrador
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Token invalido para administrar.' });
  }
};
