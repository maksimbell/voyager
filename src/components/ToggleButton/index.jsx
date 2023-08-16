import React from 'react'

const ToggleButtonGroup = ({ title }) => {
    return (
        <button id={title} className="Toggle-group__button">{title}</button>
    )
}

export default ToggleButtonGroup
