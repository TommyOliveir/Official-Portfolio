import React from "react";
import ReactPlayer from "react-player";

function YouTubeVideo(props) {
  return (
    <>
      
      <ReactPlayer
        url="https://youtu.be/FlX-zPHM8Yo"
        width="100%"
        height="100%"
        playing={props.isModalOpen}
        
      />
    </>
  );
}

export default YouTubeVideo;
