import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { iconPerson } from 'Helpers/iconPerson.js'

const LocationMarker = () => {
    const radius = 500
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        map.locate().on('locationfound', (e) => {
            const pos = e.latlng
            console.log(pos)
            setPosition(pos)
            const circle = L.circle(pos, radius, {fillOpacity: 0.05, opacity: 0.05})
            circle.addTo(map)
            map.flyTo(pos)
        })
    }, [map])

    return (position !== null ?
        <Marker position={position}
            icon={iconPerson}
        /> : null)
}

export default LocationMarker
