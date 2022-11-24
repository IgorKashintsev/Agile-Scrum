import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { items } from '../../../constants';
import { Description } from "../Description/Description";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styleSlider from './MainSlide.module.scss';

export const MainSlide = () => {
  const [visible, setVisible] = useState(false);
  const [idxSlide, setIdxSlide] = useState();
  
  const swiperRef = useRef(null)
  const mouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
    setVisible(true);
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
  }
  const mouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
    setVisible(false);
  }
  const changeSlide = () => {
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
  }

  return(
    <>
      <div 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Swiper
          ref={swiperRef}
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
          onNavigationPrev={changeSlide}
          onNavigationNext={changeSlide}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styleSlider.swiper}
        >
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 0)).images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 1)).images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 2)).images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 3)).images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 4)).images[0]} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={(items.find(user => user.id === 5)).images[0]} alt="" />
          </SwiperSlide>
        </Swiper>
        <div
          className={styleSlider.description}
        >
          {visible && <Description idxSlide={idxSlide}/>}
        </div>
      </div>
    </>
  );
};