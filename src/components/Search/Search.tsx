import { FC, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import close from '../../../image/close.svg'
import { items } from '../../constants';
import style from '../../global.module.scss';
import styleSearch from './Search.module.scss';
import { Box, Divider, List, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredArr, selectOpenSearchList } from 'src/store/search/selectors';
import { addFilteredArr, openSearchList } from 'src/store/search/slice';

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const filteredArr = useSelector(selectFilteredArr);
  const openFiltered = useSelector(selectOpenSearchList);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    if(inputValue.length > 1) {
      const regexp = new RegExp(inputValue, 'igm');
      dispatch(addFilteredArr([...items.values()].filter(item => regexp.test(item.name))));
      dispatch(openSearchList(true));
    } else {
      dispatch(addFilteredArr([]));
      dispatch(openSearchList(false));
    }
  }, [inputValue]);

  useEffect(() => {
    if(!openFiltered) {
      setInputValue('');
    }
  }, [openFiltered]);

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
      {openFiltered &&
        <div
          className={styleSearch.filteredList}
        >
          <Box
            sx={{
              width: '100%',
              '& .MuiListItemText-primary': {
                color: '#d6d6d6',
                fontSize: '14px',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '11px',
                },
              },
              '& .MuiListItemText-secondary': {
                color: '#a8a8a8',
                fontSize: '13px',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '10px',
                },
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
              {filteredArr.map((item) => (
                <div key={item.id}>
                  <ListItemButton
                    onClick={() => handleClickGame(item.id)}
                  >
                    <div>
                      <img src={item.images[0]}></img>
                    </div>
                    <ListItemText
                      sx={{ 
                        marginLeft: '20px',
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '10px', 
                        },
                      }}
                      primary={item.name}
                      secondary={`${item.price.toFixed(2)} ₽`}
                    />
                  </ListItemButton>
                  <Divider/>
                </div>
              ))}
            </List>
          </Box>
        </div>
      }
    </div>
  );
};