import { FC, useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ListDescription } from './ListDescription/ListDescription';
import { items } from '../../../constants';

import styleList from './CategoryList.module.scss';
import { IdItems } from '../../../types';

interface CategoryListProps {
  idItemsList: IdItems;
};

export const CategoryList: FC<CategoryListProps> = ({idItemsList}) => {
  const [selectedIndex, setSelectedIndex] = useState(idItemsList[0]);
  const navigate = useNavigate();
  
  const handleListItemEnter = (index: number,) => {
    setSelectedIndex(index);
  };

  const HandleClick = (itemList: number) => {
    for (let [key] of items.entries()) {
      if (key === itemList) {
        navigate(`/${key.toString()}`)
      }
    }
  };

  return(
    <>
      <div className={styleList.header_list}>Популярное</div>
      <div className={styleList.list_display}>
        <Box
          sx={{
            width: '100%',
            color: '#d6d6d6',
            bgcolor: '#4b4b4b',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            '& .MuiListItemText-secondary': {
              color: '#a8a8a8',
              fontSize: '13px',
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
            {idItemsList.map((itemList, id) => (
              <ListItemButton
                className={styleList.img}
                key={id}
                selected={selectedIndex === itemList}
                onMouseEnter ={() => handleListItemEnter(itemList)}
                onClick={() => HandleClick(itemList)}
              >
                <div>
                  <img src={(items.get(itemList))?.images[0]}></img>
                </div>
                <ListItemText 
                  sx={{ marginLeft: '20px', maxWidth: '295px'}}
                  primary={(items.get(itemList))?.name} 
                  secondary={(items.get(itemList))?.genre.join(', ')}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <ListDescription selectedIndex={selectedIndex}/>
      </div>
    </>
  );
};