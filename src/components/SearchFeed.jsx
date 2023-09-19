import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
// import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils.jsx/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

    // const [selectedCategory, setSelectedCategory] = useState('')
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])


    return (

    <Box
        p={2}
        sx={{
            overflowY: 'auto',
            height: '90vh',
            flex: 6, // Adjust this value to control the width of the main content
        }}
    >
        {/* Title */}
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            Search Results for: 
            <span style={{ color: '#F31503' }}> {searchTerm}</span> videos
        </Typography>

        {/* Videos */}
        <Videos videos={videos} />
    </Box>



//the code that didn't work

    //   <Stack sx={{ flexDirection: {
    //         sx: 'column',
    //         md: 'row'
    //     }}}>

    //         <Box sx={{ height: {
    //             sx: 'auto',
    //             md: '92vh'
    //         },
    //         borderRight: '1px solid #3d3d3d',
    //         px: { sx: 0, md: 2 },
    //         flex: 1}}>

    //             <Sidebar
    //             selectedCategory = {selectedCategory}
    //             setSelectedCategory = {setSelectedCategory}
    //             />

    //             <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>

    //                 Copyright 2022 JSM Media

    //             </Typography>
    //         </Box>

    //         <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 3 }}>
    //             <Typography variant='h4' fontWeight="bold" mb={2} sx={{
    //                 color: 'white'
    //             }}>
    //                 {selectedCategory}<span style={{
    //                     color: '#F31503'
    //                 }}>
    //                     Videos
    //                 </span>
    //             </Typography>
    //         </Box>

    //         <Videos videos = {videos} />

    //     </Stack>  
    )
}

export default SearchFeed