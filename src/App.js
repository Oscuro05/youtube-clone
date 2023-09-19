import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail"; 
import Feed from "./components/Feed"

export default function App() {

  return (
    <BrowserRouter>

      <Box sx={
        { backgroundColor: '#000' }
      }>

      <Navbar />

      <Routes>

        <Route path="/" exact element = {
          <Feed />
        } />
        <Route path="/video/:id" element = {
          <VideoDetail />
        } />
        <Route path="/channel/:id" element = {
          <ChannelDetail />
        } />
        <Route path="/search/:searchTerm" element = {
          <SearchFeed />
        } />

      </Routes>

      </Box>
    
    </BrowserRouter>
  )
}