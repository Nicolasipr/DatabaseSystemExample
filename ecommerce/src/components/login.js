import React, { Component } from "react";
import { Textfield, Button }from 'react-mdl'
import {Link} from 'react-router-dom';
import Icon from '@material-ui/icons'
import {account_circle } from '@material-ui/icons'


class Login extends Component {
  render() {
    return ([ 
      <div class="row container"  style={{minHeight: "60vh"}}>  
      <div class="mdl-layout-spacer"></div>
        <div class="mdl-grid" style={{justifyContent: "center" }}>
          <div class="mdl-layout-spacer"></div>

          <div class="demo-card-square mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col" style = {{width: 400,
            height: 400}}>
                <div class="mdl-card__title">
                
              <h2 style={{textAlign: "center", margin: "0 auto"}} class="mdl-card__title-text">Log-in</h2>
            </div>
              <div class="mdl-card__supporting-text">
                Si eres usuario registrado puedes iniciar sesión aquí
              </div>
              <div class="mdl-card__actions" >
              
              <Textfield
                    onChange={() => {}}
                    label="Usuario"
                    style={{width: '480px'}}
                />
                <div class="mdl-layout-spacer"></div>

                <Textfield
                    onChange={() => {}}
                    type="password"
                    label="Contraseña "
                    style={{width: '480px'}}
                />
                 <div class="mdl-card__actions">
                        <Button>Recuperar Contraseña</Button>
                        <Button raised ripple onClick={() => {console.log("Logging in"); } }>Sign In</Button>
                  </div>
                  <div class="mdl-card__supporting-text">
                ¿No tienes cuenta? Puedes registrarte aquí. 
                </div>
              <div class="mdl-card__actions">
                        <Button style={{width: '300px'}} raised ripple onClick={() => {console.log("Logging in"); } }> <Link to="/register"></Link>Registrarse</Button>
                  </div>
               
              </div>
          </div>
         <div class="mdl-layout-spacer"></div>
      </div>

      </div>]);
  }
}

export default Login; 