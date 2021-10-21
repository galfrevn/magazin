import { hideLoading, parseRequestUrl, showLoading, showMessage } from '../utils';
import { getProduct, updateProduct, uploadProductImage } from '../api';

const EditProductScreen = {
  after_render: () => {

    const request = parseRequestUrl();
    document
      .getElementById('edit-product-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading();
        const data = await updateProduct({
          _id: request.id,
          name: document.getElementById('name').value,
          price: document.getElementById('price').value,
          image: document.getElementById('image').value,
          example1: document.getElementById('example1').value,
          example2: document.getElementById('example2').value,
          example3: document.getElementById('example3').value,
          brand: document.getElementById('brand').value,
          category: document.getElementById('category').value,
          countInStock: document.getElementById('countInStock').value,
          description: document.getElementById('description').value,
          rating: document.getElementById('rating').value,
          numReviews: document.getElementById('numReviews').value,
          esCat: document.getElementById('esCat').value,
          isOfert: document.getElementById('isOfert').value,
          ofertText: document.getElementById('ofertText').value,
          isNewP: document.getElementById('isNewP').value,
          bigPrice: document.getElementById('bigPrice').value,
        });
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          document.location.hash = '/productlist';
        }
      });

      document
      .getElementById('image-file')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Image uploaded successfully.');
          var location  = data.image;
          var sliced = location.slice(9, location.lenght);
          document.getElementById('image').value = sliced;
        }
        
      });

      document
      .getElementById('example-file1')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Image uploaded successfully.');
          var location  = data.image;
          var sliced = location.slice(9, location.lenght);
          document.getElementById('example1').value = sliced;
        }
        
      });

      document
      .getElementById('example-file2')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Image uploaded successfully.');
          var location  = data.image;
          var sliced = location.slice(9, location.lenght);
          document.getElementById('example2').value = sliced;
        }
        
      });

      document
      .getElementById('example-file3')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        showLoading();
        const data = await uploadProductImage(formData);
        hideLoading();
        if (data.error) {
          showMessage(data.error);
        } else {
          showMessage('Image uploaded successfully.');
          var location  = data.image;
          var sliced = location.slice(9, location.lenght);
          document.getElementById('example3').value = sliced;
        }
        
      });

  },

  render: async () => {

    window.scrollTo(0, 0);

    const request = parseRequestUrl();
    const product = await getProduct(request.id);

    return `

      <div id="edit-form" class="container card-0 justify-content-center ">
        <div class="card-body px-sm-4 px-0">
          <div class="row justify-content-center mb-2">
            <div class="col">
              <h3 class="font-weight-bold ml-md-0 mx-auto text-sm-left"> Editar producto </h3>
              <a href="#/products">Volver a la lista</a>
              <p class="md-4 ml-md-0 text-sm-left"> A continuacion, encontrará un formulario para editar todos los parameros del producto con la ID #${product._id}.</p>
            </div>
          </div>
          <form id="edit-product-form" class="row justify-content-center round">
            <div class="col">
              <div class="card card-1">
                <div class="card-body inner-card p-4">
                  <div class="row justify-content-center">
                    
                    <div class="col px-2">
                      <div class="form-group"><label for="name">Nombre</label><input type="text" name="name" id="name" class="form-control" value="${product.name}"> </div>
                      <div class="form-group"><label for="price">Precio</label><input type="number" name="price" id="price" class="form-control" value="${product.price}"> </div>
                      <div class="form-group"><label for="brand">Marca</label><input type="text" name="brand" id="brand" class="form-control" value="${product.brand}"> </div>

                      <div class="form-group">
                          <label for="category">Categoria</label>
                          <select name="category" id="category" class="form-control" >
                            <option value="men">Hombres</option>
                            <option value="women">Mujeres</option>
                            <option value="kids">Niños</option>
                            <option value="accesories">Accesorio</option>
                          </select> 
                        </div> 

                      <div class="form-group">
                        <label for="category">¿Está en oferta?</label>
                        <select name="isOfert" id="isOfert" class="form-control" value="${product.isOfert}">
                          <option value="true">Verdadero</option>
                          <option selected value="false">Falso</option>
                        </select>
                      </div>
                      <div class="form-group"><label for="category">Texto de oferta </label><input type="text" name="isNewP" id="ofertText" class="form-control" value="${product.ofertText}"></input> </div>
                      </div>
                      <div class="col">
                        <div class="form-group"><label for="countInStock">Cantidad</label><input type="number" name="countInStock" id="countInStock" class="form-control" value="${product.countInStock}"> </div>
                        
                        <div class="form-group"><label for="esCat">Categoria </label><input type="text" name="esCat" id="esCat" class="form-control" value="${product.esCat}"> </div>
                        <div class="form-group"><label for="numReviews">Votos</label><input type="number" name="numReviews" id="numReviews" class="form-control" value="${product.numReviews}"> </div>              
                        <div class="form-group"><label for="rating">Rating (1-5)</label><input type="text" name="rating" id="rating" class="form-control" value="${product.rating}"> </div>
                        
                        <div class="form-group">
                          <label for="category">¿Es nuevo?</label>
                          <select name="isNewP" id="isNewP" class="form-control" selected="${product.isNewP}">
                            <option value="true">Verdadero</option>
                            <option value="false">Falso</option>
                          </select> 
                        </div> 

                        <div class="form-group"><label for="category">Sin oferta </label><input type="text" name="bigPrice" id="bigPrice" class="form-control" value="${product.bigPrice}"> </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col">
                        <div class="form-group files">
                          <label for="image" class="my-auto">Imagen</label> 
                          <input name="image" id="image" type="text" class="form-control" value="${product.image}"/>
                          <input type="file" name="image-file" id="image-file" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col">
                        <div class="form-group files">
                          <label for="image" class="my-auto">Modelo 1</label> 
                          <input name="image" id="example1" type="text" class="form-control" value="${product.example1}"/>
                          <input type="file" name="image-file" id="example-file1" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col">
                        <div class="form-group files">
                          <label for="image" class="my-auto">Modelo 2</label> 
                          <input name="image" id="example2" type="text" class="form-control" value="${product.example2}"/>
                          <input type="file" name="image-file" id="example-file2" />
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col">
                        <div class="form-group files">
                          <label for="image" class="my-auto">Modelo 3</label> 
                          <input name="image" id="example3" type="text" class="form-control" value="${product.example3}"/>
                          <input type="file" name="image-file" id="example-file3" />
                        </div>
                      </div>
                    </div>
                  <div class="row justify-content-center">
                    <div class="col">
                      <div class="form-group"> <label for="exampleFormControlTextarea2">Descripcion</label> <textarea class="form-control rounded-0" id="description" rows="5" >${product.description}</textarea></div>
                      <div class="mb-2 mt-4">
                        <div class="text-right"><button type="submit" class="btn btn-danger form-control"><small class="font-weight-bold">Actualizar</small></button> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    `;
  },
};
export default EditProductScreen;