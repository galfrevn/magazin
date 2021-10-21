import { createOrder } from "../api";
import CheckoutSteps from "../components/CheckoutSteps";
import { cleanCart, getCartItems, getPayment, getShipping, getUserInfo, setPayment, setShipping } from "../localStorage";
import { hideLoading, showLoading, showMessage } from "../utils";

const convertCartToOrder = () => {

  const orderItems = getCartItems();
  if (orderItems.length === 0) {
    document.location.hash = '#/cart'
  };

  const shipping = getShipping();

  const payment = getPayment();

  const itemsPrice = orderItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = 50;
  const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
  const totalPrice = itemsPrice + shippingPrice;

  return {
    orderItems,
    shipping,
    payment,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice
  }

};

const PlaceOrderScreen = {
    after_render: async () => {

      document.getElementById("shipping-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        setShipping({
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            postalCode: document.getElementById("postalCode").value,
            country: document.getElementById("country").value,
        });
        console.log(address.value, city.value, postalCode.value, country.value);
        
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').id;
        setPayment({ paymentMethod });

        console.log(paymentMethod);

      });

      var forms = document.getElementsByClassName('needs-validation')
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
          checkVality();
        }, false)
      });
    
      async function checkVality() {
        
        var inValidated = document.getElementsByClassName('invalid-feedback');
        var counter = inValidated.length; 
    
        Array.prototype.forEach.call(inValidated, function(e) {
          if($(e).css('display') === 'none') {
            counter--
          }
        });
        console.log(counter);
        if (counter == 0) {
          const method = document.querySelector('input[name="paymentMethod"]:checked').id;

          if (method == "paypal") {
            const order = convertCartToOrder();
            showLoading();

            const data = await createOrder(order);
            hideLoading();

            if (data.error) {
            showMessage(data.error);
            } else {
              cleanCart();
              document.location.hash = `/order/${data.order._id}`;
            };
          }
          else {
            const order = convertCartToOrder();
            showLoading();

            const data = await createOrder(order);
            hideLoading();

            if (data.error) {
            showMessage(data.error);
            } else {
              cleanCart();
              document.location.hash = `/order/${data.order._id}`;
            };
          };
        }
      }

    },

    render: () => {

      window.scrollTo(0, 0);

      const { name, email } = getUserInfo();
      if (!name) 
        document.location.hash = "/signin"
      
      const { orderItems } = convertCartToOrder();
      const { address, city, postalCode } = getShipping(); 

      return ` 

        ${CheckoutSteps.render({ step1: false, step2: false, step3: false, step4: false })}
        
        <div class="order">
          <div class="container">
            <div class="py-5 text-center">
              <h4>Formulario de Pago</h4>
              <p>Por favor, complete los campos requeridos debajo para completar con exito tu compra en Magasin. Encontrá fotos, noticias y codigos de descuento en nuestra cuenta de Instagram.</p>
            </div>
            <div class="row">
              <div class="col-md-4 order-md-2 mb-4">
                <div id="fixed-md" style="z-index: 1;">
                  <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Tu Carrito</span>
                    <span class="badge badge-secondary badge-pill">${getCartItems().length}</span>
                  </h4>
                  <ul class="list-group mb-3 sticky-top">

                ${orderItems.map(item => `
                
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">${item.name}</h6>
                      <small class="text-muted">$${item.price}</small>
                    </div>
                    <span class="text-muted">$${item.price * item.qty}</span>
                  </li>

                `).join("\n")}

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Envio</h6>
                    </div>
                    <span class="text-muted">$50</span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (ARG)</span>
                    <strong id="code-final">$${orderItems.reduce((a, c) => a + c.price * c.qty, 0) + 50}</strong>
                  </li>

                </ul>
                
              </div>
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Formulario de Entrega</h4>
                <form class="needs-validation" id="shipping-form" novalidate="">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Nombre/s</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="${name}" required="">
                            <div class="invalid-feedback"> Se requiere un Nombre valido. </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Apellido/s</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                            <div class="invalid-feedback"> Se requiere un Apellido valido. </div>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="you@ejemplo.com" required="" value="${email}">
                        <div class="invalid-feedback"> Se requiere un Email valido. </div>
                    </div>
                    <div class="mb-3">
                        <label id="address1" for="address">Direccion</label>
                        <input type="text" class="form-control" id="address" placeholder="7 de Marzo 2222" required="" value="${address}">
                        <div class="invalid-feedback"> Se requiere una Direccion valida </div>
                    </div>
                    <div class="mb-3">
                        <label for="address2">Direccion 2 <span class="text-muted">(Optional)</span></label>
                        <input type="text" class="form-control" id="address2" >
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="country">Provincia</label>
                            <select class="custom-select d-block w-100" id="country" required="">
                                <option value=""> Opciones...</option>
                                <option value="Buenos Aires">Buenos Aires</option>
                                <option>Capital Federal</option>
                                <option>Catamarca</option>
                                <option>Chaco</option>
                                <option>Chubut</option>
                                <option>Cordoba</option>
                                <option>Corrientes</option>
                                <option>Entre Rios</option>
                                <option>Formosa</option>
                                <option>Jujuy</option>
                                <option>La Pampa</option>
                                <option>La Rioja</option>
                                <option>Mendoza</option>
                                <option>Misiones</option>
                                <option>Neuquen</option>
                                <option>Rio Negro</option>
                                <option>Salta</option>
                                <option>San Juan</option>
                                <option>San Luis</option>
                                <option>Santa Cruz</option>
                                <option>Santa Fe</option>
                                <option>Santiago del Estero</option>
                                <option>Tucuman</option>
                            </select>
                            <div class="invalid-feedback"> Seleccione una Provincia. </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">Ciudad</label>
                            <input type="text" class="form-control" id="city" placeholder="" required="" value="${city}">
                            <div class="invalid-feedback"> Ciudad no valida. </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="zip">C. Postal</label>
                            <input type="text" class="form-control" id="postalCode" placeholder="" required="" value="${postalCode}">
                            <div class="invalid-feedback"> Se requiere un Codigo Postal valido. </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="save-info">
                        <label class="custom-control-label" for="save-info">Guardar la informacion brindada para futuras compras</label>
                    </div>
                    <hr class="mb-4">
                    <h4 >Metodo de Pago</h4>
                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="Efectivo" name="paymentMethod" type="radio" class="custom-control-input" required="" checked>
                              <label class="custom-control-label" for="Efectivo">Efectivo</label>
                            </input>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="Paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                            <label class="custom-control-label" for="Paypal">PayPal</label>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="newsletter_submit_btn trans_300" type="submit">Finalizar la compra</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

      `;
  
    },
  };
  
  export default PlaceOrderScreen;
  