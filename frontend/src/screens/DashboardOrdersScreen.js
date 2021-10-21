import DashboardMenu from "../components/DashboardMenu";
import { deleteOrder, getOrders } from "../api";
import { hideLoading, rerender, showLoading, showMessage } from "../utils";

const DashboardOrdersScreen = {

  after_render: () => {
    const deleteButtons = document.getElementsByClassName('delete-button');
    Array.from(deleteButtons).forEach((deleteButton) => {
      deleteButton.addEventListener('click', async () => {
        if (confirm('Estas seguro? Eliminaras esta orden')) {
          showLoading();
          const data = await deleteOrder(deleteButton.id);
          if (data.error) {
            showMessage(data.error);
          } else {
            rerender(DashboardOrdersScreen);
          }
          hideLoading();
        }
      });
    });
  },

    render: async () => {
       
      const orders = await getOrders();

      return ` 
      
        <!-- Breadcump -->
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Administrador / Ordenes</p>
        </div>
        
        <div class="container" id="top-20">

            ${DashboardMenu.render({selected: 'orders'})}

              <div class="col-lg-9 my-lg-0 my-1">
                <div id="main-content" class="bg-white border">
                  <div class="d-flex flex-column">
                    <div class="h5">Administracion de Ordenes</div>
                    <div>Lista de ordenes creada por todos los usuarios. La eliminacion, habilitada para tu usuario.</div>
                  </div>
                  <div class="d-flex my-4">
                  
                    <div class="col-xl-3 col-sm-6 mb-2" style="padding-left: 0 !important;">
                      <div class="card text-white bg-warning o-hidden h-100">
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fa fa-fw fa-list"></i>
                          </div>
                          <div class="mr-2">${orders.length} Ordenes pendientes por revisar</div>
                        </div>
                      </div>
                    </div>

                  </div>

                  ${orders.length === 0 ? `<div class="text-uppercase">Ya no quedan ordenes!</div>` : 
                    orders.map(order => `
                    
                      <div class="border order my-3 bg-light">
                        <div class="row">
                          <div class="col-lg-7">
                            <div class="d-flex flex-column justify-content-between order-summary">
                              <div class="d-flex align-items-center">
                                <div class="text-uppercase">Orden #${order.user.name}</div>
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
                          <div class="move-to-left2">
                            <a href="/#/order/${order._id}">Mas detalles </a> |
                            <a class="delete-button" id="${order._id}"> Eliminar</a>
                          </div>
                          
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
  
export default DashboardOrdersScreen;
  