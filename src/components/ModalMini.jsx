import React, { useState } from "react";
import ModalClose from "../assets/images/modal-close.svg";
import InputMask from "react-input-mask";

const ModalMini = ({ setShowModalMini }) => {
  const [unputValue, setInputValue] = useState("");

  const modalMiniClose = () => {
    document.body.style.overflow = "";
    setShowModalMini(false);
  };

  return (
    <div className='modal-mini-wrapper'>
      <form action='' method='get' className='form-mini'>
        <button onClick={modalMiniClose} className='modal-mini-close'>
          <img src={ModalClose} alt='' width='16' height='15' />
        </button>
        <h3>Оставить заявку</h3>
        <div className='form-mini__input'>
          <input type='text' name='name' id='name' placeholder='Введите имя' />
        </div>
        <div className='form-mini__input telefon'>
          <InputMask
            mask='+7 (999) 999-99-99'
            maskChar='_'
            placeholder='Телефон'
            value={unputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input check-input' id='exampleCheck1' />
          <label className='form-check-label check-label' for='exampleCheck1'>
            Я соглашаюсь на обработку моих персональных данных.
          </label>
        </div>
        <div onClick={modalMiniClose} className='form-mini form-btn'>
          <input type='submit' value='Оставить заявку' />
        </div>
      </form>
    </div>
  );
};

export default ModalMini;
