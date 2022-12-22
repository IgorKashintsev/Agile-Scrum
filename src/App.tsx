import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Wholelist } from './components/Wholelist/Wholelist';

import style from './global.module.scss';

export const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="wholelist" element={<Wholelist/>}/>
      <Route path="*" element={<h1 className={style.page404}>404 Page</h1>}/>
    </Routes>
  );
};