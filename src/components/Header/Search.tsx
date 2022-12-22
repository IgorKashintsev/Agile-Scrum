import { NavLink } from 'react-router-dom';
import style from '../../global.module.scss';

import styleSearch from './Header.module.scss';

export const Search = () => {
  return(
    <>
      <div className={style.container}>
        <div className={styleSearch.nav}>
          <input type="text"></input>
          <NavLink 
            className={({ isActive }) =>
              isActive ? styleSearch.nav_active : styleSearch.nav_noactive
            }
            to="/"
          >Главное
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styleSearch.nav_active : styleSearch.nav_noactive
            }
            to="/wholelist"
          >Все игры
          </NavLink>
        </div>
      </div>
    </>
  );
};