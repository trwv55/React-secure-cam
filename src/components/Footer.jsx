import React from "react";
import Vk from "../assets/images/footer/vk.svg";
import Inst from "../assets/images/footer/inst.svg";
import Wh from "../assets/images/footer/wh.svg";
import Tg from "../assets/images/footer/tg.svg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row-wrapper'>
          <div className='col col1'>
            <div className='footer-socials'>
              <a href='https://vk.com/' target='_blank'>
                <img src={Vk} alt='' />
              </a>
              <a href='https://www.instagram.com/' target='_blank'>
                <img src={Inst} alt='' />
              </a>
              <a href='https://wa.me/79200000000' target='_blank'>
                <img src={Wh} alt='' />
              </a>
              <a href='https://telegram.me/vitaliitrw' target='_blank'>
                <img src={Tg} alt='' />
              </a>
            </div>

            <p className='note'>
              Продолжая использовать наш сайт, вы даете <br />
              согласие на обработку файлов Cookies и других <br />
              пользовательских данных, в соответствии с <br />
              <span id='padding'>Политикой конфиденциальности.</span>
            </p>
          </div>
          <div className='col-wrapper'>
            <div className='col col2'>
              <a className='row1 number' href='tel:8(8888)888-000'>
                8(8888)888-000
              </a>
              <p className='row2 phone'>телефон</p>

              <a className='row3 video' href='#'>
                Видеонаблюдение
              </a>
              <a className='row4 fire' href='#'>
                Пожарная сигнализация
              </a>
            </div>
            <div className='col col3'>
              <a href='mailto:info@camera11.ru' className='row1 mail'>
                info@camera11.ru
              </a>
              <p className='row2 post'>почта</p>
              <a href='#' className='row3 domof'>
                Домофония
              </a>
              <a href='#' className='row4 save'>
                Безопасный дом
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
