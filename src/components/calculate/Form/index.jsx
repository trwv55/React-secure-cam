import React from "react";
import styles from "./form.module.scss";
import Result from "../Result";

const Form = () => {
  return (
    <div className={styles.form__wrapper}>
      <form>
        <div className={styles.form__group}>
          <label className={styles.form__label}>Количество камер</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='4'
            />
          </div>
          <span>1 камера</span>
        </div>
        <div className={styles.form__group}>
          <label className={styles.form__label}>Время хранения</label>
          <div className={styles.wrapper}>
            <input
              type='number'
              className={(styles.form__control, styles.form__input)}
              id='exampleInputPassword1'
              placeholder='15'
            />
          </div>
          <span>до 10 дней</span>
        </div>
      </form>
      <Result />
    </div>
  );
};

export default Form;
