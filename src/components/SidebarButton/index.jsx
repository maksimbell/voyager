import React from 'react'
import {
    Button, Box
} from '@mui/material'

const SidebarButton = ({ title, icon, onClick }) => {
    return (
        <Button sx={{
            height: 60,
            width: 60,
            mx: 'auto',
            my: 1,
        }} onClick={onClick}>
            <Box
                component="img"
                alt={title}
                src={icon}
            />
        </Button >
    )
}

export default SidebarButton
