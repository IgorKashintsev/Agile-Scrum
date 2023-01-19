import { FC, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import close from '../../../image/close.svg'
import { items } from '../../constants';
import { Items } from '../../types';

import style from '../../global.module.scss';
import styleSearch from './Search.module.scss';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';

interface SearchProps {
  filteredArr: Items[];
  setFilteredArr: (param: Items[]) => void;
  openedFiltered: boolean;
  setOpenedFiltered: (param: boolean) => void;
}

export const Search: FC<SearchProps> = (
    {
      filteredArr, 
      setFilteredArr, 
      openedFiltered, 
      setOpenedFiltered,
    }
  ) => {
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();
  const filteredList = useRef<HTMLDivElement | any>(null);
  const inputRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    if(inputValue.length > 1) {
      const regexp = new RegExp(inputValue, 'igm');
      setFilteredArr([...items.values()].filter(item => regexp.test(item.name)));
      setOpenedFiltered(true);
    } else {
      setFilteredArr([]);
      // setOpenedFiltered(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if(!openedFiltered) {
      setInputValue('');
    }
  }, [openedFiltered]);

  const handleClickClose = () => {
    setInputValue('');
  };

  const handleClickGame = (gameId: number) => {
    navigate(`/${gameId}`);
    setInputValue('');
  };
  
  return(
    <div className={style.container}>
      <div className={styleSearch.nav}>
        <form className={styleSearch.nav_search}>
          <div>
            <input
              ref={inputRef}
              value={inputValue}
              type="text" 
              placeholder="поиск" 
              autoComplete="off"
              onChange={(ev) => setInputValue(ev.target.value)}
            />
            <img 
              src={close} 
              className={styleSearch.nav_search_close}
              onClick={handleClickClose}
            />
          </div>
        </form>
        <div className={styleSearch.nav_link}>
          <NavLink 
            className={({ isActive }) =>
              isActive ? styleSearch.nav_active : styleSearch.nav_noactive
            }
            to="/"
          >Главное
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styleSearch.nav_active : styleSearch.nav_noactive
            }
            to="/wholelist"
          >Все игры
          </NavLink>
        </div>
      </div>
      {filteredArr.length > 0 &&
        <div
          ref={filteredList}
          className={styleSearch.filteredList}
        >
          <Box
            sx={{
              width: '100%',
              '& .MuiListItemText-primary': {
                color: '#d6d6d6',
                fontSize: '14px',
              },
              '& .MuiListItemText-secondary': {
                color: '#a8a8a8',
                fontSize: '13px',
              },
              '& .MuiListItemButton-root:hover': {
                backgroundColor: '#313131',
              }
            }}
          >
            <List
              component="nav"
              aria-label="secondary mailbox folder"
            >
              {filteredArr.map((item, idx) => (
                <ListItemButton
                  key={idx}
                  onClick={() => handleClickGame(item.id)}
                >
                  <div>
                    <img src={item.images[0]}></img>
                  </div>
                  <ListItemText
                    sx={{ marginLeft: '20px', }}
                    primary={item.name}
                    secondary={`${item.price.toFixed(2)} ₽`}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </div>
      }
    </div>
  );
};