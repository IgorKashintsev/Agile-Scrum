import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogo from '../../../image/user2.png';
import style from '../../global.module.scss';
import styleProfile from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { onLoginAuth } from 'src/store/auth/slice';
import { selectIsAuth, selectLoginAuth } from 'src/store/auth/selectors';

export const Profile: FC = () => {
  const changePassRef = useRef<HTMLDivElement | any>(null);
  const logoutRef = useRef<HTMLDivElement | any>(null);

  const isAuth = useSelector(selectIsAuth);
  const loginAuth = useSelector(selectLoginAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
    return
  }, [isAuth]);

  return(
    <>
      <div className={`${style.container} ${styleProfile.profile}`}>
        <div className={styleProfile.profile_name}>
          <img src={userLogo}></img>
          <h1>{loginAuth}</h1>
        </div>
        <p
          ref={changePassRef}
          className={styleProfile.p_pass}
          style={{cursor: 'pointer'}}
          onClick={() => navigate('/changepass')}
          onMouseEnter={() => changePassRef.current.classList.add(styleProfile.active)}
          onMouseLeave={() => changePassRef.current.classList.remove(styleProfile.active)}
        >Изменить пароль
        </p>
        <p
          ref={logoutRef}
          className={styleProfile.p_logout}
          style={{cursor: 'pointer'}} 
          onClick={() => dispatch(onLoginAuth({loginAuth: '', isAuth: false}))}
          onMouseEnter={() => logoutRef.current.classList.add(styleProfile.active)}
          onMouseLeave={() => logoutRef.current.classList.remove(styleProfile.active)}
        >Выйти
        </p>
      </div>
    </>  
  )
}