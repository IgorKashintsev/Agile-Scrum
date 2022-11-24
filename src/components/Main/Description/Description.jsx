import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import { items } from '../../../constants';
import { CardRating } from './CardRating/CardRating';

import "swiper/css";
import "swiper/css/effect-fade";
import styleCard from './Description.module.scss';
import { grey } from '@mui/material/colors';

export const Description = ({idxSlide}) => {

  const text = (items.find(user => user.id === idxSlide)).text;
  const showText = () => {
    if(text.length > 440) {
      return (`${text.substring(0, 440)}...`)
    } else return text
  }

  return(
    <>
      <div className={styleCard.card}>
        <Card
          sx={{ maxWidth: 345, maxHeight: 595 }}
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
                  <img src={(items.find(user => user.id === idxSlide)).images[1]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={(items.find(user => user.id === idxSlide)).images[2]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={(items.find(user => user.id === idxSlide)).images[3]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={(items.find(user => user.id === idxSlide)).images[4]} />
                </SwiperSlide>
              </Swiper>
            </CardMedia>
            <CardContent>
              <Typography 
                fontSize={19}
                gutterBottom variant="h5" component="div"
              >
                {(items.find(user => user.id === idxSlide)).name}
              </Typography>
              <Typography
                fontSize={14}
                variant="body2" color="text.secondary"
              >
                {showText()}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardRating idxSlide={idxSlide}/>
          <CardActions>
            <Button 
              sx={{ color: grey[900], fontWeight: 700 }}
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