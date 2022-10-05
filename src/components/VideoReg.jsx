import React from "react";
import VideoCamera from "../assets/images/videoReg/chebcamera.png";

const VideoReg = () => {
  return (
    <div className='video'>
      <div className='videoReg'>
        <div className='container'>
          <h3>Видеорегистраторы</h3>
          <div className='blocks'>
            <img src={VideoCamera} alt='' />
            <img src={VideoCamera} alt='' />
            <img src={VideoCamera} alt='' />
            <img src={VideoCamera} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoReg;
