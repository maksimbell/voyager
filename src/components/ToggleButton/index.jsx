import React from 'react'
import Logo from '../../assets/person/image.png'
import './style.scss'

const ToggleButton = ({ title, toggleInfo, onToggle }) => {
    console.log(title, toggleInfo)

    function handleToggle(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        // if (toggleInfo != title)
        //     onToggle(title)
    }

    return (
        <button id={title} className="Toggle-button" onClick={handleToggle} />
    )
}

export default ToggleButton
