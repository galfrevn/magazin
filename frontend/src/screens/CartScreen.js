import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl, rerender } from "../utils";

const addToCart = (item, forceUpdate = false) => {

  let cartItems = getCartItems();
  const existItem = cartItems.find((x) => x.product === item.product);

  if (existItem) {
    if (forceUpdate) {
      cartItems = cartItems.map((x) => x.product === existItem.product ? item : x);
    };
  }  else {
    cartItems = [...cartItems, item];
  }

  setCartItems(cartItems);

  if (forceUpdate) {
    rerender(CartScreen);
  }

};

const removeFromCart = (id) => {

  setCartItems(getCartItems().filter((x) => x.product !== id));

  if (id === parseRequestUrl().id) {
    document.location.hash = "/cart"
  } else {
    rerender(CartScreen);
  }

}

const CartScreen = {

    after_render: () => {
        
      const qtySelects = document.getElementsByClassName("td-input");

      Array.from(qtySelects).forEach((qtySelect) => {
        qtySelect.addEventListener("change", (e) => {
          const item = getCartItems().find((x) => x.product === qtySelect.id);
          addToCart({ ...item, qty: Number(e.target.value) }, true);
        });
      });

      const deleteButtons = document.getElementsByClassName("remove-btn");
      Array.from(deleteButtons).forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
          removeFromCart(deleteButton.id);
        });
      });
    },

    render: async () => {

      window.scrollTo(0, 0);

        const request = parseRequestUrl();
        if (request.id) {
          const product = await getProduct(request.id);
          addToCart({
            product: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty: 1,
          });
        } 
        const cartItems = getCartItems();
        

        return `
        
          <!-- Breadcump -->
          <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
            <p>Magasin / Carrito</p>
          </div>

          <div class="container-md cart">
            <table class="${cartItems.length === 0 ? 'hidden' : ''}">
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
              ${
                cartItems.length === 0 ?
                ` <div class="non-items" >
                    <i class="far fa-sad-tear"></i>
                    <div>Parece que esto está vacio :(</div>
                    <a href="/#/productlist"><span>Volver al catalogo</span></a>
                  </div>
                ` :  
                cartItems.map(item => `
                
                  <tr>
                    <td id="ignore-pd">
                      <div class="cart-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-content">
                          <a href="/#/product/${item.product}"><p>${item.name}</p></a>
                          <span>Precio: $${item.price}</span>
                          <a href="#/cart" class="remove-btn" id="${item.product}">Remover</a>
                        </div>
                      </div>
                    </td>
                    <td id="ignore-pd">
                      <select class="td-input" id="${item.product}">
                        ${[...Array(item.countInStock).keys()].map((x) =>
                          item.qty === x + 1 ? 
                          `<option selected value="${x + 1}">${x + 1}</option>` : 
                          `<option value="${x + 1}">${x + 1}</option>`
                        )};
                      </select>
                    </td>
                    <td id="ignore-pd">$${item.price * item.qty}</td>
                  </tr>
                
                `).join("\n")}
              
              </table>

              <div class="total-price ${cartItems.length === 0 ? 'hidden' : ''}">
                <table>
                  <tr>
                    <td id="ignore-pd">Subtotal</td>
                    <td id="ignore-pd"> (${cartItems.reduce(
                      (a, c) => a + c.qty, 0 )} 
                      Articulos): $${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td id="ignore-pd">Envio</td>
                    <td id="ignore-pd">$50</td>
                  </tr>
                  <tr>
                    <td id="ignore-pd">Total</td>
                    <td id="ignore-pd">$${cartItems.reduce((a, c) => a + c.price * c.qty, 0) + 50}</td>
                  </tr>
                </table>
                <a href="#/placeorder" class="newsletter_submit_btn trans_300">Completar la compra</a>
                <a href="#/productlist" class="newsletter_other_btn trans_300">Continuar comprando</a>
              </div>  
            </div>

        `
    }

}

export default CartScreen;