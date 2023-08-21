import React from 'react'
import {
    Button, Box, Toolbar, IconButton,
    Typography, Menu, Container, Avatar,
    Tooltip, MenuItem, AppBar
} from '@mui/material'
import {
    SIDEBAR_SECTIONS_MAP,
    LOGO_ICON
} from 'Constants'
import SidebarButton from 'Components/SidebarButton'
import './style.scss'

const SideBar = () => {
    const sideButtons = Object.keys(SIDEBAR_SECTIONS_MAP).map(item =>
        <SidebarButton title={item} icon={SIDEBAR_SECTIONS_MAP[item]} />
    )

    return (
        <div className="Sidebar" >
            {/* <AppBar  position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    </Toolbar>
                </Container>
            </AppBar> */}

            <Box
                component="img"
                alt={"Logo"}
                src={LOGO_ICON}
                sx={{
                    height: 30,
                    width: 32,
                    my: 3,
                }}
            />
            {sideButtons}
        </div >
    )
}

export default SideBar