import { 
  Box, 
  Button, 
  List, 
  ListItemButton, 
  ListItemText, 
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { items } from "../../constants";
import style from '../../global.module.scss';
import styleBasket from './Basket.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../store/users/actions";
import { StoreState } from "../../store";

export const Basket: FC = () => {
  const [sumTotal, setSumTotal] = useState(0);

  const users = useSelector((state: StoreState) => state.users.users);
  const isAuth = useSelector((state: StoreState) => state.auth.isAuth);
  const loginAuth = useSelector((state: StoreState) => state.auth.loginAuth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const theme = useTheme();

  const handleClickDelete = (gameId: number) => {
    const basketArr = users.get(loginAuth)?.basket;
    const basketIdx = users.get(loginAuth)?.basket?.indexOf(gameId);
    if(basketIdx !== -1 && basketIdx !== undefined) {
      basketArr?.splice(basketIdx, 1);
      dispatch(deleteBasket(loginAuth, basketArr!));
    }
  };

  const handleClickGame = (gameId: number) => {
    navigate(`/${gameId.toString()}`)
  };

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
  }, [isAuth]);

  useEffect(() => {
    let sumPrice = 0;
    const basketArr = users.get(loginAuth)?.basket;
    if(basketArr !== undefined) {
      for(let item of basketArr) {
        setSumTotal(sumPrice += (items.get(item))!.price)
      }
      if(basketArr.length < 1) {
        setSumTotal(0)
      }
    }
  }, [users.get(loginAuth)?.basket.length]);

  return(
    <>
      <div className={`${style.container} ${styleBasket.list}`}>
        <div className={styleBasket.list_header}>ВАША КОРЗИНА</div>
        <div className={styleBasket.list_box}>
          <Box
            sx={{
              width: '100%',
              color: '#d6d6d6',
              bgcolor: '#4b4b4b',
              borderRadius: '4px',
              '& .MuiListItemButton-root': {
                cursor: "default",
              },
              '& .MuiListItemText-primary': {
                [theme.breakpoints.down('sm')]: {
                  fontSize: '11px',
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
              {users.get(loginAuth)?.basket.map((item) => (
                <ListItemButton
                  className={styleBasket.img}
                  key={item}
                >
                  <div>
                    <img
                      src={(items.get(item))?.images[0]}
                      onClick={() => handleClickGame(item)}
                    ></img>
                  </div>
                  <ListItemText
                    sx={{ 
                      marginLeft: '20px',
                      [theme.breakpoints.down('sm')]: {
                        marginLeft: '10px',
                        maxWidth: '110px',
                      },
                    }}
                    primary={(items.get(item))?.name} 
                  />
                  <div className={styleBasket.list_price}>
                    <ListItemText
                      sx={{ 
                        textAlign: "right",
                        maxWidth: '150px',
                      }}
                      primary={`${(items.get(item))?.price.toFixed(2)} ₽`}
                    />
                    <Button 
                    type="button"
                    sx={{
                      width: "90px",
                      height: "26px",
                      fontSize: "11px",
                      color: "#d6d6d6",
                      float: 'right',
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
                      },
                    }}
                    onClick={() => handleClickDelete(item)}
                    >удалить
                  </Button>
                  </div>
                </ListItemButton>
              ))}
            </List>
          </Box>
          <div className={styleBasket.list_order}>
            <h3>Все игры и приложения</h3>
            <hr className={styleBasket.hr}></hr>
            <div className={styleBasket.list_sumprice}>
              <p>ИТОГО:</p>
              <p>{sumTotal.toFixed(2)} &#8381;</p>
            </div>
            <hr className={styleBasket.hr}></hr>
            <Button 
              sx={{
                width: "100%",
                color: "#d6d6d6",
                fontWeight: "600",
                border: "1px solid #757575",
                "&:hover":{
                  color: "rgba(0, 0, 0, 0.87)",
                  backgroundColor: "#d6d6d6",
                },
              }}
              disabled={users.get(loginAuth)!.basket.length < 1}
              >Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};