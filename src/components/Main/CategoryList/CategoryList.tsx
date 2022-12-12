import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ListDescription } from './ListDescription/ListDescription';
import { items } from '../../../constants';

import styleList from './CategoryList.module.scss';
import { IdItems } from '../../../types';

interface CategoryListProps {
  idItemsList: IdItems;
};

export const CategoryList: FC<CategoryListProps> = ({idItemsList}) => {
  const [selectedIndex, setSelectedIndex] = useState(idItemsList[0]);

  const handleListItemEnter = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
    setSelectedIndex(index);
  };

  const imgList = (idItems: number) => {
    return (items.get(idItems))!.images[0]
  };

  const nameList = (idItems: number) => {
    return (items.get(idItems))!.name
  };

  const genreList = (idItems: number) => {
    return (items.get(idItems))!.genre.join(', ')
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
          <div className={styleList.img}>
            <List
              sx={{
                '&& .Mui-selected, && .Mui-selected:hover': {
                  color: 'rgba(0, 0, 0, 0.87)',
                  bgcolor: '#fff',
                  '& .MuiListItemText-secondary': {
                    color: 'rgba(31, 31, 31, 0.87)',
                  },
                }
              }}
              component="nav"
              aria-label="secondary mailbox folder"
            >
              <ListItemButton
                selected={selectedIndex === idItemsList[0]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[0])}
              >
                <img src={imgList(idItemsList[0])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[0])} 
                  secondary={genreList(idItemsList[0])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[1]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[1])}
              >
                <img src={imgList(idItemsList[1])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[1])} 
                  secondary={genreList(idItemsList[1])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[2]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[2])}
              >
                <img src={imgList(idItemsList[2])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[2])} 
                  secondary={genreList(idItemsList[2])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[3]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[3])}
              >
                <img src={imgList(idItemsList[3])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[3])} 
                  secondary={genreList(idItemsList[3])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[4]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[4])}
              >
                <img src={imgList(idItemsList[4])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[4])} 
                  secondary={genreList(idItemsList[4])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[5]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[5])}
              >
                <img src={imgList(idItemsList[5])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[5])} 
                  secondary={genreList(idItemsList[5])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === idItemsList[6]}
                onMouseEnter ={(event) => handleListItemEnter(event, idItemsList[6])}
              >
                <img src={imgList(idItemsList[6])}></img>
                <ListItemText 
                  sx={{ marginLeft: '20px'}}
                  primary={nameList(idItemsList[6])} 
                  secondary={genreList(idItemsList[6])}
                />
                <ListItemText 
                  sx={{ textAlign: 'right'}}
                  primary="Бесплатно"
                />
              </ListItemButton>
            </List>
          </div>
        </Box>
        <ListDescription selectedIndex={selectedIndex}/>
      </div>
    </>
  );
};