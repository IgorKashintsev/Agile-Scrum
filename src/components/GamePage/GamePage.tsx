import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useRef, useState } from "react";
import { items, labels } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import style from '../../global.module.scss';
import styleGamePage from './GamePage.module.scss';
import { BasketArr, IsAuth, ReviewObj, Login } from "../../types";
import { Review } from "./Review/Review";
import { ReviewsList } from "./ReviewsList/ReviewsList";

interface GamePageProps {
  isAuth: IsAuth;
  basketArr: BasketArr;
  onAddBasketArr: (newItemBasket: BasketArr) => void;
  onAddReviewArr: (newReview: ReviewObj) => void;
  loginAuth: Login;
  reviewArr: ReviewObj[];
}

export const GamePage: FC<GamePageProps> = (
    {
      isAuth,
      basketArr,
      onAddBasketArr,
      onAddReviewArr,
      loginAuth,
      reviewArr,
    }
  ) => {
  const [inBasket, setInBasket] = useState(false)
  
  const {gameId} = useParams();
  const ratingValue = (items.get(Number(gameId)))?.rating;

  const addBasketRef = useRef<HTMLDivElement | any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  useEffect(() => {
    const basketItemIdx = basketArr.findIndex(item => item === Number(gameId));
    if(basketItemIdx !== -1) {
      setInBasket(true);
    } else {
      setInBasket(false);
    }
  }, [basketArr])

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
  
  console.log('game');
  
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
                marginBottom: '50px',
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
              <p 
                ref={addBasketRef}
                style={{cursor: 'pointer'}} 
                className={styleGamePage.price_basket}
                onMouseEnter={() => addBasketRef.current.classList.add(styleGamePage.active)}
                onMouseLeave={() => addBasketRef.current.classList.remove(styleGamePage.active)}
                onClick={() => handleClickBasket(Number(gameId))}
              >{inBasket ? 'В корзине' : 'В корзину'}
              </p>
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