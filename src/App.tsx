import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChangePass } from './components/ChangePass/ChangePass';
import { Footer } from './components/Footer/Footer';
import { GamePage } from './components/GamePage/GamePage';
import { Header } from './components/Header/Header';
import { Search } from './components/Header/Search';
import { Main } from './components/Main/Main';
import { Profile } from './components/Profile/Profile';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Wholelist } from './components/Wholelist/Wholelist';

import style from './global.module.scss';
import { IsAuth, Login, Password } from './types';

export const App = () => {
  const [loginAuth, setName] = useState<Login>('Igor');
  const [passwordAuth, setPasswordAuth] = useState<Password>('1234');
  const [isAuth, setIsAuth] = useState<IsAuth>(false);
  
  return (
    <>
      <Header isAuth={isAuth} loginAuth={loginAuth} onIsAuth={setIsAuth}/>
      <Search/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="wholelist" element={<Wholelist/>}/>
        <Route path=":gameId" element={<GamePage/>}/>
        <Route 
          path="signin" 
          element={
            <SignIn 
              loginAuth={loginAuth} 
              passwordAuth={passwordAuth} 
              onIsAuth={setIsAuth}
            />
          }
        />
        <Route 
          path="signup" 
          element={
            <SignUp 
              loginAuth={loginAuth} 
              onIsAuth={setIsAuth}
              setName={setName}
              setPasswordAuth={setPasswordAuth}
            />
          }
        />
        <Route 
          path="profile" 
          element={
            <Profile 
              isAuth={isAuth}
              loginAuth={loginAuth}
              onIsAuth={setIsAuth}
            />
          }
        />
        <Route 
          path="changepass" 
          element={
            <ChangePass
              isAuth={isAuth}
              passwordAuth={passwordAuth}
              setPasswordAuth={setPasswordAuth}
            />
          }
        />
        <Route path="*" element={<h1 className={style.page404}>404 Page</h1>}/>
      </Routes>
      <Footer/>
    </>
  );
};