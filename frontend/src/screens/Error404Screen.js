const Error404Screen = {

    render: () => {
  
      window.scrollTo(0, 0);

      return ` 

      <section class="page_404">
        <div class="container">
          <div class="row">	
            <div class="col">
              <div class="col text-center">
                <div class="four_zero_four_bg">
                </div>
                <div class="contant_box_404">
                  <h4> Parece que estas perdido </h4>
                  <p>La pagina que estas buscando no existe o no está disponible</p>
                  <a href="#" class="btn btn-danger">Volver al inicio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      `;
  
    },
  };
  
  export default Error404Screen;
  