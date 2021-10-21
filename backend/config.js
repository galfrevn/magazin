// Documento de configuraciones
// En este documento se definen variables que nos serviran para completar funciones relacionadas
// con el backend de nuestra pagina.

// Librerias (DotENV) (info.txt)
import dotenv from "dotenv";
dotenv.config();

// Exportamos variables secretas (Enlace con base de datos, Enlace Paypal)
export default {
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};
