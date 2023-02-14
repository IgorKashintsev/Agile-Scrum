import { FC, useEffect, useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { items } from '../../../constants';
import StarIcon from '@mui/icons-material/Star';
import "swiper/css";
import "swiper/css/effect-fade";
import styleCard from './Description.module.scss';
import { useSelector } from 'react-redux';
import { selectIdxSlide } from 'src/store/main/selectors';
import { selectAverageRating } from 'src/store/rating/selectors';

export const Description: FC = () => {
  const [text, setText] = useState('');
  const idxSlide = useSelector(selectIdxSlide);
  const ratingValue = useSelector(selectAverageRating);
  const navigate = useNavigate();

  useEffect(() => {
    if((items.get(idxSlide))!.text[0].length > 370) {
      setText(`${(items.get(idxSlide))!.text[0].substring(0, 370)}...`)
    } else {
    setText((items.get(idxSlide))!.text[0])}
  }, [idxSlide])

  const HandleClick = () => {
    navigate(`/${items.get(idxSlide)?.id}`)
  };

  return(
    <>
      <div className={styleCard.card}>
        <Card
          sx={{ maxWidth: 345, maxHeight: 525, bgcolor: '#d6d6d6' }}
          onClick={HandleClick}
        >
          <CardActionArea>
            <CardMedia
            >
              <Swiper
                effect={"fade"}
                modules={[EffectFade, Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <img 
                    className={styleCard.image} 
                    src={(items.get(idxSlide))!.images[2]} 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className={styleCard.image} 
                    src={(items.get(idxSlide))!.images[3]} 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className={styleCard.image} 
                    src={(items.get(idxSlide))!.images[4]} 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    className={styleCard.image} 
                    src={(items.get(idxSlide))!.images[5]} 
                  />
                </SwiperSlide>
              </Swiper>
            </CardMedia>
            <CardContent>
              <Typography 
                fontSize={19}
                gutterBottom variant="h5" component="div"
              >
                {(items.get(idxSlide))!.name}
              </Typography>
              <Typography
                fontSize={14}
                variant="body2" color="text.secondary"
              >
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className={styleCard.card_rating}>
            <div className={styleCard.rating}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >Рейтинг:
                <Rating
                  name="text-feedback"
                  value={ratingValue.find(item => item.id === idxSlide)?.rating}
                  readOnly
                  precision={0.1}
                  sx={{ ml: 0.5 }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <p 
                  className={styleCard.rating_value}
                >{ratingValue.find(item => item.id === idxSlide)?.rating} из 5</p>
              </Box>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};