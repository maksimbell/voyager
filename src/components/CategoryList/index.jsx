import React, { useState } from 'react'
import {
    List, ListItemButton, ListItemIcon, ListItemText, ListItem, Checkbox, Box, Paper
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
        const className = "Category-item" + (checked.includes(index) ? "_checked" : "")
        console.log(className)

        return (
            <ListItem
                className={className}
                key={index}
                role="listitem"
                button
                onClick={handleToggle(index)}
            >
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
        <Paper className="Listbox">
            <List dense component="div" role="list">
                {listContent}
            </List>
        </Paper>
    )
}

export default CategoryList
