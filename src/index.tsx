import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import {App} from './App';
import { Footer } from './components/Footer';
import { Header, Search } from './components/Header';

import style from './global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className={style.app}>
    <HashRouter>
      <Header/>
      <Search/>
      <App />
      <Footer/>
    </HashRouter>
  </div>
);
