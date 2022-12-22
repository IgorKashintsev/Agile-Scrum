import { IdItems } from '../../types';
import { CategoryList } from './CategoryList/CategoryList';
import { MainSlide } from './MainSlide/MainSlide';
import { useState } from 'react';

import style from '../../global.module.scss';

export const Main = () => {
  const [idItems] = useState<IdItems>([]);

  while (idItems.length < 7) {
    const randomNumber = Math.ceil(Math.random() * 15);
    let found = false;
    for (let i = 0; i < idItems.length; i++) {
      if (idItems[i] === randomNumber) {
        found = true;
        break;
      }
    }
    if (!found) {
      idItems[idItems.length] = randomNumber;
    }
  };
  
  return (
    <>
      <div className={style.container}>
        <MainSlide />
        <CategoryList idItemsList={idItems} />
      </div>
    </>
  );
};