import React from 'react'
import {
    Button, Box
} from '@mui/material'
import './style.scss'

const SidebarButton = ({ title, icon, onClick }) => {
    return (
        <Button className="Sidebar-button" onClick={onClick}>
            <Box
                component="img"
                alt={title}
                src={icon}
            />
        </Button >
    )
}

export default SidebarButton
