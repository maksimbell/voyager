import React from 'react'
import {
    Button, Box
} from '@mui/material'
import './style.scss'

const SidebarButton = ({ title, icon, onClick, className }) => {
    return (
        <Button
            className={className} 
            onClick={onClick}>
            <Box className="Sidebar-button"
                component="img"
                alt={title}
                src={icon}
            />
        </Button >
    )
}

export default SidebarButton
