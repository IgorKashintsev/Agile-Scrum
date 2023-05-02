import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogo from '../../../image/user2.png';
import style from '../../global.module.scss';
import styleProfile from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { onLoginAuth } from 'src/store/auth/slice';
import { selectIsAuth, selectLoginAuth } from 'src/store/auth/selectors';

export const Profile: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const loginAuth = useSelector(selectLoginAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  return(
    <>
      <div className={`${style.container} ${styleProfile.profile}`}>
        <div className={styleProfile.profile_name}>
          <img src={userLogo}></img>
          <h1>{loginAuth}</h1>
        </div>
        <p
          className={styleProfile.p_pass}
          onClick={() => navigate('/profile/changepass')}
        >Изменить пароль
        </p>
        <p
          className={styleProfile.p_logout}
          onClick={() => dispatch(onLoginAuth({loginAuth: '', isAuth: false}))}
        >Выйти
        </p>
      </div>
    </>  
  )
}