// Archivo localStorage.js
// Almacenamiento local de la pagina.
// Almacena los articulos del carrito de compras en el caché del navegador.

// Funcion getCartItems(), obtiene los objetos en el carrito en formato JSON.
export const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  return cartItems;
};

// Funcion setCartItems(), agrega un nuevo objeto al arreglo de productos en el carrito.
export const setCartItems = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// Modifica o sobreescribe informacion sobre el usuario
export const setUserInfo = ({
  _id = "",
  name = "",
  email = "",
  password = "",
  token = "",
  isAdmin = false,
}) => {
  localStorage.setItem(
    "userInfo", JSON.stringify({
      _id,
      name,
      email,
      password,
      token,
      isAdmin,
    })
  );
};

// Obtiene la informacion sobre el usuario
export const getUserInfo = () => {
  return localStorage.getItem("userInfo") 
  ? JSON.parse(localStorage.getItem("userInfo")) 
  : { name: "", email: "", password: "" };
};

// Cierra la sesion actual
export const clearUser = () => {
  localStorage.removeItem("userInfo");
}

// Obtiene la informacion de envio del usuario
export const getShipping = () => {
  const shipping = localStorage.getItem("shipping") ? 
  JSON.parse(localStorage.getItem("shipping")) :
  {
    address: "",
    city: "",
    postalCode: "",
    country: "",
  };
  return shipping;
};

// Modifica o sobreescribe informacion de envio del usuario
export const setShipping = ({
  address = "",
  city = "",
  postalCode = "",
  country = "",
}) => {
  localStorage.setItem("shipping", JSON.stringify({address, city, postalCode, country}));
};

// Obtiene la informacion sobre el metodo de pago del usuario
export const getPayment = () => {
  const shipping = localStorage.getItem("payment") ? 
  JSON.parse(localStorage.getItem("payment")) :
  {
    paymentMethod: 'paypal',
  };
  return shipping;
};

// Modifica o sobreescribe informacion sobre el metodo de pago del usuario
export const setPayment = ({
  paymentMethod = "paypal"
}) => {
  localStorage.setItem("payment", JSON.stringify({ paymentMethod }));
};

// Vacia el carrito de compras
export const cleanCart = () => {
  localStorage.removeItem('cartItems');
}