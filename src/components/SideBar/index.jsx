import React, { useState } from 'react'
import {
    Fade, Box
} from '@mui/material'
import {
    SIDEBAR_SECTIONS_MAP
} from 'Constants'
import SidebarButton from 'Components/SidebarButton'
import LogoIcon from 'Components/LogoIcon'
import FadeContainer from 'Components/FadeContainer'
import './style.scss'

const SideBar = () => {

    const [visible, setVisible] = useState(false)

    function handleClick(){
        setVisible(!visible)
    }

    const sideButtons = Object.keys(SIDEBAR_SECTIONS_MAP).map(item =>
        <SidebarButton title={item} 
            icon={SIDEBAR_SECTIONS_MAP[item]} 
            onClick={handleClick}
            key={item} />
    )

    return (
        <div className="Sidebar" >
            <Box className="Sidebar__inner">
                <LogoIcon />
                {sideButtons}
            </Box>
            <FadeContainer visible={visible}>
                <div>Hello!</div>
            </FadeContainer>
        </div >
    )
}

export default SideBar