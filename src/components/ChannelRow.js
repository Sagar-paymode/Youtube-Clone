import React from "react";
import "../ChannelRow.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified
}
) => {
  return (
    <div className="channelRow">
      <img className="channelRow_avatar" alt={channel} src={image}/>

      <div className="channelRow_text">
         <h4>{channel} {verified && <CheckCircleIcon/>}</h4> 
        <p>{subs} subscribers.{noOfVideos} videos</p>
      <p>{description}</p>
      </div>

    </div>
  );
};

export default ChannelRow;
