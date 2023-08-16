import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { iconPerson } from 'Helpers/iconPerson.js'

const LocationMarker = () => {
    const radius = 500
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        if (map) {
            L.easyButton("fa-map-marker", () => {
                map.locate().on('locationfound', function (e) {
                    const pos = e.latlng
                    setPosition(pos);
                    const circle = L.circle(pos, radius, { fillOpacity: 0.1, opacity: 0.5 })
                    console.log(circle)
                    map.flyTo(pos, map.getZoom());
                    circle.addTo(map)
                });
            }).addTo(map)
            console.log(map)
            //place into helpers
        }
    }, [])

    return (position !== null ?
        <Marker position={position}
            icon={iconPerson}
        /> : null)
}

export default LocationMarker
