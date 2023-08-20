import React, { useEffect, useState } from 'react'
import { Marker, useMap } from 'react-leaflet'
import iconFactory from 'Helpers/iconFactory.js'
import { createButton } from 'Helpers/buttonLocation'

const LocationMarker = ({ position, setPosition }) => {

    const map = useMap()

    useEffect(() => {
        createButton(map, setPosition)
    }, [])

    return (position !== null ?
        <Marker position={position}
            icon={iconFactory.create()} /> : null)
}

export default LocationMarker
