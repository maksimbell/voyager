import React, { useState } from 'react'
import ToggleButton from 'Components/ToggleButton'
import { SIDEBAR_SECTIONS } from 'Constants'
import './style.scss'

const ToggleButtonGroup = () => {
    const [toggle, setToggle] = useState(SIDEBAR_SECTIONS[0])

    const sectionButtons =
        SIDEBAR_SECTIONS.map((title, index) =>
            <ToggleButton title={title} onToggle={setToggle} toggleInfo={toggle} key={index} />
        )

    return (
        <div className="Toggle-group">
            {sectionButtons}
        </div>
    )
}

export default ToggleButtonGroup
