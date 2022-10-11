import React, { useState } from "react";
import styles from "./form.module.scss";
import Result from "../Result";

const Form = ({ showModal, ...props }) => {
  const [numOfCamers, setNumOfCamers] = useState({
    title: "Количество камер",
    count: 4,
    price: 5990,
  });
  const [numOfDays, setNumOfDays] = useState({
    title: "Время хранения",
    count: 5,
    price: 450,
  });

  const changeNumOfCamers = (vol) => {
    setNumOfCamers({ ...numOfCamers, count: vol });
  };

  const changeNumOfDayStorage = (vol) => {
    setNumOfDays(vol ? { ...numOfDays, count: vol } : numOfDays);
  };

  // const [numOfCamers, setNumOfCamers] = useState(4);
  // const [numOfDays, setNumOfDays] = useState(15);
  return (
    <div className={styles.form__wrapper}>
      <form>
        <div className={styles.form__group}>
          <label className={styles.form__label}>{numOfCamers.title}</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='4'
              value={numOfCamers.count}
              onChange={(event) => changeNumOfCamers(parseInt(event.target.value)) || 0}
            />
          </div>
        </div>
        <div className={styles.form__group}>
          <label className={styles.form__label}>{numOfDays.title}</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              id='exampleInputPassword1'
              placeholder='15'
              value={numOfDays.count}
              onChange={(event) => changeNumOfDayStorage(parseInt(event.target.value)) || 0}
            />
          </div>
        </div>
      </form>
      <Result showModal={showModal} {...props} />
    </div>
  );
};

export default Form;
