import { CategoryList } from './CategoryList/CategoryList';
import { MainSlide } from './MainSlide/MainSlide';
import { FC, useEffect } from 'react';
import { items } from '../../constants';
import style from '../../global.module.scss';
import { useDispatch } from 'react-redux';
import { addRandomIdItems } from 'src/store/main/slice';

export const Main: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0,0);
    let randomIsArr: number[] = [];
    while (randomIsArr.length < 7) {
      const randomNumber = Math.ceil(Math.random() * (items.size - 1));
      let found = false;
      for (let i = 0; i < randomIsArr.length; i++) {
        if (randomIsArr[i] === randomNumber) {
          found = true;
          break;
        }
      }
      if (!found) {
        randomIsArr[randomIsArr.length] = randomNumber;
      }
    };
    dispatch(addRandomIdItems(randomIsArr))
  }, []);
  
  return (
    <>
      <div className={style.container}>
        <MainSlide />
        <CategoryList />
      </div>
    </>
  );
};