import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsAuth, Login } from '../../types';
import logo from '../../../image/logo.jpg';
import userLogo from '../../../image/user2.png';

import style from '../../global.module.scss';
import styleHeader from './Header.module.scss';

interface IsAuthProps {
  isAuth: IsAuth;
  loginAuth: Login;
  onIsAuth: (param: boolean) => void;
}

export const Header: FC<IsAuthProps> = ({isAuth, loginAuth, onIsAuth}) => {
  const [visible, setVisible] = useState(false);
  const [innerLogin, setInnerLogin] = useState(null);
  const navigate = useNavigate();

  const loginRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if(isAuth) {
      setInnerLogin(
        loginRef.current.insertAdjacentHTML(
          'afterbegin', `<img src=${userLogo}/> <span>${loginAuth}</span>`
        )
      )
    }
    return
  }, [isAuth]);
  
  const handleClickSignIn = () => {
    if (!isAuth) {
      navigate('/signin')
    }
    return
  };
  const handleClickProfile = () => {
    navigate('/profile')
  } 

  return(
    <>
      <div className={styleHeader.header}>
        <div className={`${style.container} ${styleHeader.display}`}>
          <div className={styleHeader.logo}>
            <img src={logo} alt="Logo"></img>
            <p className={styleHeader.text}>Магазин</p>
          </div>
          <div>
            <div
              ref={loginRef}
              className={styleHeader.login}
              style={{cursor: 'pointer'}}
              onMouseEnter={() => isAuth ? setVisible(true) : null}
              onMouseLeave={() => setVisible(false)}
              onClick={handleClickSignIn}
            >{isAuth ? innerLogin : 'Вход'}
            </div>
            {visible &&
              <div 
                className={styleHeader.login_menu}
                onMouseEnter={() => isAuth ? setVisible(true) : null}
                onMouseLeave={() => setVisible(false)}
              >
                <div 
                  style={{cursor: 'pointer'}}
                  onClick={handleClickProfile}
                >Личный кабинет
                </div>
                <div 
                  style={{cursor: 'pointer'}}
                  onClick={() => (onIsAuth(false), setVisible(false))}
                >Выйти
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};