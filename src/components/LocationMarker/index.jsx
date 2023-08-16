import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { iconPerson } from 'Helpers/iconPerson.js'
import { requestPlaces } from 'Api/placesApi.js'
import { CATEGORIES, MIN_RADIUS } from 'Constants'
import { sidebar } from 'leaflet-sidebar'

const LocationMarker = () => {
    const radius = MIN_RADIUS
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        if (map) {
            L.easyButton("fa-map-marker", () => {
                map.locate().on('locationfound', function (e) {
                    const pos = e.latlng
                    setPosition(pos);
                    const circle = L.circle(pos, radius, { fillOpacity: 0.1, opacity: 0.5 })
                    map.flyTo(pos, map.getZoom());
                    circle.addTo(map)

                    // requestPlaces(CATEGORIES, pos, radius)
                    //     .then(res => res.json())
                    //     .then(places => {
                    //         console.log(places)
                    //     })

                    var sidebar = L.control.sidebar('sidebar', {
                        closeButton: true,
                        position: 'left'
                    });
                    map.addControl(sidebar);

                    setTimeout(function () {
                        sidebar.toggle();
                    }, 1000);
                });
            }).setPosition('bottomleft').addTo(map)
            //place into helpers
        }
    }, [])

    return (position !== null ?
        <Marker position={position}
            icon={iconPerson}
        /> : null)
}

export default LocationMarker
