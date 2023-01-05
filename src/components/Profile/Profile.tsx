import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsAuth, Login } from '../../types';
import userLogo from '../../../image/user2.png';

import style from '../../global.module.scss';
import styleProfile from './Profile.module.scss';

interface IsAuthProps {
  isAuth: IsAuth;
  loginAuth: Login;
  onIsAuth: (param: boolean) => void;
}

export const Profile: FC<IsAuthProps> = ({isAuth, loginAuth, onIsAuth}) => {
  const [activeClassPass, setActiveClassPass] = useState('');
  const [activeClassLogout, setActiveClassLogout] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
    return
  }, [isAuth]);
  
  const handleClickLogout = () => {
    onIsAuth(false);
  };

  const handleClickChangPass = () => {
    navigate('/changepass');
  }

  return(
    <>
      <div className={`${style.container} ${styleProfile.profile}`}>
        <div className={styleProfile.profile_name}>
          <img src={userLogo}></img>
          <h1>{loginAuth}</h1>
        </div>
        <p
          className={`${styleProfile.p_pass} ${activeClassPass}`}
          style={{cursor: 'pointer'}}
          onClick={handleClickChangPass}
          onMouseEnter={() => setActiveClassPass(styleProfile.active)}
          onMouseLeave={() => setActiveClassPass('')}
        >Изменить пароль
        </p>
        <p
          className={`${styleProfile.p_logout} ${activeClassLogout}`}
          style={{cursor: 'pointer'}} 
          onClick={handleClickLogout}
          onMouseEnter={() => setActiveClassLogout(styleProfile.active)}
          onMouseLeave={() => setActiveClassLogout('')}
        >Выйти
        </p>
      </div>
    </>  
  )
}