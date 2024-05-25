import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
//const Video = () => {
const Video = ()=>{
  const {videoId,categoryId}=useParams();


  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}></PlayVideo>
      <Recommended categoryId={categoryId}></Recommended>
    </div>
  )
}

export default Video
