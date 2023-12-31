import { Height } from '@mui/icons-material'
import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils.jsx/constants'
import "./components.css"

const selectedCategory  =  'New';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack 
            direction="row"
            sx={{
                overflowY: "auto",
                height: {sx: 'auto', md: '95%'},
                flexDirection: { md: 'column' },
            }}
        >

        {categories.map((category) => (
            <button
                className="category-btn"
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503', color: 'white'
                }}
            >
                <span style= {{
                    color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'
                }}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}

        </Stack>
    )
}

export default Sidebar