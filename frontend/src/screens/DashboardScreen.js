import { getProducts, getSummary } from "../api";
import DashboardMenu from "../components/DashboardMenu";
import { clearUser } from "../localStorage";
import Chartist from 'chartist';

let summary = {};
const DashboardScreen = {

  after_render: () => {
    document.getElementById("signout-btn").addEventListener("click", () => {
      clearUser();
      document.location.hash = "/";
    });

    new Chartist.Line(
      '.ct-chart-line',
      {
        labels: summary.dailyOrders.map((x) => x._id),
        series: [summary.dailyOrders.map((x) => x.sales)],
      },
      {
        showArea: true,
      }
    );
    new Chartist.Pie(
      '.ct-chart-pie',
      {
        labels: summary.productCategories.map((x) => x._id),
        series: summary.productCategories.map((x) => x.count),
      },
      {
        donut: true,
        donutWidth: 130,
        startAngle: 270,
        showLabel: true,
        donutSolid: true,
      }
    );

  },

    render: async () => {
       
      window.scrollTo(0, 0);

      summary = await getSummary();
      const products = await getProducts();

      return ` 
      
        <!-- Breadcump -->
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Administrador / Dashboard</p>
        </div>
        
        <div class="container" id="top-20">

          ${DashboardMenu.render({selected: 'dashboard'})}

          <div class="col-lg-9 my-lg-0 my-1">
            <div id="main-content" class="bg-white border">
              <div class="d-flex flex-column mb-3">
                <div class="h5">Resumen</div>
              </div>
              <div class="row">

                <div class="col-xl-3 col-sm-6 mb-3">
                  <div div class="card text-white bg-primary o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fa fa-fw fa-comments"></i>
                      </div>
                      <div class="mr-2">${summary.users[0].numUsers} Usuarios registrados!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#/dashboard">
                      <span class="float-left">Ver detalles</span>
                      <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-warning o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fa fa-fw fa-list"></i>
                      </div>
                      <div class="mr-2">${summary.orders[0].numOrders} Ordenes realizadas</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#/orders">
                      <span class="float-left">Ver detalles</span>
                      <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-success o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fa fa-fw fa-shopping-cart"></i>
                      </div>
                      <div class="mr-2">$${summary.orders[0].totalSales} Total en ventas!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#/dashboard">
                      <span class="float-left">Ver detalles</span>
                      <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-danger o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fa fa-fw fa-support"></i>
                      </div>
                      <div class="mr-2">${products.length} Productos en venta!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#/products">
                      <span class="float-left">Ver detalles</span>
                      <span class="float-right">
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </a>
                 </div>
                </div>
                
              </div>

              <div class="charts">

                <div class="border p-4 mb-2 mt-2 b-15">
                  <div class="h5 mb-4">Ventas</div>
                  <div class="ct-perfect-fourth ct-chart-line"></div>
                </div>

                <div class="border p-4 mb-2 mt-5 b-15">
                  <div class="h5 mb-4">Categorias</div>
                  <div class="ct-perfect-fourth ct-chart-pie"></div>
                </div>  

              </div>

            </div>
          </div>
        </div>
   
      `;

    },

};
  
export default DashboardScreen;
  