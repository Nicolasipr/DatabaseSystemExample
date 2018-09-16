import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBm5wzWtS7jvbfcNURrFHW-f3S_1lUPPHw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: -33.466403, lng: -70.5980053 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -33.466403, lng: -70.5980053 }} />
    )}
  </GoogleMap>
));





export default class Contacto extends Component {
   render(){
      return(
        <div>
           <div>              
              <MyMapComponent  isMarkerShown/>
           </div>
           <div class=" row container">
              <h1 style={{textAling:"center"}}> Contacto</h1>
              <p>Aqui va la informacion de contacto y todas esas cosas</p>
            </div>
          </div>
      )
   }
};

