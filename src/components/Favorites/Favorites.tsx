import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, List, ListItemButton, ListItemText, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { BasketArr, UsersMap } from "../../types";
import { items } from "../../constants";

import styleFavorites from './Favorites.module.scss';
import style from '../../global.module.scss';

interface FavoritesProps {
  users: UsersMap;
  loginAuth: string;
  isAuth: boolean;
  basketArr: BasketArr;
  onAddBasketArr: (newItemBasket: BasketArr) => void;
  onDeleteFavorite: (param: number[]) => void;
}

export const Favorites: FC<FavoritesProps> = (
    {
      users, 
      loginAuth, 
      isAuth, 
      basketArr,
      onAddBasketArr,
      onDeleteFavorite,
    }
  ) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  const handleClickDelete = (gameId: number) => {
    const favoriteIdx = users.get(loginAuth)?.favorites?.indexOf(gameId);
    if(favoriteIdx !== -1 && favoriteIdx !== undefined) {
      onDeleteFavorite(users.get(loginAuth)!.favorites!.splice(favoriteIdx, 1));
      setVisible(visible => !visible);
    }
  };

  const handleClickBasket = (gameId: number) => {
    const basketItemIdx = basketArr.findIndex(item => item === gameId);
    if(basketItemIdx === -1) {
      onAddBasketArr([...basketArr, (Array.from(items.keys())[gameId])])
    }
  };

  console.log('favorite');
  

  return(
    <div className={`${style.container} ${styleFavorites.favorites}`}>
      <div className={styleFavorites.favorites_header}>ВАШЕ ИЗБРАННОЕ</div>
      {users.get(loginAuth)?.favorites === undefined ||
        users.get(loginAuth)!.favorites!.length < 1 ?
        <p>Список избранного пуст</p> :
        <Box
          className={styleFavorites.favorites_list}
          sx={{
            width: '100%',
            '& .MuiListItemButton-root': {
              cursor: "default",
            },
            '& .MuiListItemText-secondary': {
              color: '#a8a8a8',
              fontSize: '13px',
            },
            '& .MuiListItemButton-root:hover': {
              backgroundColor: '#3b3b3b',
            }
          }}
        >
          <List
            component="nav"
            aria-label="secondary mailbox folder"
          >
            {users.get(loginAuth)?.favorites?.map((item) => (
              <ListItemButton
                key={item}
              >
                <div>
                  <img src={(items.get(item))?.images[0]}></img>
                </div>
                <ListItemText
                  sx={{ marginLeft: '20px', maxWidth: '330px' }}
                  primary={(items.get(item))?.name} 
                  secondary={(items.get(item))?.genre.join(', ')}
                />
                <ListItemText
                  sx={{ textAlign: 'right', mr: '50px'}}
                  secondary={(items.get(item))?.date.toLocaleDateString()}
                />
                <Rating
                  name="text-feedback"
                  value={(items.get(item))?.rating}
                  readOnly
                  precision={0.5}
                  sx={{ maxWidth: '100px', fontSize: '15px'}}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <div className={styleFavorites.favorites_price}>
                  <Button 
                    type="button"
                    sx={{
                      width: "90px",
                      height: "25px",
                      fontSize: "11px",
                      color: "#a8a8a8",
                      float: 'right',
                      top: "-5px",
                      backgroundColor: "#3b3b3b",
                      border: "1px solid #757575",
                      "&:hover":{
                        color: "rgba(0, 0, 0, 0.87)",
                        backgroundColor: "#d6d6d6",
                      },
                    }}
                    onClick={() => handleClickDelete(item)}
                    >удалить
                  </Button>
                  <ListItemText
                    sx={{ 
                      textAlign: "right",
                      paddingTop: "25px",
                    }}
                    primary={`${(items.get(item))?.price.toFixed(2)} ₽`}
                  />
                  <Button 
                    type="button"
                    sx={{
                      width: "90px",
                      height: "25px",
                      fontSize: "11px",
                      color: "#a8a8a8",
                      float: 'right',
                      bottom: "-5px",
                      backgroundColor: "#3b3b3b",
                      border: "1px solid #757575",
                      "&:hover":{
                        color: "rgba(0, 0, 0, 0.87)",
                        backgroundColor: "#d6d6d6",
                      },
                    }}
                    onClick={() => handleClickBasket(item)}
                    >{basketArr.indexOf(item) !== -1 ? 'В корзине' : 'В корзину'}
                  </Button>
                </div>
              </ListItemButton>
            ))}
          </List>
        </Box>
      }
    </div>
  );
};