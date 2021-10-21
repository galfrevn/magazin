// Pantalla de Productos
// Importa los objetos del Backend/data.js, para usar sus propiedades
// y mostrarlas en la Pagina.

// Importacion de Componentes

import { getProducts } from "../api";
import Rating from "../components/Rating";

const ProductsScreen = {

  after_render: async () => {
    const buttons = document.querySelectorAll(".favorite");
    buttons.forEach(button => {
      var j = button.id;
      button.addEventListener("click", () => {
        console.log("Liked");
        document.location.hash = "/cart/" + j;
      })
    });    
  },

  render: async () => {

    const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }

    window.scrollTo(0, 0);

    return `
        
        <!-- Breadcump -->
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Catalogo</p>
        </div>

        <div class="wait-overlay" id="waitOver">
          
        </div>

        <!-- Products List -->
        <div class="new_arrivals">
          <div class="container">
            <div class="row align-items-center">
              <div class="col text-center">
                <div class="new_arrivals_sorting">
                  <ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li class="grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center active is-checked fst" data-filter="*" >
                      Todos
                    </li>
                    <li class="grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center scnd" data-filter=".women" >
                      Mujeres
                    </li>
                    <li class="grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center" data-filter=".men" >
                      Hombres
                    </li>
                    <li class="grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center" data-filter=".kids" >
                      Niños
                    </li>
                    <li class="grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center" data-filter=".accesories" >
                      Accesories
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div class="row">
                <div class="col">
                  <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows"}' >
                      
                    ${products.map((product) => `
                    
                      <div class="product-item ${product.category}">
                        <div class="product discount product_filter">
                        
                          <div class="product_image">
                            <a href="#/product/${product._id}"><img src="${product.image}" alt="${product.image}" class="image-replace"/></a>
                          </div>
                          
                          <div id="${product._id}" class="${product.isNewP == true? 'favorite favorite_right' : 'favorite favorite_left'}"></div> 
                          
                          <div class="${product.isOfert == true? 'product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center' : 'hidden'}">   
                            <span>${product.ofertText}</span>
                          </div> 

                          <div class="${product.isNewP == true? 'product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center' : 'hidden'}">
                            <span>Nuevo</span>
                          </div>

                          <div class="product_info">
                            <h6 class="product_name">
                              <a href="#/product/${product._id}">${product.name}</a>
                            </h6>
                            <div class="product_rating">
                              ${Rating.render({value: product.rating, text: `${product.numReviews} votos`})}
                            </div>
                            <div class="product_price">
                              $${product.price} <span class="${product.isOfert == true? 'visible' : '' }">$${product.bigPrice}</span> 
                            </div>
                          </div>
                        </div>
                      </div>
          
                    `).join("\n")}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    `;
  },
};

export default ProductsScreen;