import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content,
          Footer,FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main';

import './App.css';

class App extends Component {
  render() {
    return <body>
        <div style={{ height: "500px", position: "relative" }}>
          <Layout style={{ background: "url(https://rayswearingen.files.wordpress.com/2011/08/hdr5.jpg) center / cover" }}>
            <Header scroll transparent title="Horizon Instruments" style={{ color: "grey" }}>
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
              </Navigation>
            </Header>
            <Drawer>
              <img src={require("./img/logoHorizonInstruments.png")} alt="Horizon Instruments" className="logo2" />
              <Navigation>
                <Link to="/">Inicio</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
              </Navigation>
            </Drawer>
            <Content>
              <img src={require("./img/logoHorizonInstruments.png")} alt="Horizon Instruments" className="logo" />
            </Content>
          </Layout>
        </div>
        <div class="row container">
          <br />
          <Content>
            <Main />
          </Content>
        </div>
        <div class="row container" />
        <Footer size="mega">
          <FooterSection type="middle">
            <FooterDropDownSection title="Horizon Instruments">
              <FooterLinkList>
                <Link to="/">bout</Link>
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
      </body>;
      

  }
}

export default App;
