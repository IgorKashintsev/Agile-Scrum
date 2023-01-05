import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { items, labels } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import style from '../../global.module.scss';
import styleGamePage from './GamePage.module.scss';

export const GamePage = () => {
  const {gameId} = useParams();
  const ratingValue = (items.get(Number(gameId)))!.rating;

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
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
              Дата выпуска: <span className={styleGamePage.span}>{(items.get(Number(gameId)))?.date.toLocaleDateString()}</span>
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
              <Box sx={{ ml: 1 }}>{labels[ratingValue]}</Box>
            </Box>
            <div className={styleGamePage.info_secondary_div}>
              Жанр: <span className={styleGamePage.span}>{(items.get(Number(gameId)))?.genre.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};