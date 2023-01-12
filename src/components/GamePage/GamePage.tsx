import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { items, labels } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import style from '../../global.module.scss';
import styleGamePage from './GamePage.module.scss';
import { BasketArr, IsAuth, ReviewObj, Login, UsersMap } from "../../types";
import { Review } from "./Review/Review";
import { ReviewsList } from "./ReviewsList/ReviewsList";

interface GamePageProps {
  isAuth: IsAuth;
  basketArr: BasketArr;
  onAddBasketArr: (newItemBasket: BasketArr) => void;
  onAddReviewArr: (newReview: ReviewObj) => void;
  loginAuth: Login;
  reviewArr: ReviewObj[];
  users: UsersMap,
  onAddFavorites: (favorite: number) => void;
}

export const GamePage: FC<GamePageProps> = (
    {
      isAuth,
      basketArr,
      onAddBasketArr,
      onAddReviewArr,
      loginAuth,
      reviewArr,
      users,
      onAddFavorites,
    }
  ) => {
  const [visible, setVisible] = useState(false);
  const {gameId} = useParams();
  const ratingValue = (items.get(Number(gameId)))?.rating;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const handleClickFavorites = (gameId: number) => {
    const favoriteIdx = users.get(loginAuth)?.favorites?.indexOf(gameId);
    if(!isAuth) {
      navigate('/signin')
    } else if(favoriteIdx === -1) {
      onAddFavorites(users.get(loginAuth)!.favorites!.push(gameId));
      setVisible(visible => !visible);
    } else {
      return
    }
  };

  const handleClickBasket = (gameId: number) => {
    if(isAuth) {
      const basketItemIdx = basketArr.findIndex(item => item === gameId);
      if(basketItemIdx === -1) {
        onAddBasketArr([...basketArr, (Array.from(items.keys())[gameId])])
      }
    } else {
      navigate('/signin');
    }
  };
  
  if (gameId && !items.get(Number(gameId))) {
    return <Navigate to="/" replace />
  }
  
  return(
    <>
      <div className={style.container}>
        <h1 className={styleGamePage.header}>{items.get(Number(gameId))?.name}</h1>
        <Swiper
          loop={true}
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styleGamePage.swiper}
        >
          <SwiperSlide >
            <img src={items.get(Number(gameId))?.images[1]} alt="Slide1" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={items.get(Number(gameId))?.images[2]} alt="Slide2" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={items.get(Number(gameId))?.images[3]} alt="Slide3" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={items.get(Number(gameId))?.images[4]} alt="Slide4" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={items.get(Number(gameId))?.images[5]} alt="Slide5" />
          </SwiperSlide>
        </Swiper>
        <div className={styleGamePage.info}>
          <div className={styleGamePage.info_primary}>
            {items.get(Number(gameId))?.text.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
          </div>
          <div className={styleGamePage.info_secondary}>
            <Button 
              type="button"
              sx={{
                width: "120px",
                height: "25px",
                fontSize: "13px",
                color: "#a8a8a8",
                float: 'right',
                backgroundColor: "#3b3b3b",
                border: "1px solid #757575",
                "&:hover":{
                  color: "rgba(0, 0, 0, 0.87)",
                  backgroundColor: "#d6d6d6",
                },
              }}
              onClick={() => handleClickFavorites(Number(gameId))}
            >{isAuth && 
              users.get(loginAuth)?.favorites?.indexOf(Number(gameId)) !== -1 ? 
              'В избранном' : 
              'В избранное'
            }
            </Button>
            <div className={styleGamePage.info_secondary_div}>
              Дата выпуска: 
              <span 
                className={styleGamePage.span}
              >
                {(items.get(Number(gameId)))?.date.toLocaleDateString()}
              </span>
            </div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px',
              }}
            >Рейтинг:
              <Rating
                name="text-feedback"
                value={ratingValue}
                readOnly
                precision={0.5}
                sx={{ ml: 0.5 }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <Box sx={{ ml: 1 }}>{ratingValue ? labels[ratingValue] : 0}</Box>
            </Box>
            <div className={styleGamePage.info_secondary_div}>
              Жанр: 
              <span 
                className={styleGamePage.span}
              >{(items.get(Number(gameId)))?.genre.join(', ')}
              </span>
            </div>
            
            <div className={styleGamePage.price}>
              <p 
                className={styleGamePage.price_info}
              >{(items.get(Number(gameId)))?.price.toFixed(2)} &#8381;
              </p>
              <Button 
                type="button"
                sx={{
                  width: "120px",
                  height: "25px",
                  fontSize: "13px",
                  color: "#a8a8a8",
                  float: 'right',
                  backgroundColor: "#3b3b3b",
                  border: "1px solid #757575",
                  "&:hover":{
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "#d6d6d6",
                  },
                }}
                onClick={() => handleClickBasket(Number(gameId))}
                >{basketArr.indexOf(Number(gameId)) !== -1 ? 'В корзине' : 'В корзину'}
              </Button>
            </div>
          </div>
        </div>
        {(isAuth && !reviewArr.some(
            el => (el.id === Number(gameId) && el.login === loginAuth)
          )) && 
          <Review 
            onAddReviewArr={onAddReviewArr}
            gameId={gameId ? gameId : ''}
            loginAuth={loginAuth}
          />
        }
        {reviewArr.some(el => (el.id === Number(gameId))) && 
          <ReviewsList 
            reviewArr={reviewArr}
            gameId={gameId ? gameId : ''}
          />
        }
      </div>
    </>
  );
};