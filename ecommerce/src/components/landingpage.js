import React, { Component } from "react";
import {Layout} from 'react-mdl';

import './CSS/ladingpage.css'

class LandingPage extends Component {
  render() {
    return [(<div class="row container">
              
                <div class= "row container">
                
                    <Layout src={require("../img/landscape2.jpg")} alt="Horizon Instruments" class="heroImage">
                      <h3  style = {{textAlign: 'center', color: '#eeeeee', margin: "auto"}}>HORIZON INSTRUMENTS</h3>
                    </Layout> 
                   
                  
                </div>
              
              
                <div>
             
                </div>
                  {/* <Content>
                    <img src={require("../img/logoHorizonInstruments.png")} alt="Horizon Instruments" className="logo" />
                  </Content> */}
          </div>)];

  }
}

export default LandingPage; 