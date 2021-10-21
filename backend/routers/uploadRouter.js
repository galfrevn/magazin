// Router de subidas
// Este archivo JS nos permite hacer o enviar consultas a nuestra base de datos MongoDB que esten
// relacionadas con la carga de imagenes en la pagina.

// Librerias (Express, Multer) (info.txt)
import express from 'express';
import multer from 'multer';
import { isAuth, isAdmin } from '../utils';

// Definimos una reserva en el espacio del disco para multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './frontend/uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});
const upload = multer({ storage });
const uploadRouter = express.Router();

// Subimos la imagen al servidor con una consulta POST
uploadRouter.post('/', isAuth, isAdmin, upload.single('image'), (req, res) => {
  res.status(201).send({ image: `/${req.file.path}` });
});

// Exportamos el router para su uso en otros documentos
export default uploadRouter;