import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'black', 
    padding: '20px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',    
  }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.466403,
      lng: -70.5980053
    },
    zoom: 17
  };

  render() {
    return (
      <div style={{ height: '500px', position: "relative", display: "block", width: '1900px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBm5wzWtS7jvbfcNURrFHW-f3S_1lUPPHw"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-33.466403}
            lng={-70.5980053}
            text={'Horizon Instruments'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap
