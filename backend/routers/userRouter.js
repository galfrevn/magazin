// Router de usuarios
// Este archivo JS nos permite hacer o enviar consultas a nuestra base de datos MongoDB que esten
// relacionadas con los usuarios creados en la pagina.

// Librerias (Express, E-AsyncHadler, Schemes de usuarios, Tokens) (info.txt)
import express from "express";
import User from "../models/usersModel";
import expressAsyncHandler from "express-async-handler";
import { generateToken, isAuth } from "../utils";

// Definimos el router
const userRouter = express.Router();

// Las consultas suelen ser de 4 tipos:
// GET => Pedir
// POST => Crear
// PUT => Modificar
// DELETE => Eliminar

// Consulta para obtener un usuario administrador
userRouter.get("/createadmin", expressAsyncHandler (async (req, res) => {
  try {
    const user = new User( {
      name: "Admin",
      email: "admin@example.com",
      password: "magasin123",
      isAdmin: true,
    });
    const createdUser = await user.save();
    res.send(createdUser);
  } catch(err) {
    res.status(500).send({ message: err.message });
  } 
}));
// Consulta para crear un inicio de sesion
userRouter.post("/signin", expressAsyncHandler(async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!signinUser) {
    res.status(401).send({ message: "El Email o la contraseña no son correctos." });
  }
  else {
    res.send({
      _id: signinUser._id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: generateToken(signinUser),
    });
  };
}));
// Consulta para crear el registro de un usuario y crearlo
userRouter.post("/register", expressAsyncHandler(async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const createdUser = await user.save();
  if (!createdUser) {
    res.status(401).send({ message: "Informacion invalida" });
  }
  else {
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  };
}));
// Consulta para editar informacion de un usuario
userRouter.put("/:id", isAuth, expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).send({ message: "Usuario no encontrado" });
  }
  else {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updatedUser = await user.save();
    res.send({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser),
    });
  };
}));

// Exportamos el router para su uso en otros documentos
export default userRouter;