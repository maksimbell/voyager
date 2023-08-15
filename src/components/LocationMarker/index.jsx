import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import L from 'leaflet'

const LocationMarker = () => {
    const radius = 1000
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        map.locate().on('locationfound', (e) => {
            const pos = e.latlng
            setPosition(pos)
            const circle = L.circle(pos, radius)
            circle.addTo(map)
            map.flyTo(pos)
        })
    }, [map])

    return (position !== null ?
        <Marker position={position}
        // icon={}
        /> : null)
}

export default LocationMarker
