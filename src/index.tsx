import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './App';
import { Footer } from './components/Footer';
import { Header, Search } from './components/Header';

import style from './global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className={style.app}>
    {/* basename="/Agile-Scrum" */}
    <BrowserRouter basename="/Agile-Scrum">
      <Header/>
      <Search/>
      <App />
      <Footer/>
    </BrowserRouter>
  </div>
);
