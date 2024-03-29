import { FC, useEffect, useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { Box, Divider, List, ListItemButton, ListItemText, useTheme } from '@mui/material';
import { ListDescription } from './ListDescription/ListDescription';
import { items } from '../../../constants';
import styleList from './CategoryList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectRandomIdItems } from 'src/store/main/selectors';
import { onCategoryListIndex } from 'src/store/main/slice';

export const CategoryList: FC = () => {
  const randomIdItemsArr = useSelector(selectRandomIdItems);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setSelectedIndex(randomIdItemsArr[0]);
    dispatch(onCategoryListIndex(randomIdItemsArr[0]));
  }, [randomIdItemsArr])
  
  const handleListItemEnter = (index: number,) => {
    setSelectedIndex(index);
    dispatch(onCategoryListIndex(index));
  };

  const HandleClick = (itemList: number) => {
    navigate(`/wholelist/${items.get(itemList)?.id}`)
  };

  return(
    <>
      
      <div className={styleList.header_list}>Популярное</div>
      <div className={styleList.list}>
        <Box
          sx={{
            width: '100%',
            color: '#d6d6d6',
            bgcolor: '#4b4b4b',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            '& .MuiListItemText-primary': {
              [theme.breakpoints.down('sm')]: {
                fontSize: '11px',
              },
            },
            '& .MuiListItemText-secondary': {
              color: '#a8a8a8',
              fontSize: '13px',
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            },
          }}
        >
          <List
            sx={{
              '&& .Mui-selected, && .Mui-selected:hover': {
                color: 'rgba(0, 0, 0, 0.87)',
                bgcolor: '#d6d6d6',
                '& .MuiListItemText-secondary': {
                  color: 'rgba(31, 31, 31, 0.87)',
                },
              }
            }}
            component="nav"
            aria-label="secondary mailbox folder"
          >
            {randomIdItemsArr.map((itemList, idx) => (
              <div key={idx}>
                <ListItemButton
                  selected={selectedIndex === itemList}
                  onMouseEnter ={() => handleListItemEnter(itemList)}
                  onClick={() => HandleClick(itemList)}
                >
                  <div>
                    <img 
                      src={(items.get(itemList))?.images[0]}
                      className={styleList.list_img}
                    ></img>
                  </div>
                  <div className={styleList.list_text}>
                    <ListItemText 
                      sx={{ 
                        marginLeft: '20px', 
                        maxWidth: '225px', 
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '10px', 
                        },
                      }}
                      primary={(items.get(itemList))?.name} 
                      secondary={(items.get(itemList))?.genre.join(', ')}
                    />
                  </div>
                  <ListItemText 
                    sx={{ textAlign: 'right'}}
                    primary={`${(items.get(itemList))?.price.toFixed(2)} ₽`}
                  />
                </ListItemButton>
                <Divider/>
              </div>
            ))}
          </List>
        </Box>
        <ListDescription />
      </div>
    </>
  );
};