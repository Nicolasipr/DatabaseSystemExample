import React, { Component } from 'react';
import { Header, Navigation,Content,
          Footer,FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main';


import './App.css';


class App extends Component {
  
  render() {
    return  [(<div>
        
          <Header class="mdl-layout__header mdl-layout__header--scroll"style={{background:"#795548"}}>
              <span  to="/"  >Horizon Instruments</span>
              <div class="mdl-layout-spacer"></div>
              <Navigation class="mdl-navigation" style={{background:"#795548"}} >
                
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/login">Iniciar Sesion </Link>
               
              </Navigation>
         
          </Header>
          
          < Content class = "row container" style={{minHeight: "60vh"}}>
            <Main />
          </Content>

        
        <div class="row container" >
        <Footer size="mega" >
          <FooterSection type="middle">
            <FooterDropDownSection title="Horizon Instruments">
              <FooterLinkList>
                <Link to="/">About</Link>
                <Link to="/">Terms</Link>
                <Link to="/">Prtners</Link>
                <Link to="/">Updtes</Link>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Details">
              <FooterLinkList>
                <Link to="/">Specs</Link>
                <Link to="/">Tools</Link>
                <Link to="/">Resources</Link>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Technology">
              <FooterLinkList>
                <Link to="/">How it works</Link>
                <Link to="/">Patterns</Link>
                <Link to="/">Usage</Link>
                <Link to="/">Products</Link>
                <Link to="/">Contracts</Link>
              </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
              <FooterLinkList>
                <Link to="/">Questions</Link>
                <Link to="/">nswers</Link>
                <Link to="/">Contct Us</Link>
              </FooterLinkList>
            </FooterDropDownSection>
          </FooterSection>
          <FooterSection type="bottom" logo="Horizon Instruments  ">
            <FooterLinkList>
              <Link to="/">Ayuda</Link>
              <Link to="/">Terminos & Condiciones</Link>
            </FooterLinkList>
          </FooterSection>
        </Footer>
        </div>
      </div>)];
    }

}



export default App;
