  import React from 'react';
  import VideoItem from './VideoItem';

  const VideoList = ({ videos, onVideoSelect, term }) => {
    const renderedList = videos.map((video) => {
      return <VideoItem  key={video.NAME} onVideoSelect={onVideoSelect} video= {video}/>;
    });
    return <div className="ui padded five column grid">{ renderedList }</div>
  };

export default VideoList;
