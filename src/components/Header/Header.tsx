import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketArr, IsAuth, Login } from '../../types';
import logo from '../../../image/logo.jpg';
import userLogo from '../../../image/user.png';

import style from '../../global.module.scss';
import styleHeader from './Header.module.scss';

interface IsAuthProps {
  isAuth: IsAuth;
  loginAuth: Login;
  onIsAuth: (param: boolean) => void;
  basketArr: BasketArr;
  setBasketArr: (newItemBasket: BasketArr) => void;
}

export const Header: FC<IsAuthProps> = ({
    isAuth, 
    loginAuth, 
    onIsAuth, 
    basketArr,
    setBasketArr,
  }) => {
  const [visible, setVisible] = useState(false);
  const [innerLogin, setInnerLogin] = useState(null);

  const navigate = useNavigate();

  const loginRef = useRef<HTMLDivElement | any>(null);
  const storeRef = useRef<HTMLDivElement | any>(null);
  const basketRef = useRef<HTMLDivElement | any>(null);
  const profileRef = useRef<HTMLDivElement | any>(null);
  const logoutRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if(isAuth) {
      setInnerLogin(
        loginRef.current.insertAdjacentHTML(
          'afterbegin', `<img src="${userLogo}"/> <span>${loginAuth}</span> `
        )
      )
    } else {
      setBasketArr([]);
    }
  }, [isAuth]);

  const handleMouseEnter = () => {
    loginRef.current.classList.add(styleHeader.active)
    if(isAuth) {
      setVisible(true)
    }
  };

  const handleMouseLeave = () => {
    loginRef.current.classList.remove(styleHeader.active)
    setVisible(false);
  };
  
  const handleClickSignIn = () => {
    if (!isAuth) {
      navigate('/signin')
    }
    return
  };

  const handleClickBasket = () => {
    if (basketArr.length > 0) {
      navigate('/basket')
    }
    return
  };

  const handleClickLogout = () => {
    onIsAuth(false);
    setVisible(false);
  };

  console.log('Header');

  return(
    <>
      <div className={styleHeader.header}>
        <div className={`${style.container} ${styleHeader.display}`}>
          <div className={styleHeader.logo}>
            <img src={logo} alt="Logo"></img>
            <p
              ref={storeRef}
              style={{cursor: 'pointer'}}
              onMouseEnter={() => storeRef.current.classList.add(styleHeader.active)}
              onMouseLeave={() => storeRef.current.classList.remove(styleHeader.active)}
              onClick={() => navigate('/')}
            >Магазин
            </p>
            {basketArr.length > 0 &&
              <p
                ref={basketRef}
                style={{cursor: 'pointer'}}
                onMouseEnter={() => basketRef.current.classList.add(styleHeader.active)}
                onMouseLeave={() => basketRef.current.classList.remove(styleHeader.active)}
                onClick={handleClickBasket}
              >Корзина ({basketArr.length})
              </p>
            }
          </div>
          <div>
            <div
              ref={loginRef}
              className={styleHeader.login}
              style={{cursor: 'pointer'}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
                  ref={profileRef}
                  style={{cursor: 'pointer'}}
                  onClick={() => navigate('/profile')}
                  onMouseEnter={() => profileRef.current.classList.add(styleHeader.active)}
                  onMouseLeave={() => profileRef.current.classList.remove(styleHeader.active)}
                >Личный кабинет
                </div>
                <div 
                  ref={logoutRef}
                  style={{cursor: 'pointer'}}
                  onClick={handleClickLogout}
                  onMouseEnter={() => logoutRef.current.classList.add(styleHeader.active)}
                  onMouseLeave={() => logoutRef.current.classList.remove(styleHeader.active)}
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