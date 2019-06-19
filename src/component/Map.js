import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends React.Component {
 render() {
  const { position } = this.props
  return (
   <LeafletMap
    center={position}
    zoom={12}
    maxZoom={20}
    attributionControl={true}
    zoomControl={true}
    doubleClickZoom={true}
    scrollWheelZoom={true}
    dragging={true}
    animate={true}
    easeLinearity={0.35}
   >
    <TileLayer
     url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    />
    <Marker position={position}>
     <Popup>
      Popup for any custom information.
          </Popup>
    </Marker>
    <Marker position={[53.47, -2.22]}>
     <Popup>
      Popup for any custom information.
          </Popup>
    </Marker>
   </LeafletMap>
  );
 }
}

export default Map