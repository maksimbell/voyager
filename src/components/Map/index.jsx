import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import LocationMarker from 'Components/LocationMarker'
import "leaflet/dist/leaflet.css";
import './style.scss';

const Map = () => {
    return (
        <div>
            <MapContainer center={[53.837824, 27.6430848]} zoom={16} scrollWheelZoom={true}>
                <TileLayer
                    attributionControl={false}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    )
}

export default Map
