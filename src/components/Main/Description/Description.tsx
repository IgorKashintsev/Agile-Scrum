import { FC, useEffect, useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { items } from '../../../constants';
import { CardRating } from './CardRating/CardRating';

import "swiper/css";
import "swiper/css/effect-fade";
import styleCard from './Description.module.scss';
import { IdxSlide } from '../../../types';

interface DescriptionProps {
  idxSlide: IdxSlide;
};

export const Description: FC<DescriptionProps> = ({idxSlide}) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if((items.get(idxSlide))!.text[0].length > 325) {
      setText(`${(items.get(idxSlide))!.text[0].substring(0, 325)}...`)
    } else {
    setText((items.get(idxSlide))!.text[0])}
  }, [idxSlide])

  const HandleClick = () => {
    for (let [key] of items.entries()) {
      if (key === idxSlide) {
        navigate(`/${key.toString()}`)
      }
    }
  };

  console.log('Description');
  
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
                  <img className={styleCard.image} src={(items.get(idxSlide))!.images[2]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={styleCard.image} src={(items.get(idxSlide))!.images[3]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={styleCard.image} src={(items.get(idxSlide))!.images[4]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className={styleCard.image} src={(items.get(idxSlide))!.images[5]} />
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
          <CardRating idxSlide={idxSlide}/>
          <CardActions>
            <Button 
              sx={{ color: 'rgba(0, 0, 0, 0.87)', fontWeight: 700 }}
              size="small"
            >
              Подробнее
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};