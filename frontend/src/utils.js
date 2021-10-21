// Utilidades
// Este documento proporciona funciones que se reutilizan en numerosos documentos.

import { getCartItems } from "./localStorage.js";

// Funcion ParseRequestUrl(), permite dividir la Url de la aplicacion y modificarla.
export const parseRequestUrl = () => {
  const address = document.location.hash.slice(1).split('?')[0];
  const queryString =
    document.location.hash.slice(1).split('?').length === 2
      ? document.location.hash.slice(1).split('?')[1]
      : '';
  const url = address.toLowerCase() || '/';
  const r = url.split('/');
  const q = queryString.split('=');
  return {
    resource: r[1],
    id: r[2],
    verb: r[3],
    name: q[0],
    value: q[1],
  };
};
// Funcion rerender(), permite recargar el contenido que se muestra en la pantalla sin recargar
// la pagina actual.
export const rerender = async (component) => {
  document.getElementById("app_container").innerHTML = await component.render();
  await component.after_render();
};
// Muestra una pantalla de carga
export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};
// Esconde una pantalla de carga
export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};
// Muestra un mensaje
export const showMessage = (message, callback) => {
  document.getElementById("message-overlay").innerHTML = `
  
    <div>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title text-md">Magasin - Mensaje</div>
          </div>
          <div class="modal-body">
            <div class="p-1 text-center">
              <p>${message}</p>
            </div>
          </div>
          <div class="modal-footer"> <button id="message-overlay-close-button" class="btn btn-danger">Aceptar</button> </div>
         </div>
        </div>
      </div>

  `;
  document.getElementById("message-overlay").classList.add("active");
  document.getElementById("message-overlay-close-button").addEventListener("click", () => {
    document.getElementById("message-overlay").classList.remove("active");
    if (callback) {
      callback();
    }
  });
};
// Redirecciona al usuario si el carrito de compras está vacio
export const redirectUser = () => {
  if (getCartItems().length !== 0) {
    document.location.hash = "/placeorder";
  } else {
    document.location.hash = "/";
  };
}
