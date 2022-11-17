import style from '../../global.module.scss';

export const Search = () => {
  return(
    <>
      <div className={style.container}>
        <input type="text"></input>
        <span>Главное</span>
        <span>Все игры</span>
        <span>Избранное</span>
      </div>
    </>
  );
};