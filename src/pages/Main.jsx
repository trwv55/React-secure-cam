import React from "react";
import Choose from "../components/Choose";
import Modal from "../components/Modal";
import Carousel from "../components/Carousel";
import Cameras from "../components/Cameras";
import Calculate from "../components/calculate/Calculate";
import Banner from "../components/Banner";
import VideoReg from "../components/VideoReg";
import Map from "../components/Map";

const Main = () => {
  return (
    <>
      <div className='overlay'>
        <div className='main'>
          <div className='container consult'>
            <div className='links'>
              <a className='nuxt-link-active'>Для меня</a>
              <a to='/' id='active'>
                Для бизнеса
              </a>
            </div>
            <div className='title'>
              <h1>
                Доверьте безопасность <br />
                Вашего бизнеса нам
              </h1>
            </div>
            <div className='text'>
              <p>Оставьте заявку и получите скидку 15% на первый заказ!</p>
            </div>
            <button className='button'>Получить консультацию</button>
          </div>
        </div>
      </div>
      <div className='container main-choose'>
        <Choose />
      </div>
      <Carousel />
      <Cameras />
      <Calculate />
      <Banner />
      <VideoReg />
      <Map />
    </>
  );
};

export default Main;
