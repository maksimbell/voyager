import React, { useState } from 'react'
import {
    Fade, Box, TextField
} from '@mui/material'
import {
    SIDEBAR_SECTIONS_MAP
} from 'Constants'
import SidebarButton from 'Components/SidebarButton'
import LogoIcon from 'Components/LogoIcon'
import FadeContainer from 'Components/FadeContainer'
import CategoryList from 'Components/CategoryList'
import searchButtonIcon from 'Assets/sidebar/search-btn.png'
import {
    MIN_RADIUS,
    CATEGORY_MAP
} from 'Constants'
import './style.scss'

const SideBar = () => {

    const [visible, setVisible] = useState(false)
    const [section, setSection] = useState(0)
    const [radius, setRadius] = useState(MIN_RADIUS)

    function handleClick() {
        setVisible(!visible)
    }

    function handleRadiusChange(e) {
        const newRadius = e.target.value
        console.log(newRadius)
        setRadius(newRadius)
    }

    const sideButtons = Object.keys(SIDEBAR_SECTIONS_MAP).map(item =>
        <SidebarButton
            title={item}
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
                <div className="Sidebar-search">
                    <CategoryList />
                    <TextField id="outlined-basic"
                        onChange={handleRadiusChange}
                        variant="outlined"
                        value={radius}
                        label="Km" />
                    <SidebarButton
                        className="Sidebar-search"
                        title={0}
                        icon={searchButtonIcon}
                        onClick={handleClick}
                    />
                </div>
            </FadeContainer>
        </div >
    )
}

export default SideBar