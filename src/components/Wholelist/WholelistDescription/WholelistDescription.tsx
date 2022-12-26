import { FC, useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { items } from '../../../constants';
import { CardRating } from '../../../components/Main/Description/CardRating/CardRating';

import "swiper/css";
import "swiper/css/effect-fade";
import styleCard from './Description.module.scss';
import { IdxSlide } from '../../../types';

interface WholelistDescriptionProps {
  idxSlide: IdxSlide;
};

export const WholelistDescription: FC<WholelistDescriptionProps> = ({idxSlide}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if((items.get(idxSlide))!.text.length > 370) {
      setText(`${(items.get(idxSlide))!.text.substring(0, 370)}...`)
    } else {
    setText((items.get(idxSlide))!.text)}
  }, [idxSlide])
  
  return(
    <>
      <div className={styleCard.card}>
        <Card
          sx={{ maxWidth: 345, maxHeight: 525, bgcolor: '#d6d6d6' }}
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
          <div className={styleCard.rating}>
            <CardRating idxSlide={idxSlide}/>
          </div>
        </Card>
      </div>
    </>
  );
};