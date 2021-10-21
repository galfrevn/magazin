const AboutScreen = {
  render: () => {
    window.scrollTo(0, 0);
    return ` 
      
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Sobre nosotros</p>
        </div>
        <div class="back-img">
          <img src="../images/leaves.png"></img>
        </div>
        <div class="container faq-container">
        <h4 class="btm40">Preguntas frecuentes</h4>
          <div class="faq-wrapper"> 
            <button class="toggle">
              En caso de una falla, ¿Hacen devoluciones?
              <i class="fas fa-plus icon"></i>
            </button>
            <div class="faq-content">
              <p>Si, realizamos devoluciones solamente dentro de un plazo de 45 dias una vez realizada la compra.
              Deberá traer la prenda con el incoveniente y nuestros empleados lo estaran esperando para solucionar su problema.</p>
            </div>
          </div>
          <div class="faq-wrapper"> 
            <button class="toggle">
              ¿Aceptan todas las tarjetas?
              <i class="fas fa-plus icon"></i>
            </button>
            <div class="faq-content">
              <p>Como metodos de pago disponibles se encuentra Paypal, que permite, mediante una cuenta creada previamente, 
              abonar con cualquier tarjeta actual (MasterCard, Visa, Bica, etc.) </p>
            </div>
          </div>
          <div class="faq-wrapper"> 
            <button class="toggle">
              ¿Se puede abonar en efectivo?
              <i class="fas fa-plus icon"></i>
            </button>
            <div class="faq-content">
              <p>Si, poodes pagar en efectivo! Al llegar tu compra, podras abonarla de contado en efectivo o mediante  tarjetas con uno de nuestros Posnet</p>
            </div>
          </div>
          <div class="faq-wrapper"> 
            <button class="toggle">
              ¿Se venden talles especiales?
              <i class="fas fa-plus icon"></i>
            </button>
            <div class="faq-content">
              <p>No, lastimosamente no contamos con talles espaciales.
              Aunque contamos con una gran variedad (XS, S, M, L, XL)</p>
            </div>
          </div>
        </div>
      
      `;
  },
};

export default AboutScreen;
