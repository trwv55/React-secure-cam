import React, { useState } from "react";
import styles from "./form.module.scss";
import Result from "../Result";

const Form = ({ showModal, ...props }) => {
  const [numOfCamers, setNumOfCamers] = useState({
    title: "Количество камер",
    name: "numberOfCamers",
    count: 0,
    price: 4590,
  });
  const [numOfDays, setNumOfDays] = useState({
    title: "Время хранения",
    name: "numberOfDays",
    count: 0,
    price: 450,
  });

  const changeNumOfCamers = (val, name) => {
    setNumOfCamers(numOfCamers.name === name ? { ...numOfCamers, count: val } : numOfCamers);
  };

  const changeNumOfDayStorage = (val, name) => {
    setNumOfDays(numOfDays.name === name ? { ...numOfDays, count: val } : numOfDays);
  };

  return (
    <div className={styles.form__wrapper}>
      <form>
        <div className={styles.form__group}>
          <label className={styles.form__label}>{numOfCamers.title}</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              name='numberOfCamers'
              aria-describedby='emailHelp'
              value={numOfCamers.count}
              onChange={(event) => changeNumOfCamers(event.target.value, event.target.name)}
            />
          </div>
        </div>
        <div className={styles.form__group}>
          <label className={styles.form__label}>{numOfDays.title}</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              name='numberOfDays'
              value={numOfDays.count}
              onChange={(event) => changeNumOfDayStorage(event.target.value, event.target.name)}
            />
          </div>
          <span>Дней</span>
        </div>
      </form>
      <Result numOfCamers={numOfCamers} numOfDays={numOfDays} showModal={showModal} {...props} />
    </div>
  );
};

export default Form;
