import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'

const LocationMarker = () => {
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        map.locate().on('locationfound', (e) => {
            console.log(e.latlng)
            setPosition(e.latlng)
        })
    }, [map])

    return (position !== null ?
        <Marker position={position}></Marker> : null)
}

export default LocationMarker
