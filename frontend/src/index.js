// Archivo index.js
// Vincula el Frontend y el Backend con un Router.
// Create rutas para cada una de las pantallas y llama a la funcion Render() de cada una,
// Mostrandolas en el HTML principal.

// Importacion de Pantallas 
import HomeScreen from "./screens/HomeScreen.js";                             // Pantalla de Inicio
import ProductsScreen from "./screens/ProductsScreen.js";                     // Pantalla de Productos
import DetailsScreen from "./screens/DetailsScreen.js";                       // Pantalla de Detalles
import Error404Screen from "./screens/Error404Screen.js";                     // Pantalla de Error 404
import CartScreen from "./screens/CartScreen.js";                             // Pantalla de Carrito
import SigninScreen from "./screens/SigninScreen.js";                         // Pantalla de Inicio de Sesion
import RegisterScreen from "./screens/RegisterScreen.js";                     // Pantalla de Registro
import ProfileScreen from "./screens/ProfileScreen.js";                       // Pantalla de Perfil
import ContactScreen from "./screens/ContactScreen.js";                       // Pantalla de Contacto
import AboutScreen from "./screens/AboutScreen.js";                           // Pantalla de Informacion
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";                 // Pantalla de Pedido
import OrderScreen from "./screens/OrderScreen.js";                           // Pantalla de Orden
import DashboardScreen from "./screens/DashboardScreen.js";                   // Pantalla Admin Menu
import DashboardProductsScreen from "./screens/DashboardProductsScreen.js";   // Pantalla Admin Productos
import DashboardOrdersScreen from "./screens/DashboardOrdersScreen.js";       // Pantalla Admin Ordenes
import EditProductScreen from "./screens/EditProductScreen.js";               // Pantalla de Editar Producto
// Componentes
import Header from "./components/Header.js";                                  // Barra de navegacion superior
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js";       // Pantalla de carga

// Se definen las Rutas
const routes = {
  "/": HomeScreen,
  "/productlist": ProductsScreen,
  "/product/:id": DetailsScreen,
  "/order/:id": OrderScreen,
  "/cart/:id": CartScreen,
  "/cart": CartScreen,
  "/signin": SigninScreen,
  "/register": RegisterScreen,
  "/profile": ProfileScreen,
  "/contact": ContactScreen,
  "/about": AboutScreen,
  "/placeorder": PlaceOrderScreen,
  "/dashboard": DashboardScreen,
  "/products": DashboardProductsScreen,
  '/product/:id/edit': EditProductScreen,
  "/orders": DashboardOrdersScreen,
};

// Se define y configura el router del frontend
const router = async () => {
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const header = document.getElementById("header-container");
  header.innerHTML = await Header.render();
  await Header.after_render();
  const main = document.getElementById("app_container");
  main.innerHTML = await screen.render();
  if (screen.after_render) await screen.after_render();
  hideLoading();
};

// Inicializacion del funcion Router()
window.addEventListener("load", router);
window.addEventListener("hashchange", router);
