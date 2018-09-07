import  React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import Contacto from './contacto';
import Productos from './productos';
import SimpleMap from './map';
import Login from './login';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/productos" component={Productos} />
    <Route path="/mapa" component={SimpleMap}/>
    <Route path="/login" component={Login}/>
  </Switch>
);

export default Main;