import React from "react";
import VideoCamera from "../assets/images/videoReg/chebcamera.png";

const VideoReg = () => {
  return (
    <div className='video'>
      <div className='videoReg'>
        <div className='container'>
          <h3>Видеорегистраторы</h3>
          <ul className='blocks'>
            <li>
              <img src={VideoCamera} alt='' />
            </li>
            <li>
              <img src={VideoCamera} alt='' />
            </li>{" "}
            <li>
              <img src={VideoCamera} alt='' />
            </li>{" "}
            <li>
              <img src={VideoCamera} alt='' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoReg;
