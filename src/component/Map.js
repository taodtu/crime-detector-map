import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from '@reach/router';

class Map extends React.Component {
    render() {
        const { position } = this.props
        return (
            <LeafletMap
                center={position}
                zoom={15}
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
                        <Link to="/crime">
                            For the crime details
                        </Link>
                    </Popup>
                </Marker>

            </LeafletMap>
        );
    }
}

export default Map