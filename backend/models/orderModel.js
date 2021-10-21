// Modelo de orden
// En este archivo de JavaScript, importamos 'Mongoose', una libreria que nos permitirá crear objetos
// que podemos usar en nuestra base de datos MongoDB.

// Importacion de 'moongoose'
import mongoose from "mongoose";

// Definimos un Schema de mongoose (info.txt)
const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        // Informacion sobre los articulos en una orden
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    // Usuario dueño de la orden
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    // Informacion de envio (Direccion, Ciudad, Codigo postal y Pais).
    shipping: {
      address: String,
      city: String,
      postalCode: String,
      country: String,
    },
    // Informacion sobre pagos (Metodo y Resultado del pago).
    payment: {
      paymentMethod: String,
      paymentResult: {
        orderId: String,
        payerId: String,
        paymentId: String,
      },
    },
    // Informacion general (Precio total, Precio de envio, Pago, Horario de pago, Envio, Horario de envio).
    itemsPrice: Number,
    taxPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: Date,
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: Date,
  },
  { timestamps: true }
);

// Definimos la orden como un objeto que tendrá las propiedades del esquema anterior y la exportamos.
const Order = mongoose.model('Order', orderSchema);
export default Order;
