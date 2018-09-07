import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Grid, Cell }from 'react-mdl'
import './login.css';


class Login extends Component {
  render() {
    return [      
      <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-1">
        <Cell col={4}>
        </Cell>
        <Cell col={4}>
        <form method="post">
          <input type="text" name="u" placeholder="Usuario" required="required" />
          <input type="password" name="p" placeholder="Contraseña" required="required" />
          <Button bsSize="large">Entrar</Button>
        </form>
        </Cell>
        <Cell col={4}></Cell>
    </Grid>
</div>

         
  
    ];
  }
}

export default Login; 