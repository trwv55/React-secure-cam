import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { CameraGoods } from "../data/camerasGoods";

const Cameras = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='goods'>
      <div className='container'>
        <h3>Камеры видеонаблюдения</h3>
        <div className='links'>
          <a className='active' href='#'>
            Внутренние
          </a>
          <a href='#'>Уличные</a>
        </div>
        <div className='goods__camera'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2 goods__camera'>
            <div className='blocks'>
              {CameraGoods.map((item) => (
                <SwiperSlide key={item.id}>
                  <img className='img-main' src={item.icon} />

                  <div class='goods__table'>
                    <h4>
                      {item.title} {item.desc}
                    </h4>
                    <p class='ezviz'>{item.span}</p>
                    <p class='features'>Характеристики</p>
                    <div class='table'>
                      <div class='row'>
                        <span className='title'>Матрица</span>
                        <span className='answer'>2 MPix</span>
                      </div>
                      <div class='row'>
                        <span className='title'>Разрешение видео</span>
                        <span className='answer'>1920x1080</span>
                      </div>
                      <div class='row'>
                        <span className='title'>Ночная съемка</span>
                        <span className='answer'>Есть</span>
                      </div>
                      <div class='row'>
                        <span className='title'>Угол обзора</span>
                        <span className='answer'>132°</span>
                      </div>
                      <div class='row'>
                        <span className='title'>Встроенный микрофон</span>
                        <span className='answer'>Есть</span>
                      </div>
                      <div class='row'>
                        <span className='title'>Wi-Fi</span>
                        <span className='answer'>Есть</span>
                      </div>
                    </div>
                    <div className='price-btn'>
                      <h3>{item.price}</h3>
                      <button className='cameras-btn'>Купить</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className='blocks-wrapper'>
          <Swiper
            onSwiper={setThumbsSwiper}
            navigation={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper block'>
            {CameraGoods.map((item) => (
              <SwiperSlide key={item.id}>
                <img className='img-main' src={item.icon} />
                <div class='block-info'>
                  <h5 class='title'>{item.title}</h5>
                  <h5 class='decs'>{item.desc}</h5>
                  <span>{item.span}</span>
                  <h4 class='price'>{item.price}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cameras;
