import React, { useState } from 'react'
import {
    List, ListItemButton, ListItemIcon, ListItemText, ListItem, Checkbox, Box
} from '@mui/material'
import {
    MIN_RADIUS,
    CATEGORY_MAP
} from 'Constants'
import './style.scss'

const CategoryList = () => {
    const [checked, setChecked] = useState([])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        console.log(newChecked)
    };

    const listContent = Object.keys(CATEGORY_MAP).map((item, index) => {
        const name = item.split('.').reverse().join(' ')

        return (
            <ListItem
                key={index}
                role="listitem"
                button
                onClick={handleToggle(index)}
            >
                {/* <ListItemIcon>
                    <Checkbox
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon> */}
                <Box
                    className="Category-item__icon"
                    component="img"
                    alt={item}
                    src={CATEGORY_MAP[item]}
                />
                <ListItemText primary={name} />
            </ListItem>
        )
    })

    return (
        <List dense component="div" role="list">
            {listContent}
        </List>
    )
}

export default CategoryList
