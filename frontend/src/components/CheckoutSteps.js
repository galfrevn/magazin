// Componente pasos de pago
// Exportamos un objeto con funcion render(Mostrar) que se completará dependiendo del paso en que 
// se encuentre el usuario

const CheckoutSteps = {
  render: (props) => {
    return `

      <div class="checkout-steps">
        <div class="${props.step1 ? 'active' : '' }">Inicio</div>
        <div class="${props.step2 ? 'active' : '' }">Envio</div>
        <div class="${props.step3 ? 'active' : '' }">Pago</div>
        <div class="${props.step4 ? 'active' : '' }">Pedir</div>
      </div>

    `;
  },
};
export default CheckoutSteps;
