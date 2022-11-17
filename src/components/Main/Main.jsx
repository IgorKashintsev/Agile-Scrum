import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {items} from '../../constants'

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import style from '../../global.module.scss';
import styleSwiper from './Main.module.scss';

export const Main = () => {

  return (
    <>
      <div className={style.container}>
        <div className={styleSwiper.body}>
          <Swiper
            loop={true}
            style={{
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
            className={styleSwiper.swiper}
          >
            <SwiperSlide className={styleSwiper.swiper_slide}>
              <img src={(items.find(user => user.id === 1)).image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styleSwiper.swiper_slide}>
            <img src={(items.find(user => user.id === 2)).image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styleSwiper.swiper_slide}>
            <img src={(items.find(user => user.id === 3)).image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styleSwiper.swiper_slide}>
            <img src={(items.find(user => user.id === 4)).image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styleSwiper.swiper_slide}>
            <img src={(items.find(user => user.id === 5)).image} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styleSwiper.swiper_slide}>
            <img src={(items.find(user => user.id === 6)).image} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}