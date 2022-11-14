import React from 'react';
import '../Videocard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VideoCard = ({image,channel,views,timestamp,channelImage,title}) => {
  return (
    <div className='videocard'>
      <img className='videoCard_thumbnail'   src={image} alt="" />
      <div className="videoCard_info">
        <img className='videocard_avatar' alt = {channel} src={channelImage}/>
    <div className="video_text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views}.{timestamp}</p>
    </div>
      </div>
    </div>
  )
}

export default VideoCard
