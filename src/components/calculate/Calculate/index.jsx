import React, { useState } from "react";
import Form from "../Form";
import Modal from "../../Modal";

const Calculate = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const [montage, setMontage] = useState(false);
  const [fullHD, setFullHD] = useState(false);

  const showModal = () => {
    setModalWindow(true);
    document.body.style.overflow = "hidden";
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
                    value={montage}
                    onChange={() => setMontage(!montage)}
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
                    value={fullHD}
                    onChange={() => setFullHD(!fullHD)}
                    id='flexCheckChecked'
                  />
                  <label className='form-check-label label' htmlFor='flexCheckChecked'>
                    Full HD камера
                  </label>
                </div>
              </div>
              <Form montage={montage} fullHD={fullHD} showModal={showModal} />
            </div>
          </div>
        </div>
      </div>
      {modalWindow && <Modal />}
    </div>
  );
};

export default Calculate;
