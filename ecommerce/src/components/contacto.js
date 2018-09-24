import React, { Component } from "react";
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";
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
      return [(
          <div>          
              <MyMapComponent  isMarkerShown/>

              <Card shadow={0} style={{width: '800px', margin: 'auto', paddingTop:"-200"}}>
                <CardTitle style={{color: 'Black', margin: "0 auto"}}>Escribenos</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
          </div>
      )];
   }
};

