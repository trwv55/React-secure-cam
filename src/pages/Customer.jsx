import { Carousel } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import CustomerPng from "../assets/images/customer.png";
import Choose from "../components/Choose";
import CarouselCom from "../components/CarouselCom";
import Cameras from "../components/Cameras";
import Banner from "../components/Banner";
import Calculate from "../components/calculate/Calculate";
import VideoReg from "../components/VideoReg";
import Map from "../components/Map";

const Customer = () => {
  return (
    <>
      <div class='container customer'>
        <div class='customer-left'>
          <div class='links'>
            <Link to='/b2c' id='active'>
              Для меня
            </Link>
            <Link to='/'>Для бизнеса</Link>
          </div>

          <h1>
            Умное видеонаблюдение <br />
            уже в вашем доме
          </h1>

          <div class='customer-text'>
            <p>Оставьте заявку и получите скидку 15% на первый заказ!</p>
          </div>
          <button class='button'>Получить консультацию</button>
        </div>
        <div class='customer-right'>
          <img src={CustomerPng} alt='' width='600' height='450' />
        </div>
      </div>
      <div className='container main-choose'>
        <Choose />
      </div>
      <CarouselCom />
      <Cameras />
      <Banner />
      <div className='wrapper-calc'>
        <Calculate />
      </div>
      <VideoReg />
      <Map />
    </>
  );
};

export default Customer;
