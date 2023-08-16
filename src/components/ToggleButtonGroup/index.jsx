import React, { useState } from 'react'
import ToggleButton from 'Components/ToggleButton'
import { SIDEBAR_SECTIONS } from 'Constants'

const ToggleButtonGroup = () => {
    const [toggle, setToggle] = useState(0)

    const sectionButtons =
        SIDEBAR_SECTIONS.map((title, index) => <ToggleButton title={title} key={index}/>)

    console.log(sectionButtons)

    return (
        <div className="Toggle-group">
            {sectionButtons}
        </div>
    )
}

export default ToggleButtonGroup
