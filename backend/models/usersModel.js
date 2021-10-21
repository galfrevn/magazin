// Modelo de usuario
// En este archivo de JavaScript, importamos 'Mongoose', una libreria que nos permitirá crear objetos
// que podemos usar en nuestra base de datos MongoDB.

// Importacion de 'moongoose'
import mongoose from 'mongoose';

// Definimos un Schema de mongoose (info.txt)
const userSchema = new mongoose.Schema({
  // Informacion general (Nombre, Email, Contraseña, Admin)
  name: { type: String, required: true },
  email: { type: String, required: true, index: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false},
});

// Definimos el usuario como un objeto que tendrá las propiedades del esquema anterior y lo exportamos.
const User = mongoose.model("user", userSchema);
export default User;