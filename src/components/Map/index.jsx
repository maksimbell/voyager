import React, { useEffect, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import LocationMarker from 'Components/LocationMarker'
import L, { Control } from 'leaflet';
import "leaflet/dist/leaflet.css";
// import "leaflet-easybutton/src/easy-button.js";
// import "leaflet-easybutton/src/easy-button.css";
// import "font-awesome/css/font-awesome.min.css";
import './style.scss';

const Map = () => {
    // const [map, setMap] = useState(null)

    // useEffect(() => {
    //     if (map) {
    //         L.easyButton("fa-map-marker", () => {
    //             map.locate().on('locationfound', function (e) {
    //                 // setPosition(e.latlng);
    //                 map.flyTo(e.latlng, map.getZoom());
    //             });
    //         }).addTo(map)
    //         console.log(map)
    //     }
    // }, [map])

    return (
        <MapContainer className="Map" center={[53.837824, 27.6430848]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                attributionControl={false}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    )
}

export default Map
