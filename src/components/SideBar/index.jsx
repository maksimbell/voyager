import React from 'react'
import {
    SIDEBAR_SECTIONS_MAP
} from 'Constants'
import SidebarButton from 'Components/SidebarButton'
import LogoIcon from 'Components/LogoIcon'
import './style.scss'

const SideBar = () => {
    const sideButtons = Object.keys(SIDEBAR_SECTIONS_MAP).map(item =>
        <SidebarButton title={item} icon={SIDEBAR_SECTIONS_MAP[item]} />
    )

    return (
        <div className="Sidebar" >
            <LogoIcon />
            {sideButtons}
        </div >
    )
}

export default SideBar