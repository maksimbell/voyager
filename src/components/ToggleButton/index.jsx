import React from 'react'
import './style.scss'

const ToggleButton = ({ title, toggleInfo, onToggle }) => {
    console.log(title, toggleInfo)

    function handleToggle() {
        console.log('The link was clicked.');
        // if (toggleInfo != title)
        //     onToggle(title)
    }

    return (
        <button id={title} className="Toggle-button" onClick={handleToggle} />
    )
}

export default ToggleButton
