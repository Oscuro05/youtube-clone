import React from 'react'

import { Typography, Card, CardContent, CardMedia, Link } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils.jsx/constants';

const VideoCard = ({video: {id : {videoId}, snippet}}) => {

    console.log(demoVideoUrl)
    return (
        <Card 
        sx = {{width: {xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none', borderRadius: 0 }}
        >
            <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* yaar don divsan pasun he figure out karaychay prayatna karat ahe ki video details cha page chalat kabara navhta, tar mag atta figure out kela ki Link to chya jagi Link href asayla pahije */}
                <CardMedia
                image = {snippet?.thumbnails?.high?.url}
                alt = {snippet?.title}
                sx = {{width: {
                    xs: '100%', sm: '358px', md: '320px'
                }, height: 180}}
                >

                </CardMedia>
            
            </Link>

            <CardContent
            sx = {{backgroundColor: '#1e1e1e', height: '106px'}}
            >
                <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color= "#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color= "gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle 
                        sx = {{fontSize: 12, color: 'gray', ml: '5px'}} />  
                    </Typography>
                </Link>

            </CardContent>


        </Card>
    )
}

export default VideoCard