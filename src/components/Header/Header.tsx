import logo from '../../../image/logo.jpg';

import style from '../../global.module.scss';
import styleHeader from './Header.module.scss';

export const Header = () => {
  return(
    <>
      <div className={styleHeader.header}>
        <div className={`${style.container} ${styleHeader.display}`}>
          <div>
            <img src={logo} alt="Logo"></img>
            <span className={styleHeader.text}>Магазин</span>
          </div>
          <div>
            <span className={styleHeader.text}>Вход</span>
          </div>
        </div>
      </div>
    </>
  );
};