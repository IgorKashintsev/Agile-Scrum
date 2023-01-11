import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material"
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BasketArr, IsAuth } from "../../types";

import { items } from "../../constants";

import style from '../../global.module.scss';
import styleBasket from './Basket.module.scss';

interface BasketProps {
  basketArr: BasketArr;
  onDelBasketItem: (param: BasketArr) => void;
  isAuth: IsAuth;
}

export const Basket: FC<BasketProps> = ({basketArr, onDelBasketItem, isAuth}) => {
  const [selected, setSelected] = useState<number>(-1)
  const [sumTotal, setSumTotal] = useState(0)
  const deleteRef = useRef<HTMLDivElement | any>(null);

  const navigate = useNavigate();

  const handleClickDelete = (item: number) => {
    onDelBasketItem(basketArr.filter((el) => el !== item))
  }

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
    return
  }, [isAuth]);

  useEffect(() => {
    let sumPrice = 0;
    for(let item of basketArr) {
      setSumTotal(sumPrice += (items.get(item))!.price)
    }
    if(basketArr.length < 1) {
      setSumTotal(0)
    }
  }, [basketArr]);

  console.log('Basket');

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
            }}
          >
            <List
              component="nav"
              aria-label="secondary mailbox folder"
            >
              {basketArr.map((item) => (
                <ListItemButton
                  className={styleBasket.img}
                  onMouseEnter={() => setSelected(item)}
                  key={item}
                >
                  <div>
                    <img src={(items.get(item))?.images[0]}></img>
                  </div>
                  <ListItemText
                    sx={{ marginLeft: '20px', }}
                    primary={(items.get(item))?.name} 
                  />
                  <div>
                    <ListItemText
                      sx={{ 
                        maxWidth: '150px',
                      }}
                      primary={`${(items.get(item))?.price.toFixed(2)} ₽`}
                    />
                    <p 
                      id={item.toString()}
                      ref={selected === item ? deleteRef : null}
                      className={styleBasket.list_delete}
                      onMouseEnter={() => deleteRef.current.classList.add(styleBasket.active)}
                      onMouseLeave={() => deleteRef.current.classList.remove(styleBasket.active)}
                      onClick={() => handleClickDelete(item)}
                    >Удалить
                    </p>
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
                  backgroundColor: "#a8a8a8",
                },
              }}
              disabled={basketArr.length < 1}
              >Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}