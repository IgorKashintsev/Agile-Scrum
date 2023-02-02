import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { items } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Button, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import style from '../../global.module.scss';
import styleGamePage from './GamePage.module.scss';
import { Review } from "./Review/Review";
import { ReviewsList } from "./ReviewsList/ReviewsList";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, addFavorites } from "../../store/users/actions";
import { StoreState } from "../../store";

export const GamePage: FC = () => {
  const {gameId} = useParams();
  const [ratingValue, setRatingValue] = useState((items.get(Number(gameId)))?.rating);
  const [sizeNavigation, setSizeNavigation] = useState(44);
  
  const users = useSelector((state: StoreState) => state.users.users);
  const isAuth = useSelector((state: StoreState) => state.auth.isAuth);
  const loginAuth = useSelector((state: StoreState) => state.auth.loginAuth);
  const reviewArr = useSelector((state: StoreState) => state.reviews.reviews);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    if(reviewArr.findIndex(item => item.id === Number(gameId)) !== -1) {
      let arrFiltered = reviewArr
        .filter(item => item.id === Number(gameId))
        .map(item => item.rating);
      setRatingValue(
        Number((((items.get(Number(gameId)))!.rating + 
        arrFiltered.reduce((sum, current) => sum! + 
        current!, 0)!) / (arrFiltered.length + 1)).toFixed(1))
      );
    }else {
      setRatingValue((items.get(Number(gameId)))?.rating);
    }
  }, [reviewArr]);

  const handleClickFavorites = (gameId: number) => {
    const favoriteIdx = users.get(loginAuth)?.favorites?.indexOf(gameId);
    if(!isAuth) {
      navigate('/signin')
    } else if(favoriteIdx === -1) {
      dispatch(addFavorites(loginAuth, gameId));
    } else {
      return
    }
  };

  const handleClickBasket = (gameId: number) => {
    const basketItemIdx = users.get(loginAuth)?.basket?.indexOf(gameId);
    if(!isAuth) {
      navigate('/signin');
    } else if(basketItemIdx === -1) {
      dispatch(addBasket(loginAuth, gameId));
    } else {
      return
    }
  };
  
  useEffect(() => {
    if(window.screen.availWidth < 600) {
      setSizeNavigation(22);
    } else {
      setSizeNavigation(44);
    }
  }, []);

  if (gameId && !items.get(Number(gameId))) {
    return <Navigate to="/" replace />
  };
  
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
            "--swiper-navigation-size": `${sizeNavigation}px`,
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
                color: "#d6d6d6",
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
                precision={0.1}
                sx={{ ml: 0.5 }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              <p className={styleGamePage.info_secondary_rating}>{ratingValue} из 5</p>
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
                  color: "#d6d6d6",
                  float: 'right',
                  backgroundColor: "#3b3b3b",
                  border: "1px solid #757575",
                  "&:hover":{
                    color: "rgba(0, 0, 0, 0.87)",
                    backgroundColor: "#d6d6d6",
                  },
                }}
                onClick={() => handleClickBasket(Number(gameId))}
                >{isAuth && 
                  users.get(loginAuth)?.basket?.indexOf(Number(gameId)) !== -1 ? 
                  'В корзине' : 
                  'В корзину'
                }
              </Button>
            </div>
          </div>
        </div>
        {(isAuth && !reviewArr.some(
            el => (el.id === Number(gameId) && el.login === loginAuth)
          )) && 
          <Review 
            gameId={gameId ? gameId : ''}
          />
        }
        {reviewArr.some(el => (el.id === Number(gameId))) && 
          <ReviewsList 
            gameId={gameId ? gameId : ''}
          />
        }
      </div>
    </>
  );
};