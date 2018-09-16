import React, { Component } from "react";
// import { Button } from 'react-bootstrap';
import { Textfield, Button }from 'react-mdl'
// import './login.css';


class Login extends Component {
  render() {
    return ([ 
      <div class="row container" style={{background: "#d7ccc8"}}>  
        <div class="mdl-grid" style={{justifyContent: "center" }}>
          <div class="mdl-layout-spacer"></div>

          <div class="demo-card-square mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col" style = {{width: 400,
            height: 500}}>
                <div class="mdl-card__title">
              <h2 class="mdl-card__title-text">Log-in</h2>
            </div>
              <div class="mdl-card__supporting-text">
                Si eres usuario registrado puedes iniciar sesión aquí
              </div>
              <div class="mdl-card__actions" >
              
              <Textfield
                    onChange={() => {}}
                    label="Usuario"
                    style={{width: '300px'}}
                />
                <div class="mdl-layout-spacer"></div>

                <Textfield
                    onChange={() => {}}
                    type="password"
                    label="Contraseña "
                    style={{width: '300px'}}
                />
                 <div class="mdl-card__actions">
                        <Button>Recuperar Contraseña</Button>
                        <Button raised ripple onClick={() => {console.log("Logging in"); } }>Sign In</Button>
                  </div>
                  <div class="mdl-card__supporting-text">
                ¿No tienes cuenta? Puedes registrarte aquí. 
                </div>
              <div class="mdl-card__actions">
                        <Button raised ripple onClick={() => {console.log("Logging in"); } }>Registrarse</Button>
                  </div>
               
              </div>
          </div>
         <div class="mdl-layout-spacer"></div>
      </div>

      </div>]);
  }
}

export default Login; 