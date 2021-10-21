// Servidor backend
// Es el documento principal del backend, ya que combina todos los routers y abre un servidor general
// en el puerto 5000, para poder conectarse con el frontend 

// Librerias (Express, Cors, Mongoose, BodyParser y Routers)
import express from "express";                              // Router
import cors from "cors";                                    // Certificados de seguridad
import mongoose from "mongoose";                            // Manejo de Schemas
import bodyParser from "body-parser";                       // info.txt
import config from "./config";                              // Variables secretas
import userRouter from "./routers/userRouter.js";           // Router Usuarios
import orderRouter from "./routers/orderRouter.js";         // Router Ordenes
import productRouter from "./routers/productRouter.js";     // Rourter Productos
import uploadRouter from "./routers/uploadRouter.js";       // Router Subidas

// Conexion con la base de datos MongoDB.
mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("Conected to MongoDB!");
})
.catch((error) => {
  console.log(error.reason);
});

// Definimos el router principal
const app = express();

// Configuraciones del router (USE = Usar)
app.use(cors());
app.use(bodyParser.json());
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/paypal/clientId', (req, res) => {
  res.send({ clientId: config.PAYPAL_CLIENT_ID });
});
app.use((err, req, res, next) => {
  const status = err.name && err.name == "ValidationError" ? 400 : 500 ;
  res.status(status).send({ message: err.message });
});

// Se abre el servidor en el puerto 5000
app.listen(5000, () => {
  console.log("Server Started!");
});
