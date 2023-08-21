import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'react-leaflet'
import Map from 'Components/Map'
import SideBar from 'Components/SideBar'
import LocationMarker from 'Components/LocationMarker'
import {
    MIN_RADIUS,
    CATEGORY_MAP
} from 'Constants'
import { requestPlaces } from 'Api/placesApi.js'
import iconFactory from 'Helpers/iconFactory.js'
import './style.scss'

const Home = () => {
    const [places, setPlaces] = useState([])
    const [position, setPosition] = useState(null)
    const [radius, setRadius] = useState(MIN_RADIUS)

    useEffect(() => {
        if (position) {
            requestPlaces(Object.keys(CATEGORY_MAP), position, radius)
                .then(res => res.json())
                .then(collection => {
                    console.log(collection.features)
                    setPlaces(collection.features)
                })
        }
    }, [position])

    const placesMarkers = places.map((item, index) => {
        const { geometry, properties } = item
        console.log(geometry, properties)

        return <Marker position={geometry.coordinates.reverse()}
            key={properties.place_id}
            icon={iconFactory.create(properties.categories.reverse()
                .find(item => Object.keys(CATEGORY_MAP).includes(item)))}>
            <Popup>
                'Info'
            </Popup>
        </Marker>
    })

    return (
        <div className="Home">
            <SideBar />
            <Map>
                <LocationMarker position={position} setPosition={setPosition} />
                {placesMarkers}
            </Map>
        </div>
    )
}

export default Home
