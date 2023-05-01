import { Breadcrumbs, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './breadcrumbs.module.scss';
import { items } from 'src/constants';

export const CustomBreadcrumbs: FC = () => {
  const locationHash = useLocation();
  const pathnames = locationHash.pathname.split('/').filter(x => x);

  const renderPath = (item: string) => {
    const regexp = new RegExp(/^[0-9]+$/);
    
    if(regexp.test(item)) {
      return items.get(Number(item))?.name;
    }

    switch(item) {
      case 'wholelist': return 'Все игры';
      case 'signin': return 'Вход в личный кабинет';
      case 'signup': return 'Регистрация';
      case 'profile': return 'Личный кабинет';
      case 'changepass': return 'Изменение пароля';
      case 'basket': return 'Корзина';
      case 'favorites': return 'Избранное';
    }

  }

  return (
    <Stack spacing={2} className={style.navlink}>
      <Breadcrumbs
        separator={<NavigateNextIcon sx={{color: "#d6d6d6"}}  fontSize="small" />}
        aria-label="breadcrumb"
        expandText="Show path"
      >
        <NavLink
          className={`${style.navlink__main} ${locationHash.pathname === '/' ? style.navlink__main__noActive : ''}`}
          to="/"
        >Главная
        </NavLink>
        {pathnames.map((item, index) => (
          <NavLink
            className={`${style.navlink__next} ${index === pathnames.length - 1 ? style.navlink__next__noActive : ''}`}
            key={index}
            to={`/${pathnames.slice(0, index + 1).join('/')}`}
          >{renderPath(item)}
          </NavLink>
        ))}
      </Breadcrumbs>
    </Stack>
  );
}