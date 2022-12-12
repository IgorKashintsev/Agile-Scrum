import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { items } from '../../../constants';
import { Description } from "../Description/Description";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styleSlider from './MainSlide.module.scss';
import { IdxSlide } from '../../../types';

export const MainSlide = () => {
  const [visible, setVisible] = useState(false);
  const [idxSlide, setIdxSlide] = useState<IdxSlide>();
  
  const swiperRef = useRef<HTMLDivElement | any>(null);
  const mouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
    setVisible(true);
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
  };

  const mouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
    setVisible(false);
  };

  const changeSlide = () => {
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
  };

  const imgSlide = (idItems: number) => {
    return (items.get(idItems)!.images[0])
  };
  

  return(
    <>
      <div className={styleSlider.header_slide}>РЕКОМЕНДУЕМОЕ</div>
      <div 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Swiper
          ref={swiperRef}
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
          onNavigationPrev={changeSlide}
          onNavigationNext={changeSlide}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styleSlider.swiper}
        >
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(0)} alt="Slide1" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(1)} alt="Slide2" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(2)} alt="Slide3" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(3)} alt="Slide4" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(4)} alt="Slide5" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={imgSlide(5)} alt="Slide6" />
          </SwiperSlide>
        </Swiper>
        <div
          className={styleSlider.description}
        >
          {visible && <Description idxSlide={idxSlide? idxSlide: 0}/>}
        </div>
      </div>
    </>
  );
};