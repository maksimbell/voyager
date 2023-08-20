import React, { useState } from 'react'
import Map from 'Components/Map'
import SlidingPanel from 'react-sliding-side-panel';
import SideBar from 'Components/SideBar'
import LocationMarker from 'Components/LocationMarker'
import './style.scss'

const Home = () => {
    const [places, setPlaces] = useState([])
    const [position, setPosition] = useState(null)

    return (
        <div className="Home">
            <SideBar />
            <Map>
                <LocationMarker position={position} setPosition={setPosition} />
            </Map>
        </div>
    )
}

export default Home
