import React from "react";
import InputMask from "react-input-mask";

const Modal = () => {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='description'>
          <h4 className='modal-title'>
            Видеонаблюдение для склада
            <br />
            помогает:
          </h4>
          <div className='blocks-text'>
            <div className='row row1'>
              <div className='block-text'>
                <p className='title'>
                  Контролировать трудовую <br />
                  дисциплину сотрудников <br />и их поведение
                </p>
              </div>
              <div className='block-text'>
                <p className='title'>
                  Выявлять посторонних <br />
                  лиц и нарушителей <br />
                  порядка
                </p>
              </div>
            </div>
            <div className='row row2'>
              <div className='block-text'>
                <p className='title'>
                  Фиксировать воровство и<br />
                  утечку служебной
                  <br />
                  информации
                </p>
              </div>
              <div className='block-text'>
                <p className='title'>
                  Собирать доказательную
                  <br />
                  базу на случай спорных <br />
                  ситуаций
                </p>
              </div>
            </div>
          </div>

          <div className='choose'>
            <h4>Бизнес выбирает нас </h4>
            <div className='bloks-icons'>
              <div className='block-icon'>
                <img src='' alt='' />
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className='rotate'></div>

        <div className='form'>
          <a href='/'>
            <img src='../static/images/modal-close.svg' alt='' />
          </a>
          <form className='modal-form'>
            <h4>
              Оставьте заявку <br />
              на подключение
            </h4>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Введите имя'
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Телефон'
              />
            </div>
            <div className='form-check'>
              <input type='checkbox' className='form-check-input check-input' id='exampleCheck1' />
              <label className='form-check-label check-label' htmlFor='exampleCheck1'>
                Я соглашаюсь на обработку моих
                <br />
                персональных данных.
              </label>
            </div>
            <button
              onClick={() => setModalWindow(false)}
              type='submit'
              className='btn btn-primary btn-modal'>
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
