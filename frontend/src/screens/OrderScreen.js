import { deliverOrder, getOrder, getPaypalClientId, payOrder } from "../api";
import { getUserInfo } from "../localStorage";
import { hideLoading, parseRequestUrl, rerender, showLoading, showMessage } from "../utils";

const addPaypalSdk = async (totalPrice) => {
  const clientId = await getPaypalClientId();
  showLoading();
  if (!window.paypal){
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypalobjects.com/api/checkout.js';
    script.async = true;
    script.onload = () => handlePayment(clientId, totalPrice);
    document.body.appendChild(script)
  } else {
    handlePayment(clientId, totalPrice);
  };
};

const handlePayment = (clientId, totalPrice) => {
  window.paypal.Button.render({
    env: 'sandbox',
    client: {
      sandbox: clientId,
      production: '',
    },
    locale: 'en_ES',
    style: {
      size: 'responsive',
      color: 'gold',
      shape: 'pill',
    },
    commit: true,
    payment(data, actions) {
      return actions.payment.create({
        transactions: [
          {
            amount: {
              total: totalPrice,
              currency: 'USD',
            },
          },
        ]
      });
    },
    onAuthorize(data, actions){
      return actions.payment.execute().then(async() => {
        showLoading();
        await payOrder(parseRequestUrl().id, {
          orderID: data.orderID,
          payerID: data.payerID,
          paymentID: data.paymentID,
        });
        hideLoading();
        showMessage('El pago se completó exitosamente', () => {
          rerender(OrderScreen);
        })
      })
    },
  }, '#paypal-button').then(() => {
    hideLoading();
  });
};

const OrderScreen = {

    after_render: () => {
      const request = parseRequestUrl();

      var d = new Date();
      var date = d.getDate();
      var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
      var year = d.getFullYear();  
      var dateStr = date + "/" + month + "/" + year;
      document.getElementById("today-date").innerHTML = dateStr;

      document
      .getElementById('deliver-order-button')
      .addEventListener('click', async () => {
        showLoading();
        await deliverOrder(request.id);
        hideLoading();
        showMessage('Order Delivered.');
        rerender(OrderScreen);
      });
    },

    render: async () => {    

      window.scrollTo(0, 0);
      
        const { isAdmin } = getUserInfo();
        const request = parseRequestUrl();
        const {
          _id,
          shipping,
          payment,
          orderItems,
          totalPrice,
          isDelivered,
          deliveredAt,
          isPaid,
          paidAt,
        } = await getOrder(request.id);

        if (!isPaid) {
          addPaypalSdk(totalPrice);
        }

        return `
        
          <!-- Breadcump -->
          <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
            <p>Magasin / Ordenes</p>
          </div>

          <div class="container">
            <div class="row d-flex justify-content-center">
              <div class="col">
                <div class="card" id="card-order">
                  <div class="invoice p-2 mt-5">
                    <h5>Se ha confirmado tu orden!</h5><span class="font-weight-bold d-block mt-4">Hola, </span> <span>Tu orden ya ha sido confirmada y el envio se realizará en cuanto se realize el pago.</span>
                    <br>

                    ${isPaid ? `<span class="text-success">Pagado el ${paidAt}</span>` :  `<span class="denied">No pagado</span>`}
                    <br>

                    ${isDelivered ? `<span class="text-success">Enviado el ${deliveredAt}</span>` :  `<span class="denied">No enviado</span>`}
     
                    ${ isAdmin && !isDelivered
                      ? `<button id="deliver-order-button" class="btn btn-outline-success ml-3">Realizar pedido</button>`
                      : ''
                    }

                    <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                      <table class="table table-borderless">
                        <tbody>
                          <tr>
                            <td>
                              <div class="py-2 mr-2"> <span class="d-block text-muted">Fecha</span> <span id="today-date">Hoy</span> </div>
                            </td>
                            <td>
                              <div class="py-2 mr-2"> <span class="d-block text-muted">ID Orden:</span> <span>${_id}</span> </div>
                            </td>
                            <td>
                              <div class="py-2 mr-2"> <span class="d-block text-muted">Pago con:</span> <span>${payment.paymentMethod}</span> </div>
                            </td>
                            <td>
                              <div class="py-2"> <span class="d-block text-muted">Direccion</span> <span>${shipping.address}, ${shipping.city}, ${shipping.country}</span> </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="products border-bottom table-responsive">
                      <table class="table table-borderless">
                        <tbody>

                        ${orderItems.map(item => `
                        
                          <tr>
                            <td width="20%"> <img src="${item.image}" width="90"> </td>
                            <td width="60%"> <span class="font-weight-bold">${item.name}</span>
                              <div class="product-qty"> <span class="d-block">Cantidad: ${item.qty}</span> <span>c/u: $${item.price}</span> </div>
                            </td>
                            <td td width="20%">
                              <div class="text-right"> <span class="font-weight-bold">$${item.price * item.qty}</span> </div>
                            </td>
                          </tr>
                        
                        `).join("\n")}
                          
                        </tbody>
                      </table>
                    </div>
                    <div class="row d-flex justify-content-end">
                      <div class="col-md-5 mb-3 mt-4">
                        <table class="table table-borderless">
                          <tbody class="totals">
                            <tr>
                              <td>
                                <div class="text-left"> <span class="text-muted">Subtotal</span> </div>
                                  
                              </td>
                              <td>
                                <div class="text-right"> <span>$${orderItems.reduce((a, c) => a + c.price * c.qty, 0)}</span> </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="text-left"> <span class="text-muted">Envio</span> </div>
                              </td>
                              <td>
                                <div class="text-right"> <span>$50</span> </div>
                              </td>
                            </tr>
                            <tr class="border-top border-bottom">
                              <td>
                                <div class="text-left"> <span class="font-weight-bold">Total</span> </div>
                              </td>
                              <td>
                                <div class="text-right"> <span class="font-weight-bold">$${orderItems.reduce((a, c) => a + c.price * c.qty, 0) + 50}</span> </div>
                              </td>
                            </tr>
                            <tr class="border-top">
                              <td class="fw">
                               <div class="mt-3" id="#paypal-button"></div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>Le enviaremos un email con la informacion de la compra, su comprobante de pago y su garantia.</p>
                    <p class="font-weight-bold mb-0">Gracias por confiar en nosotros!</p> <span>El equipo de Magasin</span>
                  </div>
                <div class="d-flex justify-content-between footer p-2"> <span>Preguntas? Haz click aquí <a href="#/about"> Preguntas frecuentes</a></span></div>
              </div>
            </div>
          </div>
        </div>

      `
    }

}

export default OrderScreen;