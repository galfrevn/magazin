// Componente menu de administrador
// Exportamos un objeto con funcion render(Mostrar) que se completará dependiendo del menu en el que 
// el administrador se encuentre

const DashboardMenu = {
  render: (props) => {
    return `
        
        <div class="row">
        <div class="col-lg-3 my-lg-0 my-md-1">
          <div id="sidebar" class="bg-purple border">
            <div class="h4 black-white">Dashboard</div>
            <ul>
              <li class="${props.selected === "dashboard" ? "active" : ""}"> 
                <a href="#/dashboard" class="text-decoration-none d-flex align-items-start">
                  <div class="fas fa-box pt-2 me-3 mr-2"></div>
                  <div class="d-flex flex-column">
                    <div class="link">Resultados</div>
                    <p class="link-desc">Resumen de ventas y mas graficos.</p>
                  </div>
                </a>
              </li>
              <li class="${props.selected === "products" ? "active" : ""}"> 
                <a href="#/products" class="text-decoration-none d-flex align-items-start">
                  <div class="fas fa-box-open pt-2 me-3 mr-2"></div>
                  <div class="d-flex flex-column">
                    <div class="link">Productos</div>
                    <p class="link-desc">Funcion CRUD de productos.</p>
                  </div>
                </a>
              </li>
              <li class="${props.selected === "orders" ? "active" : ""}"> 
                <a href="#/orders" class="text-decoration-none d-flex align-items-start">
                  <div class="fas fa-address-book pt-2 me-3 mr-2"></div>
                  <div class="d-flex flex-column">
                    <div class="link">Ordenes</div>
                    <p class="link-desc">Funcion RUD de ordenes de usuarios.</p>
                  </div>
                </a>
              </li>
              <li> 
                <a id="signout-btn" class="text-decoration-none d-flex align-items-start">
                  <div class="fas fa-address-book pt-2 me-3 mr-2"></div>
                  <div class="d-flex flex-column">
                    <div class="link">Cerrar Sesion</div>
                    <p class="link-desc">Salir de la cuenta</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        `;
  },
};

export default DashboardMenu;
