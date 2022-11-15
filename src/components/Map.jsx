import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 55.706167783622526,
      lng: 37.36733119040891,
    },
    zoom: 11,
  };
  return (
    <div className='find'>
      <div className='container'>
        <div className='wrapper'>
          <div className='info'>
            <h3>Как нас найти</h3>
            <div className='office'>
              <h5 className='main-office'>Главный офис</h5>
              <p className='city'>г. Москва,ул. Калинина, 7</p>
              <a href='tel:8(8888)888-000'>8(8888)888-000</a>
              <p className='time'>пн-пт. 09:00 - 18:00</p>
              <p className='close'>cб-вс. выходной</p>
            </div>
            <div className='office'>
              <h5 className='sell-office'>Офис продаж</h5>
              <p className='city'>г. Москва,ул. Калинина, 7</p>
              <a href='tel:8(8888)888-000'>8(8888)888-000</a>
              <p className='time'>пн-пт. 09:00 - 18:00</p>
              <p className='close'>cб-вс. выходной</p>
            </div>
            <a className='quest' href='#'>
              Как пройти до торговой точки
            </a>
          </div>
          <div className='map'>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A27f0ba5f31524e0dd4cbb339a076f8147dc2eaefcc2e5af2636268732c0eceb1&amp;source=constructor'
              frameBorder='0'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
