import style from '../../global.module.scss';

import styleSearch from './Header.module.scss';

export const Search = () => {
  return(
    <>
      <div className={style.container}>
        <div className={styleSearch.nav}>
          <input type="text"></input>
          <span>Главное</span>
          <span>Все игры</span>
          <span>Избранное</span>
        </div>
      </div>
    </>
  );
};