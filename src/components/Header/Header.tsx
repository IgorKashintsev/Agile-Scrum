import { FC, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../image/logo.jpg';
import userLogo from '../../../image/user2.png';
import style from '../../global.module.scss';
import styleHeader from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { onLoginAuth, onLoginMenu } from 'src/store/auth/slice';
import { selectUsers } from 'src/store/users/selectors';
import { selectIsAuth, selectLoginAuth, selectLoginMenu } from 'src/store/auth/selectors';

export const Header: FC = () => {
  const users = useSelector(selectUsers);
  const isAuth = useSelector(selectIsAuth);
  const loginAuth = useSelector(selectLoginAuth);
  const loginMenuActive = useSelector(selectLoginMenu);
  let locationHash = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClickSignIn = () => {
    if (!isAuth) {
      navigate('/signin')
    } else {
      dispatch(onLoginMenu(!loginMenuActive));
    }
  };

  const handleClickLogout = () => {
    dispatch(onLoginAuth({loginAuth: '', isAuth: false}));
    dispatch(onLoginMenu(false));
  };

  useEffect(() => {
    dispatch(onLoginMenu(false));
  }, [locationHash]);

  return(
    <>
      <div className={styleHeader.header}>
        <div className={`${style.container} ${styleHeader.display}`}>
          <div className={styleHeader.logo}>
            <img src={logo} alt="Logo"></img>
            <NavLink
              className={styleHeader.logo__navlink}
              to="/"
            >Главная
            </NavLink>
            <NavLink
              className={styleHeader.logo__navlink}
              to="/wholelist"
            >Все игры
            </NavLink>
            <NavLink
              className={styleHeader.logo__navlink}
              to={isAuth ? '/favorites' : '/signin'}
            >Избранное
            </NavLink>
            {(isAuth && users.get(loginAuth)!.basket.length > 0) &&
              <NavLink
                className={styleHeader.logo__navlink}
                to='/basket'
              >Корзина ({users.get(loginAuth)?.basket.length})
              </NavLink>
            }
          </div>
          <div>
            <div
              className={styleHeader.login}
              onClick={handleClickSignIn}
            >{
              isAuth ? 
              <img data-id="login" className={styleHeader.login__img} src={userLogo}/> : 
              'Вход'
            }
            </div>
            {loginMenuActive &&
              <div 
                data-id="login"
                className={styleHeader.login__menu}
              >
                <div 
                  data-id="login"
                  className={styleHeader.login__menu__loginAuth}
                >{loginAuth}
                </div>
                <div 
                  className={styleHeader.login__menu__profile}
                  onClick={() => navigate('/profile')}
                >Личный кабинет
                </div>
                <div 
                  className={styleHeader.login__menu__logout}
                  onClick={handleClickLogout}
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