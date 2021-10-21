// Pantalla Principal

const HomeScreen = {

  render: async () => {

    return `
        
        <!-- Slider -->
        <div class="main_slider" style="background-image: url(images/backwhite.jpg)" >
          <div class="container fill_height">
            <div class="row align-items-center fill_height">
              <div class="col">
                <div class="main_slider_content">
                  <h6>Coleccion Verano / Primavera</h6>
                  <h2>Hasta un 30% de descuento</h2>
                  <div class="red_button shop_now_button">
                    <a href="#/productlist">Comprar ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- New Arrivals -->
        <div class="new_arrivals">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title new_arrivals_title" >
                  <h2 class="scroll-test">Recien llegados</h2>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col text-center">
                <div class="new_arrivals_sorting">
                  <ul
                    class=" arrivals_grid_sorting clearfix button-group filters-button-group" >
                    <li class=" grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center active is-checked fst" data-filter="*" >
                      Todos
                    </li>
                    <li class=" grid_sorting_button button d-flex columnn justify-content-center align-items-center scnd" data-filter=".women" >
                      Mujeres
                    </li>
                    <li class=" grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center" data-filter=".men" >
                      Hombres
                    </li>
                    <li class=" grid_sorting_button button d-flex flex-columnn justify-content-center align-items-center" data-filter=".kids" >
                      Niños
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows"}' >
                  
                  <div class="product-item men">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <a href="#/product/6132bae8649684198c79b9ca"><img src="images/product1.jpg" alt="Remera Mangas cortas Rayada" /></a>
                      </div>
                      <a href="#/cart/6132bae8649684198c79b9ca"><div class="favorite favorite_left"></div></a>
                      <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                        <span>-22%</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/6132bae8649684198c79b9ca">Remera Mangas cortas Rayada</a>
                        </h6>
                        <div class="product_price">
                          $599.00<span>$820</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <a href="#/product/6132c45a8cf0390a28b37794"><img src="images/product2.jpg" alt="Remera Mangas cortas Mount" /></a>
                      </div>
                      <a href="#/cart/6132c45a8cf0390a28b37794"><div class="favorite"></div></a>
                      <div class=" product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center" >
                        <span>Nuevo</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/6132c45a8cf0390a28b37794">Remera Mangas cortas Mount</a>
                        </h6>
                        <div class="product_price">$750.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item men">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <a href="#/product/6132c5236bb032172061292f"><img src="images/product3.jpg" alt="Sweater Mangas largas Lana" /></a>
                      </div>
                      <a href="#/cart/6132c5236bb032172061292f"><div class="favorite"></div></a>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/6132c5236bb032172061292f">Sweater Mangas largas Lana</a>
                        </h6>
                        <div class="product_price">$1299.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item men kids">
                    <div class="product product_filter">
                      <div class="product_image">
                        <a href="#/product/6132c63e4fc91009148182be"><img src="images/product4.jpg" alt="Remera Mangas cortas Lisa" /></a>
                      </div>
                      <a href="#/cart/6132c63e4fc91009148182be"><div class="favorite favorite_left"></div></a>
                      <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                        <span>Oferta</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/6132c63e4fc91009148182be">Remera Mangas cortas Lisa</a>
                        </h6>
                        <div class="product_price">$599.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item men">
                    <div class="product product_filter">
                      <div class="product_image">
                        <a href="#/product/6132c96aa874070d181885ae"><img src="images/product5.jpg" alt="Camisa Mangas largas Jean" /></a>
                      </div>
                      <div class=" product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center" >
                        <span>Nuevo</span>
                      </div>
                      <a href="#/cart/6132c96aa874070d181885ae"><div class="favorite"></div></a>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/6132c96aa874070d181885ae">Camisa Mangas largas Jean</a>
                        </h6>
                        <div class="product_price">$1499.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item women">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <a href="#/product/61339457a3c5081e0cfe6665"><img src="images/product6.jpg" alt="Short Corto Algodon" /></a>
                      </div>
                      <a href="#/cart/61339457a3c5081e0cfe6665"><div class="favorite favorite_left"></div></a>
                      <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                        <span>-12%</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/61339457a3c5081e0cfe6665">Short corto Algodon</a>
                        </h6>
                        <div class="product_price">
                          $999.00<span>$1340.00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item kids men women">
                    <div class="product product_filter">
                      <div class="product_image">
                        <a href="#/product/613501967572c21960906d51"><img src="images/product7.jpg" alt="Camisa Mangas cortas Detalles" /></a>
                      </div>
                      <a href="#/cart/613501967572c21960906d51"><div class="favorite"></div></a>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/613501967572c21960906d51">Camisa Mangas cortas Detalles</a>
                        </h6>
                        <div class="product_price">$1799.00</div>
                      </div>
                    </div>
                  </div>

                  <div class="product-item kids women">
                    <div class="product discount product_filter">
                      <div class="product_image">
                        <a href="#/product/000000000000000000000008"><img src="images/product8.jpg" alt="Campera Mangas largas Jean" /></a>
                      </div>
                      <a href="#/cart/000000000000000000000008"><div class="favorite favorite_left"></div></a>
                      <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                        <span>-26%</span>
                      </div>
                      <div class="product_info">
                        <h6 class="product_name">
                          <a href="#/product/000000000000000000000008">Campera Mangas largas Jean</a>
                        </h6>
                      <div class="product_price">
                        $1999.00<span>$2420.00</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Banners -->
        <div class="banner">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="banner_item align-item-center" style="background-image: url(images/home1-banner1.jpg)" >
                  <div class="banner_text_container">
                    <div class="banner_category">
                      <p href="#/productlist">Accesorios</p>
                    </div>
                    <div class="banner_title">
                      <h4>Collecion Bolsos de Verano</h4>
                    </div>
                    <div class="banner_btn">
                      <a href="#/productlist"><h6>Saber mas</h6></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="banner_item align-item-center" style="background-image: url(images/home1-banner2.jpg)" >
                  <div class="banner_text_container">
                    <div class="banner_category">
                      <p href="#/productlist">Accesorios</p>
                    </div>
                    <div class="banner_title">
                      <h4>Collecion Zapatillas</h4>
                    </div>
                    <div class="banner_btn">
                      <a href="#/product/000000000000000000000021"><h6>Saber mas</h6></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Deal of the week -->
        <div class="deal_ofthe_week">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="deal_ofthe_week_img">
                  <img src="images/home1-banner-deal.jpg" alt="" />
                </div>
              </div>
              <div class="col-lg-6 text-center deal_ofthe_week_col">
                <div class=" deal_ofthe_week_content d-flex flex-column align-items-center float-center" >
                  <div class="section_title">
                    <h2>Oferta de la Semana</h2>
                  </div>
                  <div class="deal_ofthe_week_product">
                    <div class="deal_ofthe_week_prices">
                      <p><span>$1460</span>$1100</p>
                    </div>
                    <h4><a href="#/product/13">Bolso de Mano Cartier</a></h4>
                  </div>
                  <ul class="timer">
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="day" class="timer_num">03</div>
                      <div class="timer_unit">dias</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="hour" class="timer_num">15</div>
                      <div class="timer_unit">hrs</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="minute" class="timer_num">32</div>
                      <div class="timer_unit">min</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="second" class="timer_num">18</div>
                      <div class="timer_unit">seg</div>
                    </li>
                  </ul>
                  <div class="progress_label">
                    <span class="available">Disponibles: <strong> 12</strong></span>
                  </div>
                  <div class="progress_bar">
                    <div class="persentage" style="width: 62%"></div>
                  </div>
                  <div class="red_button deal_ofthe_week_button">
                    <a href="#/product/000000000000000000000013">Comprar ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Sellers -->
        <div class="best_sellers">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title best_sellers_title">
                  <h2>Los mas Vendidos</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="product_slider_container">
                  <div class="owl_carousel owl-theme product_slider">

                    <div class="owl-item product_slider_item">
                      <div class="product-item first">
                        <div class="product-item men">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000001"><img src="images/product1.jpg" alt="Remera Mangas cortas Rayada" /></a>
                            </div>
                              <a href="#/cart/000000000000000000000001"><div class="favorite favorite_left"></div></a>
                            <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                              <span>-22%</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000001">Remera Mangas cortas Rayada</a>
                              </h6>
                              <div class="product_price">
                                $599.00<span>$820</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item">
                        <div class="product-item women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000002"><img src="images/product2.jpg" alt="Remera Mangas cortas Mount" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000002"><div class="favorite"></div></a>
                            <div class=" product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center" >
                              <span>Nuevo</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000002">Remera Mangas cortas Mount</a>
                              </h6>
                              <div class="product_price">$750.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a href="#/cart/2">Añadir al carrito</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item first">
                        <div class="product-item women accesorie">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000013"><img src="images/product13.jpg" alt="Bolso de mano Cartier" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000013"><div class="favorite favorite_left"></div></a>
                            <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                              <span>-18%</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000013">Bolso de mano Cartier</a>
                              </h6>
                              <div class="product_price">
                                $1100<span>$1500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item men">
                        <div class="product-item kids men women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000007"><img src="images/product7.jpg" alt="Camisa Mangas cortas Detalles" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000007"><div class="favorite"></div></a>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000007">Camisa Mangas cortas Detalles</a>
                              </h6>
                              <div class="product_price">$1799.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a href="#/product/000000000000000000000007"></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item men">
                        <div class="product-item kids men women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000005"><img src="images/product5.jpg" alt="Camisa Mangas cortas Detalles" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000005"><div class="favorite"></div></a>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000005">Camisa Mangas largas Jean</a>
                              </h6>
                              <div class="product_price">$1499.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a href="#/product/000000000000000000000005"></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item first">
                        <div class="product-item women accesorie">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000011"><img src="images/product11.jpg" alt="Bolso de mano Cartier" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000011"><div class="favorite favorite_left"></div></a>
                            <div class=" product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center" >
                              <span>-9%</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000011">Remera Mangas cortas Cuello V</a>
                              </h6>
                              <div class="product_price">
                                $800.00<span>$1000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item product_slider_item">
                      <div class="product-item">
                        <div class="product-item women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <a href="#/product/000000000000000000000012"><img src="images/product12.jpg" alt="Remera Mangas cortas Mount" /></a>
                            </div>
                            <a href="#/cart/000000000000000000000012"><div class="favorite"></div></a>
                            <div class=" product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center" >
                              <span>Nuevo</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="#/product/000000000000000000000012">Buzo Cuello redondo Algodon</a>
                              </h6>
                              <div class="product_price">$1800.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="owl-item product_slider_item">
                      <div class="product-item">
                        <div class="product product_filter">
                          <div class="product_image">
                            <a href="#/product/000000000000000000000014"><img src="images/product14.jpg" alt="" /></a>
                          </div>
                          <div class="favorite favorite_left"></div>
                          <div class="product_info">
                            <h6 class="product_name">
                              <a href="#/product/000000000000000000000014">Paquete Primavera / Verano 2021</a>
                            </h6>
                            <div class="product_price">Saber mas</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class=" product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column" >
                    <i class="fa fa-chevron-left" aria-hidden="true"> </i>
                  </div>
                  <div class=" product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column" >
                    <i class="fa fa-chevron-right" aria-hidden="true"> </i>
                  </div>

                </div>
              </div>
            </div>
 
        </div>

        <!-- Deal of the Month -->
        <div class="deal_ofthe_week">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 text-center deal_ofthe_week_col">
                <div
                  class=" deal_ofthe_week_content d-flex flex-column align-items-center float-center deal_ofthe_month_content" >
                  <div class="section_title">
                    <h2>Oferta del Mes</h2>
                  </div>
                  <div class="deal_ofthe_week_product">
                    <div class="deal_ofthe_week_prices">
                      <p><span>$1500</span>$1150</p>
                    </div>
                    <h4><a href="#">Mochila Marron Rustica</a></h4>
                  </div>
                  <ul class="timer">
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="day2" class="timer_num">03</div>
                      <div class="timer_unit">dias</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="hour2" class="timer_num">15</div>
                      <div class="timer_unit">hrs</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="minute2" class="timer_num">32</div>
                      <div class="timer_unit">min</div>
                    </li>
                    <li class=" d-inline-flex flex-column justify-content-center align-items-center" >
                      <div id="second2" class="timer_num">18</div>
                      <div class="timer_unit">seg</div>
                    </li>
                  </ul>
                  <div class="progress_label">
                    <span class="available">Disponibles: <strong> 08</strong></span>
                  </div>
                  <div class="progress_bar">
                    <div class="persentage" style="width: 82%"></div>
                  </div>
                  <div class="red_button deal_ofthe_week_button">
                    <a href="#/productlist">Comprar ahora</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="deal_ofthe_week_img deal_ofthe_month">
                  <img src="images/home1-banner-deal-2-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="benefit">
          <div class="container">
            <div class="row benefit-row">
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-truck" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>Envio a $50</h6>
                    <p>Dentro de argentina</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>45 dias de garantia</h6>
                    <p>Te devolvemos tu dinero</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-money" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>Pago Online</h6>
                    <p>Con Paypal</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>Abierto 24/7</h6>
                    <p>Pagina online las 24 horas!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    `;
  },
};

export default HomeScreen;