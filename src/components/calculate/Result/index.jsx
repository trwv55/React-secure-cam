import React, { useState } from "react";
import styles from "./result.module.scss";

const Result = ({ showModal, checkedValue, numOfCamers, numOfDays }) => {
  const calculate = (arr1, arr2) => {
    const data = [];
    let sum = 0;
    data.push(arr1);
    data.push(arr2);
    sum = data.reduce((sum, i) => (sum += i.count * i.price), 0);
    if (!checkedValue) {
      return sum;
    } else {
      return (sum += checkedValue);
    }
  };

  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <p>Итого стоимость*</p>
        <h4 className={styles.price}>{calculate(numOfCamers, numOfDays)} ₽</h4>
      </div>

      <div className={styles.row__wrapper}>
        <div className={styles.row}>
          <span className={styles.title}>Камер</span>
          <span className={styles.number}>5 камер</span>
        </div>
        <div className={styles.row}>
          <span className={styles.title}>Время хранения</span>
          <span className={styles.number}>до 15 дней</span>
        </div>
      </div>

      <button onClick={() => showModal()} className={styles.result__btn}>
        Оставить заявку
      </button>
      <p className={styles.footnote}>
        *Расчет приблизительный и не является публичным договором оферты
      </p>
    </div>
  );
};

export default Result;
