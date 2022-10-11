import React, { useState } from "react";
import Form from "../Form";
import Modal from "../../Modal";

const Calculate = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const [checkedValue, setCheckedValue] = useState(0);

  const showModal = () => {
    setModalWindow(true);
    document.body.style.overflow = "hidden";
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValue((prevState) => prevState + Number(value));
    } else if (!checked) {
      setCheckedValue((prevState) => prevState - Number(value));
    }
  };
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
                    value={3450}
                    onChange={handleChange}
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
                    value={1700}
                    onChange={handleChange}
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label label' htmlFor='flexCheckChecked'>
                    Full HD камера
                  </label>
                </div>
              </div>
              <Form showModal={showModal} checkedValue={checkedValue} />
            </div>
          </div>
        </div>
      </div>
      {modalWindow && <Modal />}
    </div>
  );
};

export default Calculate;
