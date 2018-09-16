import React, { Component } from "react";
import {Content} from 'react-mdl';


class LandingPage extends Component {
  render() {
    return [(<div class="row container">
        <div style={{position:"relative"}}>
          <div style={{ background: "url(https://rayswearingen.files.wordpress.com/2011/08/hdr5.jpg) center / cover", height: 450 }}>
            <Content>
              <img src={require("../img/logoHorizonInstruments.png")} alt="Horizon Instruments" className="logo" class="center" style={{height:"100px"}}/>
            </Content>
          </div>
        </div>
        
          <div>
        <h1 style = {{textAlign: 'center', color: 'Black'}} >Horizon Instruments</h1>
          </div>
            {/* <Content>
              <img src={require("../img/logoHorizonInstruments.png")} alt="Horizon Instruments" className="logo" />
            </Content> */}
    </div>)];

  }
}

export default LandingPage; 