import React from 'react'
import { Box } from '@mui/material'
import {
    LOGO_ICON
} from 'Constants'

const LogoIcon = () => {
    return (
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
    )
}

export default LogoIcon
