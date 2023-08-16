import React from 'react'
import Map from 'Components/Map'
import SlidingPanel from 'react-sliding-side-panel';
import SideBar from 'Components/SideBar'
import './style.scss'

const Home = () => {

    return (
        <div className="Home">
            {/* <SideBar /> */}
            <Map />
        </div>
    )
}

export default Home
