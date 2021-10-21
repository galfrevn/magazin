const ContactScreen = {
    
    render: () => {
  
      window.scrollTo(0, 0);

      return ` 
      
        <div class="breadcump" style="background-image: url(images/breadcump.jpg);">
          <p>Magasin / Contacto</p>
        </div>

        <div class="container">
          <div class="row top20">
            <div class="col-md-8">
              <div class="map">
                <iframe id="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.780012784758!2d-60.75922718534743!3d-31.667237815597925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a87d36e7ebbd%3A0x6eb6b9ff63a34290!2sEscuela%20T%C3%A9cnica%20N%C2%B0%20322!5e0!3m2!1ses!2sar!4v1625178653444!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
            <div class="col-md-4 panel_center">
             <div class="contact_form">
                <h4>Conocenos</h4>
                <p>Un espacio para acercarce, conversar y sacarte dudas!</p>
                
                <div class="col-lg-12 panel">
                  <div class=" d-flex flex-row align-items-center">
                    <div class="">
                      <h6><i class="fas fa-phone panel_icon"></i>Telefonos</h6>
                      <p class="btm2">Horario de atencion al cliente: Todos los dias de 8hrs a 21hrs</p>
                      <h7>+54 342 528 402</h7>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 panel">
                  <div class="d-flex flex-row align-items-center">
                    <div class="">
                      <h6><i class="fas fa-map-marker-alt panel_icon"></i>Local</h6>
                      <p class="btm2">Visitá nuestra tienda y probate nuestra ropa!</p>
                      <h7>Macia 2007 Santo Tomé, Santa Fé</h7>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 panel">
                  <div class="d-flex flex-row align-items-center">
                    <div class="">
                      <h6><i class="fas fa-pump-medical panel_icon"></i>Prevencion Covid-19</h6>
                      <p>Higiene y uso de barbijo obligatorio!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      `;
  
    },
  };
  
  export default ContactScreen;
  