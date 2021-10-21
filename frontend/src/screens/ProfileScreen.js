import { getmyOrders, update } from "../api";
import { clearUser, getCartItems, getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const ProfileScreen = {

    after_render: () => {

      document.getElementById("signout-btn").addEventListener("click", () => {
        clearUser();
        document.location.hash = "/";
      });

      document.getElementById("profile-form").addEventListener("submit", async (e) => {
        
        e.preventDefault();
        showLoading();
        const data = await update({
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          setUserInfo(data);
          document.location.hash = "/";
        }

      });
    },

    render: async () => {

      window.scrollTo(0, 0);
       
      showLoading();
      const {name, email} = getUserInfo();
      if (!name) {
        document.location.hash = "/"
      }
      const orders = await getmyOrders();
      hideLoading();

      return ` 
      
        <!-- Breadcump -->
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Mi Cuenta</p>
        </div>
        
        <div class="container" id="top-20">

          <div class="row">
            <div class="col-lg-3 my-lg-0 my-md-1">
              <div id="sidebar" class="bg-purple border">
                <div class="h4 black-white">Tu cuenta</div>
                  <form id="profile-form">
                    <ul>
                      <li> 
                        <span>Nombre:</span>
                        <input class="form-control" id="name" type="text" value="${name}" placeholder="Cambiar Nombre">
                      </li>
                      <li>
                        <span>Email:</span>
                        <input class="form-control" id="email" type="text" value="${email}" placeholder="Cambiar Email"/>
                      </li>
                      <li>
                        <span>Contraseña:</span>
                        <input class="form-control" id="password" type="password" placeholder="Cambiar Contraseña"/>
                      </li>
                      <li class="center-fixed">
                        <input type="submit" value="Actualizar" class="form-control btn btn-outline-danger my-3" />
                        <a id="signout-btn"><span class="text-muted">Cerrar sesion</span></a>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>

              <div class="col-lg-9 my-lg-0 my-1">
                <div id="main-content" class="bg-white border">
                  <div class="d-flex flex-column">
                    <div class="h5">Hola ${name},</div>
                    <div>Ingresaste como: ${email}</div>
                  </div>
                  <div class="d-flex my-4">
                    <div class="border box me-4 my-1 mr-3 bg-light"> <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt="">
                      <div class="d-flex align-items-center mt-2">
                        <div class="tag">Tus ordenes:</div>
                        <div class="ms-auto number">${orders.length}</div>
                      </div>
                    </div>
                    <div class="border box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt="">
                      <div class="d-flex align-items-center mt-2">
                        <div class="tag">En carrito:</div>
                        <div class="ms-auto number">${getCartItems().length}</div>
                      </div>
                    </div>
                  </div>

                  ${orders.length === 0 ? `<div class="text-uppercase">No tienens ninguna orden</div>` : 
                    orders.map(order => `
                    
                      <div class="border order my-3 bg-light">
                        <div class="row">
                          <div class="col-lg-7">
                            <div class="d-flex flex-column justify-content-between order-summary">
                              <div class="d-flex align-items-center">
                                <div class="text-uppercase">Orden #${order._id}</div>
                                ${order.deliveredAt !== undefined ? `<div class="green-label ms-auto text-uppercase">Enviado</div>` : 
                                `<div class="blue-label ms-auto text-uppercase">Debe</div>` }
                              </div>
                              <div class="fs-8">${order.orderItems.length} Productos | Precio: $${order.totalPrice}</div>
                              <div class="fs-8">${order.createdAt}</div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                              <div class="status">Estado: ${order.paidAt !== undefined ? `Pagado` : `Esperando pago` }</div>
                            </div>   
                          </div>
                          <a href="/#/order/${order._id}" class="move-to-left">Mas detalles</a>
                        </div>
                      </div>
                    
                    `).join("\n")
                
                  }

            </div>
          </div>
        </div>
   
      `;
    },
  };
  
  export default ProfileScreen;
  