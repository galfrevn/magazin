import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, redirectUser, showLoading, showMessage } from "../utils";

const SigninScreen = {

  after_render: () => {

    document.getElementById("signin-form").addEventListener("submit", async (e) => {
      
      e.preventDefault();
      showLoading();
      const data = await signin({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      });
      hideLoading();
      
      if (data.error) {
        showMessage(data.error);
      } else {
        setUserInfo(data);
        redirectUser();
      }

    });
  },

    render: () => {

      window.scrollTo(0, 0);
  
      if (getUserInfo().name) {
        redirectUser();
      }

      return ` 

      <section class="h-100" style="background-color: #FFF;">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card" style="border-radius: 1rem; margin-top: 7rem;">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://i.pinimg.com/originals/82/b1/71/82b17107569221de80b03d852df898e2.jpg"
                    alt="login form"
                    class="img-fluid" style="border-radius: 1rem 0 0 1rem;"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
    
                    <form id="signin-form">
    
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-cubes fa-2x me-3 mr-3" style="color: #23272b;"></i>
                        <span class="h4 fw-bold mb-0">Magasin</span>
                      </div>
    
                      <h5 class="fw-normal mb-3 pb-3" >Iniciar sesion</h5>
    
                      <div class="form-outline mb-5">
                        <input type="email" id="email" class="form-control " />
                        <label class="form-label" for="form2Example17">Correo electronico</label>
                      </div>
    
                      <div class="form-outline mb-4">
                        <input type="password" id="password" class="form-control " />
                        <label class="form-label" for="form2Example27">Contraseña</label>
                      </div>
    
                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark" type="submit">Ingresar</button>
                      </div>
    
                      <a class="small text-muted" href="#!">Olvidaste tu contraseña?</a>
                      <p class="mb-5 pb-lg-2" style="color: #393f81;">No tienes una cuenta? <a href="#/register" style="color: #393f81;">Registrate ahora</a></p>
                      <a href="#!" class="small text-muted">Terminos de uso.</a>
                      <a href="#!" class="small text-muted">Politicas de privacidad</a>
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      `;
    },
};
  
export default SigninScreen;
  