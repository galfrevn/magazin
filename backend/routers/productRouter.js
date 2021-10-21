// Router de productos
// Este archivo JS nos permite hacer o enviar consultas a nuestra base de datos MongoDB que esten
// relacionadas con los productos cargados en la pagina.

// Librerias (Express, E-AsyncHadler, Schemes de productos) (info.txt)
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils';
import Product from '../models/productModel';

// Definimos el router
const productRouter = express.Router();

// Las consultas suelen ser de 4 tipos:
// GET => Pedir
// POST => Crear
// PUT => Modificar
// DELETE => Eliminar

// Consulta para obtener todos los productos de la base de datos
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);
// Consulta para obtener las ID de los productos
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
  })
);
// Consulta para crear un nuevo producto
productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'Producto ejemplo',
      description: 'Esto es la descripcion de un producto ejemplo, modificala.',
      category: 'example (kids, men, women, accesorie)',
      brand: 'Magasin',
      image: '/images/product2.jpg',
      example1: '/images/p2-model1.jpg',
      example2: '/images/p2-model2.jpg',
      example3: '/images/p2-model2.jpg',
      esCat: "(Sexo) / (Tipo)",
      price: 9999,
      countInStock: 1,
      rating: 5,
      numReviews: 123,
      isOfert: false,
      ofertText: "",
      isNewP: false,
      bigPrice: 0,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      res
        .status(201)
        .send({ message: 'Product Created', product: createdProduct });
    } else {
      res.status(500).send({ message: 'Error in creating product' });
    }
  })
);
// Consulta para modificar un producto
productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.example1 = req.body.example1;
      product.example2 = req.body.example2;
      product.example3 = req.body.example3;
      product.brand = req.body.brand;
      product.category = req.body.category;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      product.rating = req.body.rating;
      product.numReviews = req.body.numReviews;
      product.esCat = req.body.esCat;
      product.isOfert = req.body.isOfert;
      product.ofertText = req.body.ofertText;
      product.isNewP = req.body.isNewP;
      product.bigPrice = req.body.bigPrice;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        res.send({ message: 'Product Updated', product: updatedProduct });
      } else {
        res.status(500).send({ message: 'Error in updaing product' });
      }
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
// Consulta para eliminar un producto
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deletedProduct = await product.remove();
      res.send({ message: 'Product Deleted', product: deletedProduct });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const review = {
        rating: req.body.rating,
        comment: req.body.comment,
        user: req.user._id,
        name: req.user.name,
      };
      product.reviews.push(review);
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      product.numReviews = product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Comment Created.',
        data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      });
    } else {
      throw Error('Product does not exist.');
    }
  })
);

// Exportamos el router para su uso en otros documentos
export default productRouter;