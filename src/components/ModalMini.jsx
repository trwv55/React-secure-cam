import React from "react";

const ModalMini = () => {
  return (
    <div className='modal-mini-wrapper'>
      <form action='' method='get' class='form-mini'>
        <div class='form-mini'>
          <input type='text' name='name' id='name' placeholder='Введите имя' required />
        </div>
        <div class='form-mini'>
          <input type='number' name='number' id='email' placeholder='Телефон' required />
        </div>
        <div className='form-check'>
          <input type='checkbox' className='form-check-input check-input' id='exampleCheck1' />
          <label className='form-check-label check-label' for='exampleCheck1'>
            Я соглашаюсь на обработку моих
            <br />
            персональных данных.
          </label>
        </div>
        <div class='form-mini form-btn'>
          <input type='submit' value='Subscribe!' />
        </div>
      </form>
    </div>
  );
};

export default ModalMini;
