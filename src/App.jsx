import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Search } from './components/Header/Search';
import { Main } from './components/Main/Main';

import style from './global.module.scss'

export const App = () => {
  return (
    <>
      <div className={style.app}>
        <Header />
        <br></br>
        <Search />
        <br></br>
        <Main />
        <Footer />
      </div>
    </>
  );
}