import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './App';

import style from './global.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className={style.app}>
    <BrowserRouter basename="/Agile-Scrum">
      <App />
    </BrowserRouter>
  </div>
);
