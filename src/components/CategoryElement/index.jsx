import React from 'react'
import {
    List, ListItemButton, ListItemIcon, ListItemText, Checkbox, ListItem
} from '@mui/material'

const CategoryElement = ({ item, onClick }) => {
    const name = item.split('.').reverse().join(' ')

    return (
        <ListItem
            role="listitem"
            button
            onClick={onClick(value)}
        >
            <ListItemIcon>
                <Checkbox
                    checked={1}
                    tabIndex={-1}
                    disableRipple
                // inputProps={{
                //     'aria-labelledby': labelId,
                // }}
                />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default CategoryElement
