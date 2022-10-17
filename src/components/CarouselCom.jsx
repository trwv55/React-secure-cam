import React from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Office from "../assets/images/makeSave/office.svg";
import Store from "../assets/images/makeSave/store.svg";
import Parking from "../assets/images/makeSave/parking.svg";
import Storage from "../assets/images/makeSave/storage.svg";
import Home from "../assets/images/makeSave/home.svg";
import Apartment from "../assets/images/makeSave/apartment.svg";

export const carouselData = [
  { id: 0, icon: Office, title: "Офисы" },
  { id: 1, icon: Store, title: "Магазины" },
  { id: 2, icon: Parking, title: "Автостоянки" },
  { id: 3, icon: Storage, title: "Склады" },
  { id: 4, icon: Home, title: "Дома" },
  { id: 5, icon: Apartment, title: "Квартиры" },
];

const CarouselCom = () => {
  return (
    <div className='save'>
      <div className='container'>
        <h3>Обезопасим каждую сферу вашей жизни</h3>
        <div className='blocks-wrapper'>
          <Swiper navigation={true} modules={[Navigation]} spaceBetween={30} className='blocks'>
            {carouselData.map((slide) => (
              <SwiperSlide className='block' key={slide.id}>
                <img src={slide.icon} />
                <span>{slide.title}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselCom;
