import { FC, useEffect, useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { items } from '../../../constants';
import { CardRating } from './CardRating/CardRating';
import { IdxSlide } from '../../../types';

import "swiper/css";
import "swiper/css/effect-fade";
import styleCard from './Description.module.scss';

interface DescriptionProps {
  idxSlide: IdxSlide;
};

export const Description: FC<DescriptionProps> = ({idxSlide}) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if((items.get(idxSlide))!.text[0].length > 370) {
      setText(`${(items.get(idxSlide))!.text[0].substring(0, 370)}...`)
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
            <CardRating idxSlide={idxSlide}/>
          </div>
        </Card>
      </div>
    </>
  );
};