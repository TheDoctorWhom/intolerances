import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect, term }) => {

  return (

      <div className="ui column segment">
        <h4 className="ui header">{video.NAME}</h4>
        <p>{video.TYPE}</p>
        <p>Level: {video.LEVEL}</p>
      </div>

  );
};

export default VideoItem;
