import React from "react";
import Camera from "../assets/images/security-camera.svg";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container container'>
        <div className='header-left'>
          <a href='#'>
            <img src={Camera} alt='' />
          </a>
          <span>Secure cam</span>
        </div>
        <div className='header-right'>
          <a href='tel:8(8888)888-000'>8(8888)888-000</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
