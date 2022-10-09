import React from "react";
import Form from "../Form";
import Modal from "../../Modal";

const Calculate = ({ showModal }) => {
  return (
    <div>
      <div className='calculate'>
        <div className='container'>
          <h3>Рассчитайте стоимость видеонаблюдения</h3>
          <p>Никаких тарифов и абонентских плат - платите один раз и пользуйтесь камерой.</p>
          <div className='form-wrapper'>
            <div className='checkbox-form'>
              <div className='checkbox-wrapper'>
                <div className='form-check checkbox'>
                  <input
                    className='form-check-input input'
                    type='checkbox'
                    value=''
                    id='flexCheckDefault'
                  />
                  <label className='form-check-label label' htmlFor='flexCheckDefault'>
                    Монтаж
                  </label>
                </div>
                <div className='form-check checkbox'>
                  <input
                    className='form-check-input input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label label' htmlFor='flexCheckChecked'>
                    Full HD камера
                  </label>
                </div>
              </div>
              <Form showModal={showModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
