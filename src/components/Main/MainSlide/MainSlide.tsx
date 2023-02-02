import { useState, useRef, FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { items } from '../../../constants';
import { Description } from "../Description/Description";
import { IdxSlide } from '../../../types';
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styleSlider from './MainSlide.module.scss';

export const MainSlide: FC = () => {
  const [visible, setVisible] = useState(false);
  const [idxSlide, setIdxSlide] = useState<IdxSlide>();
  const [sizeNavigation, setSizeNavigation] = useState(44);

  const navigate = useNavigate();
  
  const swiperRef = useRef<HTMLDivElement | any>(null);
  const mouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
    if(window.screen.availWidth > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const mouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
    setVisible(false);
  };

  const changeSlide = () => {
    setIdxSlide(() => swiperRef.current.swiper.realIndex);
  };

  useEffect(() => {
    if(window.screen.availWidth < 600) {
      setSizeNavigation(22);
    } else {
      setSizeNavigation(44);
    }
  }, []);

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
            "--swiper-navigation-size": `${sizeNavigation}px`,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
          }}
          onActiveIndexChange={changeSlide}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styleSlider.swiper}
          onClick={() => navigate(`/${idxSlide}`)}
        >
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(0)?.images[1]} alt="Slide1" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(1)?.images[1]} alt="Slide2" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(2)?.images[1]} alt="Slide3" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(3)?.images[1]} alt="Slide4" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(4)?.images[1]} alt="Slide5" />
          </SwiperSlide>
          <SwiperSlide className={styleSlider.swiper_slide}>
            <img src={items.get(5)?.images[1]} alt="Slide6" />
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