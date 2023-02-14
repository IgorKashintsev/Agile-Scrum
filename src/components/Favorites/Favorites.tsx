import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemText, 
  Rating, 
  useTheme,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { items } from "../../constants";
import styleFavorites from './Favorites.module.scss';
import style from '../../global.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { addBasket, deleteFavorites } from "src/store/users/actions";
import { selectUsers } from "src/store/users/selectors";
import { selectIsAuth, selectLoginAuth } from "src/store/auth/selectors";
import { selectAverageRating } from "src/store/rating/selectors";

export const Favorites: FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const users = useSelector(selectUsers);
  const isAuth = useSelector(selectIsAuth);
  const loginAuth = useSelector(selectLoginAuth);
  const ratingValue = useSelector(selectAverageRating);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  const handleClickGame = (gameId: number) => {
    navigate(`/${gameId.toString()}`)
  };

  const handleClickDelete = (gameId: number) => {
    const favoritesArr = users.get(loginAuth)?.favorites;
    const favoriteIdx = users.get(loginAuth)?.favorites?.indexOf(gameId);
    if(favoriteIdx !== -1 && favoriteIdx !== undefined) {
      favoritesArr?.splice(favoriteIdx, 1);
      dispatch(deleteFavorites(loginAuth, favoritesArr!));
    }
  };

  const handleClickBasket = (gameId: number) => {
    const basketItemIdx = users.get(loginAuth)?.basket?.indexOf(gameId);
    if(basketItemIdx === -1) {
      dispatch(addBasket(loginAuth, gameId));
    }
  };

  return(
    <div className={`${style.container} ${styleFavorites.favorites}`}>
      <div className={styleFavorites.favorites_header}>ВАШЕ ИЗБРАННОЕ</div>
      {users.get(loginAuth)?.favorites === undefined ||
        users.get(loginAuth)!.favorites!.length < 1 ?
        <p className={styleFavorites.favorites_empty}>Список избранного пуст</p> :
        <Box
          className={styleFavorites.favorites_list}
          sx={{
            width: '100%',
            '& .MuiListItemButton-root': {
              cursor: "default",
            },
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
              <div key={item}>
                <ListItemButton>
                  <div>
                    <img 
                      src={(items.get(item))?.images[0]}
                      onClick={() => handleClickGame(item)}
                    ></img>
                  </div>
                  <div className={styleFavorites.favorites_name}>
                    <ListItemText
                      sx={{ 
                        marginLeft: '20px',
                        [theme.breakpoints.down('sm')]: {
                          marginLeft: '10px', 
                        },
                      }}
                      primary={(items.get(item))?.name} 
                      secondary={(items.get(item))?.genre.join(', ')}
                    />
                  </div>
                  <ListItemText
                    sx={{ 
                      textAlign: 'right', 
                      mr: '50px',
                      [theme.breakpoints.down('md')]: {
                        display: 'none',
                      },
                    }}
                    secondary={(items.get(item))?.date.toLocaleDateString()}
                  />
                  <Rating
                    name="text-feedback"
                    value={ratingValue.find(el => el.id === item)?.rating}
                    readOnly
                    precision={0.1}
                    sx={{ 
                      maxWidth: '100px', 
                      fontSize: '15px',
                      [theme.breakpoints.down('md')]: {
                        display: 'none',
                      },
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  <div className={styleFavorites.favorites_price}>
                    <Button 
                      type="button"
                      sx={{
                        width: "90px",
                        height: "25px",
                        fontSize: "11px",
                        color: "#d6d6d6",
                        float: 'right',
                        top: "-5px",
                        backgroundColor: "#3b3b3b",
                        border: "1px solid #757575",
                        "&:hover":{
                          color: "rgba(0, 0, 0, 0.87)",
                          backgroundColor: "#d6d6d6",
                        },
                        [theme.breakpoints.down('sm')]: {
                          width: "64px",
                          height: "18px",
                          fontSize: "7px",
                          top: "-5px",
                        },
                      }}
                      onClick={() => handleClickDelete(item)}
                      >удалить
                    </Button>
                    <ListItemText
                      sx={{ 
                        textAlign: "right",
                        paddingTop: "25px",
                        [theme.breakpoints.down('sm')]: {
                          paddingTop: "0px",
                          height: "26px",
                        },
                      }}
                      primary={`${(items.get(item))?.price.toFixed(2)} ₽`}
                    />
                    <Button 
                      type="button"
                      sx={{
                        width: "90px",
                        height: "25px",
                        fontSize: "11px",
                        color: "#d6d6d6",
                        float: 'right',
                        bottom: "-5px",
                        backgroundColor: "#3b3b3b",
                        border: "1px solid #757575",
                        "&:hover":{
                          color: "rgba(0, 0, 0, 0.87)",
                          backgroundColor: "#d6d6d6",
                        },
                        [theme.breakpoints.down('sm')]: {
                          width: "64px",
                          height: "18px",
                          fontSize: "7px",
                          top: "5px",
                        },
                      }}
                      onClick={() => handleClickBasket(item)}
                      >{users.get(loginAuth)?.basket?.indexOf(item) !== -1 ?
                        'В корзине' : 
                        'В корзину'
                      }
                    </Button>
                  </div>
                </ListItemButton>
                <Divider/>
              </div>
            ))}
          </List>
        </Box>
      }
    </div>
  );
};