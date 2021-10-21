// Modelo de producto
// En este archivo de JavaScript, importamos 'Mongoose', una libreria que nos permitirá crear objetos
// que podemos usar en nuestra base de datos MongoDB.

// Importacion de 'moongoose'
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 5,
    },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

// Definimos un Schema de mongoose (info.txt)
const productSchema = new mongoose.Schema(
  {
    // Informacion general (Nombre, Descripcion, Precio, Marca, Cantidad, Oferta, Novedad, Imagenes)
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    example1: { type: String, required: true },
    example2: { type: String, required: true },
    example3: { type: String, required: true },
    esCat: { type: String, required: true },
    price: { type: Number, default: 0.0, required: true },
    countInStock: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0.0, required: true },
    numReviews: { type: Number, default: 0, required: true },
    isOfert: { type: Boolean, default: false, required: false },
    ofertText: { type: String, required: false },
    isNewP: { type: Boolean, default: false, required: false },
    bigPrice: { type: Number, default: 2000, required: false },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

// Definimos el producto como un objeto que tendrá las propiedades del esquema anterior y lo exportamos.
const Product = mongoose.model('Product', productSchema);
export default Product;