import React, { Children, useEffect, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import LocationMarker from 'Components/LocationMarker'
import { MAP_URL, MAP_CENTER, MAP_ZOOM } from 'Constants'
import "leaflet/dist/leaflet.css";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";
import './style.scss';

const Map = ({ children }) => {

    return (
        <MapContainer className="Map" center={MAP_CENTER} zoom={MAP_ZOOM} scrollWheelZoom={true}>
            <TileLayer
                attributionControl={false}
                url={MAP_URL} />
            {children}
        </MapContainer>
    )
}

export default Map
