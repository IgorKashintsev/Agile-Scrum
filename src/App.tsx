import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import style from './global.module.scss';
import { addFilteredArr, openSearchList } from './store/search/slice';
import { useEffect } from 'react';
import { selectReviews } from './store/reviews/selectors';
import { items } from './constants';
import { updateRating } from './store/rating/slice';
import { onLoginMenu } from './store/auth/slice';

export const App = () => {
  const reviewArr = useSelector(selectReviews);
  const dispatch = useDispatch();

  const handleClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetEl = ev.target as HTMLElement;
    
    if(targetEl.id !== 'search') {
      dispatch(addFilteredArr([]));
      dispatch(openSearchList(false));
    }
    if(targetEl.dataset['id'] !== 'login') {
      dispatch(onLoginMenu(false));
    }
  };

  useEffect(() => {
    for(let i = 0; i < items.size; i++) {
      if(reviewArr.findIndex(item => item.id === i) !== -1) {
        let arrFiltered = reviewArr
          .filter(item => item.id === i)
          .map(item => item.rating);
        dispatch(updateRating(
          {
            id: i,
            rating: Number((((items.get(i))!.rating + 
            arrFiltered.reduce((sum, current) => sum! + 
            current!, 0)!) / (arrFiltered.length + 1)).toFixed(1)),
          }
        ));
      } else {
        dispatch(updateRating(
          {
            id: i,
            rating: (items.get(i))!.rating
          }
        ));
      }
    }
  }, [reviewArr]);

  return (
    <div onClick={(ev) => handleClick(ev)}>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="wholelist" >
          <Route index element={<Wholelist />}/>
          <Route path=":gameId" element={<GamePage />}/>
        </Route>
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="profile" >
          <Route index element={<Profile />}/>
          <Route path="changepass" element={<ChangePass/>}/>
        </Route>
        <Route path="basket" element={<Basket />}/>
        <Route path="favorites" element={<Favorites />}/>
        <Route path="*" element={<h1 className={style.page404}>404 Page</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
};