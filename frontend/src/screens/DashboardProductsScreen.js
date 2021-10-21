import { getProducts, createProduct, deleteProduct } from "../api";
import DashboardMenu from "../components/DashboardMenu";
import { clearUser } from "../localStorage";
import { showLoading, hideLoading, rerender, showMessage } from '../utils';

const DashboardProductsScreen = {

    after_render: () => {
      document.getElementById("signout-btn").addEventListener("click", () => {
        clearUser();
        document.location.hash = "/";
      });

      document.getElementById('add-new-bt').addEventListener('click', async () => {
        const data = await createProduct();
        document.location.hash = `/product/${data.product._id}/edit`;
      });

      const editButtons = document.getElementsByClassName('edit-button');
      Array.from(editButtons).forEach((editButton) => {
        editButton.addEventListener('click', () => {
          document.location.hash = `/product/${editButton.id}/edit`;
        });
      });

      const deleteButtons = document.getElementsByClassName('delete-button');
      Array.from(deleteButtons).forEach((deleteButton) => {
        deleteButton.addEventListener('click', async () => {
          if (confirm('Are you sure to delete this product?')) {
            showLoading();
            const data = await deleteProduct(deleteButton.id);
            if (data.error) {
              showMessage(data.error);
            } else {
              rerender(DashboardProductsScreen);
            }
            hideLoading();
          }
        });
      });
    },

    render: async () => {

      const products = await getProducts();

      return ` 
      
        <!-- Breadcump -->
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Administrador / Productos</p>
        </div>
        
        <div class="container" id="top-20">

            ${DashboardMenu.render({selected: 'products'})}

              <div class="col-lg-9 my-lg-0 my-1">
                <div id="main-content" class="bg-white border">

                  <div class="d-flex flex-column">
                    <div class="h5">Administracion de Productos</div>
                    <div>Lista de productos, creacion, edicion y eliminacion, habilitada para tu usuario.</div>
                  </div>

                  <div class="d-flex mt-4">
                  
                    <div class="col-xl-3 col-sm-6 mb-2" style="padding-left: 0 !important;">
                      <div class="card text-white bg-danger o-hidden h-100">
                        <div class="card-body">
                          <div class="card-body-icon">
                            <i class="fa fa-fw fa-support"></i>
                          </div>
                          <div class="mr-2">${products.length} Productos cargados!</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 mb-2" style="padding-left: 0 !important;">
                      <div class="card text-white bg-warning o-hidden h-100">
                        <a class="card-body" id="add-new-bt">
                          <div class="card-body-icon">
                            <i class="fa fa-fw fa-plus"></i>
                          </div>
                          <div class="mr-2">Agregar un producto</div>
                        </a>
                      </div>
                    </div>
                  
                  </div>

                </div>

                  ${products.length === 0 ? `<div class="text-uppercase">No hay productos :(</div>` : 
                    products.map(product => `
                    
                      <div id="listed" class="border order my-3 bg-light b-15">
                        <div class="row">
                          <div class="col">
                            <div class="d-flex flex-column justify-content-center order-summary">
                              <div class="d-flex align-items-center">
                                <div class="text-uppercase">ID #${product._id}</div>
                              </div>
                              <div class="fs-8">Nombre: ${product.name} | Precio: $${product.price}</div>
                              <div class="fs-8">Marca: ${product.brand}</div>
                            </div>
                          </div>
                          <div class="col-5 d-flex justify-content-center">
                            <img id="listed-img" src="${product.image}"></img>
                          </div>
                          <div class="move-to-left">
                            <a class="edit-button" id="${product._id}">Editar</a> |
                            <a class="delete-button" id="${product._id}">Eliminar</a>
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
  
export default DashboardProductsScreen;
  