import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import { Favorites } from './components/Favorites';
import { Items } from './types';
import { store } from './store';
import style from './global.module.scss';

export const App = () => {
  const [openedFiltered, setOpenedFiltered] = useState(false);
  const [filteredArr, setFilteredArr] = useState<Items[]>([]);

  const handleClick = () => {
    if(filteredArr.length > 0) {
    setFilteredArr([])
    setOpenedFiltered(false)
    }
  };

  return (
    <Provider store={store}>
      <div onClick={handleClick}>
        <Header />
        <Search 
          filteredArr={filteredArr} 
          setFilteredArr={setFilteredArr} 
          openedFiltered={openedFiltered} 
          setOpenedFiltered={setOpenedFiltered}/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="wholelist" element={<Wholelist />}/>
          <Route 
            path=":gameId" 
            element={<GamePage />}
          />
          <Route 
            path="signin" 
            element={<SignIn />}
          />
          <Route 
            path="signup" 
            element={<SignUp />}
          />
          <Route 
            path="profile" 
            element={<Profile />}
          />
          <Route 
            path="changepass" 
            element={<ChangePass/>}
          />
          <Route 
            path="basket" 
            element={<Basket />}
          />
          <Route
            path="favorites" 
            element={<Favorites />}
          />
          <Route path="*" element={<h1 className={style.page404}>404 Page</h1>}/>
        </Routes>
        <Footer/>
      </div>
    </Provider>
  );
};