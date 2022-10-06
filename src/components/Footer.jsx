import React from "react";
import Vk from "../assets/images/footer/vk.svg";
import Inst from "../assets/images/footer/inst.svg";
import Wh from "../assets/images/footer/wh.svg";
import Tg from "../assets/images/footer/tg.svg";

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='container'>
        <div class='row-wrapper'>
          <div class='col col1'>
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

            <p class='note'>
              Продолжая использовать наш сайт, вы даете <br />
              согласие на обработку файлов Cookies и других <br />
              пользовательских данных, в соответствии с <br />
              <span id='padding'>Политикой конфиденциальности.</span>
            </p>
          </div>
          <div class='col-wrapper'>
            <div class='col col2'>
              <a class='row1 number' href='tel:8(8888)888-000'>
                8(8888)888-000
              </a>
              <p class='row2 phone'>телефон</p>
              <a class='row3' href='#'>
                Видеонаблюдение
              </a>
              <a class='row4 fire' href='#'>
                Пожарная сигнализация
              </a>
            </div>
            <div class='col col3'>
              <a href='mailto:info@camera11.ru' class='row1 mail'>
                info@camera11.ru
              </a>
              <p class='row2 post'>почта</p>
              <a href='#' class='row3 domof'>
                Домофония
              </a>
              <a href='#' class='row4 save'>
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
