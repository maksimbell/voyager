import React from 'react'
import {
    Fade, Box
} from '@mui/material'
import './style.scss'

const FadeContainer = ({ visible, children }) => {
    return (
        <Fade in={visible} className="Fade-container">{children}</Fade>
    )
}

export default FadeContainer
