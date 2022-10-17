import React, { useState } from "react";
import First from "../assets/images/chooseUs/1.svg";
import Second from "../assets/images/chooseUs/2.svg";
import Third from "../assets/images/chooseUs/3.svg";
import Fouth from "../assets/images/chooseUs/4.svg";

const icons = [
  {
    id: 0,
    icon: First,
    title: "Нет абонентской платы",
    classImg: "first",
    classText: "firstText",
  },
  {
    id: 1,
    icon: Second,
    title: "Умный дом в Вашем смартфоне",
    classImg: "second",
    classText: "secondText",
  },
  {
    id: 2,
    icon: Third,
    title: "Гарантия 3 года",
    classImg: "third",
    classText: "thirdText",
  },
  {
    id: 3,
    icon: Fouth,
    title: "Датчики движения и звука",
    classImg: "fouth",
    classText: "fouthText",
  },
];

const Choose = () => {
  const [chooseIcons, setChooseIcons] = useState(icons);

  return (
    <div className='choose'>
      <h3>Почему выбирают именно нас</h3>
      <p className='choose-par'>Качество, надежность и безопасность - наши главные приоритеты.</p>
      <div className='icons'>
        {chooseIcons.map((icon) => (
          <div className='col' key={icon.id}>
            <img className={`${icon.classImg}`} src={icon.icon} alt='' />
            <p className={`icons-text ${icon.classText} `}>{icon.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
