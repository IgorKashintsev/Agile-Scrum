import style from '../../global.module.scss';
import { MainSlide } from './MainSlide/MainSlide';

export const Main = () => {

  return (
    <>
      <div className={style.container}>
        <MainSlide />
      </div>
    </>
  );
};