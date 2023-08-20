import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { iconPerson } from 'Helpers/iconPerson.js'
import { requestPlaces } from 'Api/placesApi.js'
import { CATEGORIES, MIN_RADIUS } from 'Constants'
import { sidebar } from 'leaflet-sidebar'
import { createButton } from 'Helpers/buttonLocation'
import { createSidebar } from 'Helpers/sidebar'

const LocationMarker = () => {
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        createButton(map, setPosition)
        // createSidebar(map)
        console.log(map)
    }, [])

    return (position !== null ?
        <Marker position={position}
            icon={iconPerson} /> : null)
}

export default LocationMarker
