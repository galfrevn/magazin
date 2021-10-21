import {
  parseRequestUrl,
  showLoading,
  hideLoading,
  showMessage,
  rerender,
} from '../utils';
import Rating from '../components/Rating';
import { createReview, getProduct } from "../api";
import { getUserInfo } from '../localStorage';

const DetailsScreen = {

  after_render: () => {

    const request = parseRequestUrl();
    document.getElementById("addCart").addEventListener("click", () => {
      document.location.hash = `/cart/${request.id}`; 
    });

    if (document.getElementById('review-form')) {
      document
        .getElementById('review-form')
        .addEventListener('submit', async (e) => {
          e.preventDefault();
          showLoading();
          const data = await createReview(request.id, {
            comment: document.getElementById('comment').value,
            rating: document.getElementById('rating').value,
          });
          hideLoading();
          if (data.error) {
            showMessage(data.error);
          } else {
            showMessage('Review Added Successfully', () => {
              rerender(DetailsScreen);
            });
          }
        });
    }
  },

  render: async () => {

    window.scrollTo(0, 0);

    const request = parseRequestUrl();
    showLoading();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    hideLoading();
    const userInfo = getUserInfo();

    return `

      <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
        <a href="#/productlist"><p>Catalogo</a> / ${product.esCat}</p>
      </div>

      <section class="section product-detail">
        <div class="details container-md">
          <div class="row">

            <div class="thumbnails col-2">
              <div class="thumbnail">
                <img src="${product.image}" alt="" onclick="initChange(this)" />
              </div>
              <div class="thumbnail">
                <img src="${product.example1}" alt="" onclick="initChange(this)" />
              </div>
              <div class="thumbnail">
                <img src="${product.example2}" alt="" onclick="initChange(this)" />
              </div>
              <div class="thumbnail">
                <img src="${product.example3}" alt="" onclick="initChange(this)" />
              </div>
            </div>

            <div class="left col-5">
              <div class="main">
                <img src="${product.image}" alt="${product.image}" id="full" />
              </div>
            </div>

            <div class="right col-5">
              <h2>${product.name}</h2>
              <div class="price">$${product.price}</div>
                <form class="form-buy">
                  <select name="size" id="size" >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M" selected>M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                  <a class="addCart" id="addCart">Agregar al carrito</a>
                </form>
                <h3>Detalles</h3>
                <p>
                  ${product.description}
                </p>
              </div>
            </div>

        </div>
      </section>  

      <section>
        <div class="container">
        <h2 style="font-size: 22px; margin-bottom: 20px; margin-top: 20px;">Reviews</h2>
        ${product.reviews.length === 0 ? `<div class="mb-3">No hay reviews de este articulo. Escribe una!</div>` : ''}  

        <ul class="review">

          ${product.reviews.map( (review) => `

            <li class="card p-3 mb-4 h-100">
              <div class="d-flex flex-row"> <img src="https://i.imgur.com/hczKIze.jpg" height="40" width="40" class="rounded-circle mr-3">
                <div class="d-flex flex-column ms-2">
                  <h6 class="mb-1 text-danger">${review.name}</h6>
                  <p class="comment-text">${review.comment}</p>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="rating-container">
                  ${Rating.render({
                    value: review.rating,
                  })}
                </div>
                <span class="text-muted ml-2">(${review.rating} estrellas)</span>
                <div style="position: absolute; right: 0;">
                  <div> <span class="text-muted fw-normal fs-10">${review.createdAt.substring(0, 10)}</span> </div>
                </div>
              </div>
            </li>
          
          ` ) .join('\n')}

          

          <li class="card p-3 mb-3">
            ${userInfo.name ? `
              <div class="form-container">
                <form id="review-form">
                  <ul class="form-items">
                  <li> <h2 style="font-size: 20px;">Escribe tu review</h2>  </li>
                  <li>
                    <select required name="rating" id="rating" class="form-control">
                      <option value="">Puntuacion:</option>
                      <option value="1">1 = Malo</option>
                      <option value="2">2 = Meh</option>
                      <option value="3">3 = Bueno</option>
                      <option value="4">4 = Me gustó</option>
                      <option value="5">5 = Excelente</option>
                    </select>
                  </li>
                  <li>
                    <label class="mt-2" for="comment">Comentario:</label>
                  </li>
                  <li>
                    <textarea required class="form-control" name="comment" id="comment" ></textarea>
                  </li>
                  <li>
                    <button type="submit" class="mt-3 btn btn-danger">Publicar</button>
                  </li>
                </ul>
              </form>
              </div> ` : ` 
                <div> Por favor <a href="/#/signin">Inicie sesion</a> con una cuenta para escribir una review.
              </div>`
            }
            </li>
          </ul> 
        </div>
      </div>
    </section> `

  },
};

export default DetailsScreen;
