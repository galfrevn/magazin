// Componente Header (Barra superior)
// Exportamos un objeto con funcion render(Mostrar)

// Se importa una funcion que recibe como salida el numero de articulos en el carrito de un usuario.
// Se importa una funcion que recibe el nombre del usuario.
import { getUserInfo } from "../localStorage";
import { getCartItems } from "../localStorage";

const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `

        <div class="main_nav_container">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-right">
                <div class="logo_container">
                  <a href="#"><img src="./images/logopng2.png" alt=""></a>
                  <a href="#" class="logo-text">Magasin</a>
                </div>
                <nav class="navbar">
                  <ul class="navbar_menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#/productlist">Catalogo</a></li>
                    <li><a href="#/contact">Contacto</a></li>
                    <li><a href="#/about">Acerca</a></li>
                  </ul>
                  <ul class="navbar_user">
                    <li>
                      ${name && isAdmin ? `<a class="user-2" href="#/dashboard">Admin</a>` : name ? `<a class="user-3" href="#/profile">Mi cuenta</a>` : `<a href="#/signin" class="user"><i class="fa fa-user" arial-hidden="true"></i></a>`}
                    </li>
                    <li class="checkout">
                      <a href="#/cart">
                        <i class="fa fa-shopping-cart" arial-hidden="true"></i>
                        <span class="num-cart-product">${getCartItems().length}</span>
                      </a>
                    </li>
                  </ul>
                  <div class="hamburger_container">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
    
    `;
  },
  after_render: () => { }
};

export default Header;
