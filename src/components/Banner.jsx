import React from "react";
import Phone from "../assets/images/control/phone.png";

const Banner = () => {
  return (
    <div className='control'>
      <div className='container'>
        <div className='control-wrapper'>
          <div className='image'>
            <img src={Phone} alt='' />
          </div>
          <div className='text'>
            <h4>
              Контроль
              <br /> на расстоянии
            </h4>
            <p>Смотрите прямую трансляцию и записи с видеокамер, где бы Вы не находились</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
