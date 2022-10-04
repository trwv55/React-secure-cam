import React from "react";
import styles from "./form.module.scss";

const Form = () => {
  return (
    <form>
      <div class='form-group'>
        <label class='form-label'>Количество камер</label>
        <div class='wrapper'>
          <input
            type='number'
            class='form-control form-input'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='4'
          />
        </div>
        <span>1 камера</span>
      </div>
      <div class='form-group'>
        <label class='form-label'>Время хранения</label>
        <div class='wrapper'>
          <input
            type='number'
            class='form-control form-input'
            id='exampleInputPassword1'
            placeholder='15'
          />
        </div>
        <span>до 10 дней</span>
      </div>
    </form>
  );
};

export default Form;
