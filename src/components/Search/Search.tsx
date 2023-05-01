import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import close from '../../../image/close.svg'
import { items } from '../../constants';
import style from '../../global.module.scss';
import styleSearch from './Search.module.scss';
import { Box, Divider, List, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredArr, selectOpenSearchList } from 'src/store/search/selectors';
import { addFilteredArr, openSearchList } from 'src/store/search/slice';
import { CustomBreadcrumbs } from './breadcrumbs/breadcrumbs';

export const Search: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const filteredArr = useSelector(selectFilteredArr);
  const openFiltered = useSelector(selectOpenSearchList);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let locationHash = useLocation();
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
    setInputValue('');
  }, [locationHash]);

  const handleClickClose = () => {
    setInputValue('');
  };

  const handleClickGame = (gameId: number) => {
    navigate(`/wholelist/${gameId}`);
    setInputValue('');
  };
  
  return(
    <div className={style.container}>
      <div className={styleSearch.nav}>
        <form className={styleSearch.nav_search}>
          <div>
            <input
              id="search"
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
        <CustomBreadcrumbs/>
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