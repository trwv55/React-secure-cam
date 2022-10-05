import React from "react";
import styles from "./result.module.scss";

const Result = () => {
  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <p>Итого стоимость*</p>
        <h4 className={styles.price}>15 2706 ₽</h4>
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

      <button className={styles.result__btn}>Оставить заявку</button>
      <p className={styles.footnote}>
        *Расчет приблизительный и не является публичным договором оферты
      </p>
    </div>
  );
};

export default Result;
