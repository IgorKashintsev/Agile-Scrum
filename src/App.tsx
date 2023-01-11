import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Basket } from './components/Basket/Basket';
import { ChangePass } from './components/ChangePass/ChangePass';
import { Footer } from './components/Footer/Footer';
import { GamePage } from './components/GamePage/GamePage';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { Main } from './components/Main/Main';
import { Profile } from './components/Profile/Profile';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';
import { Wholelist } from './components/Wholelist/Wholelist';

import style from './global.module.scss';
import { IsAuth, Login, Password, BasketArr, ReviewObj, Items } from './types';

export const App = () => {
  const [loginAuth, setName] = useState<Login>('Igor');
  const [passwordAuth, setPasswordAuth] = useState<Password>('1234');
  const [isAuth, setIsAuth] = useState<IsAuth>(false);
  const [basketArr, setBasketArr] = useState<BasketArr>([]);
  const [reviewArr, setReviewArr] = useState<ReviewObj[]>([]);
  const [openedFiltered, setOpenedFiltered] = useState(false);
  const [filteredArr, setFilteredArr] = useState<Items[]>([]);

  const handleClick = () => {
    if(filteredArr.length > 0) {
    console.log(123);
    setFilteredArr([])
    setOpenedFiltered(false)
    }
  };

  const onAddReviewArr = (newReview: ReviewObj) => {
    setReviewArr([...reviewArr, newReview])
  }
  
  console.log('app');

  return (
    <div onClick={handleClick}>
      <Header 
        isAuth={isAuth} 
        loginAuth={loginAuth} 
        onIsAuth={setIsAuth}
        basketArr={basketArr}
        setBasketArr={setBasketArr}
      />
      <Search 
        filteredArr={filteredArr} 
        setFilteredArr={setFilteredArr} 
        openedFiltered={openedFiltered} 
        setOpenedFiltered={setOpenedFiltered}/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="wholelist" element={<Wholelist/>}/>
        <Route 
          path=":gameId" 
          element={
            <GamePage 
              isAuth={isAuth}
              basketArr={basketArr} 
              onAddBasketArr={setBasketArr}
              onAddReviewArr={onAddReviewArr}
              loginAuth={loginAuth}
              reviewArr={reviewArr}
            />
          }
        />
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
        <Route 
          path="basket" 
          element={
            <Basket 
              basketArr={basketArr} 
              onDelBasketItem={setBasketArr}
              isAuth={isAuth}
            />
          }
        />
        <Route path="*" element={<h1 className={style.page404}>404 Page</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
};