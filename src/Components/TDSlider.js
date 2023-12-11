import React from 'react';
import { Navigation, Pagination, Autoplay,Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import  { useState, useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import "./TD.css";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import background from "./Images/carosel.jpg";

  
const TDSlider = () => {
   //  const settings = {
   //      dots: true,
   //      infinite: true,
   //      speed: 500,
   //      slidesToShow: 1,
   //      slidesToScroll: 1,
   //      autoplay: true,
   //      autoplaySpeed: 1000,
   //    };
  return (
    <>
    {/* <Slider {...settings} className='Sdiv'>
          <div >
            <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
              <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
          <div>
             <img src={background} alt='meal' />
          </div>
        </Slider> */}
        
        <Swiper
        modules={[EffectCoverflow,Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // effect={"coverflow"}
        // slidesPerView={"auto"}
        // grabCursor={true}
        // centeredSlides={true}
        coverflowEffect={
          {
            rotate:0,
            strech:0,
            depth:100,
            modifier:2.5
          }
        }
        loop={true}
        // keyboardControl={true}
        navigation={false}
        pagination={{
          clickable: true,
          
          // renderBullet: function (index, className) {
          //   return `<span className="${className} custom-dot"></span>`;
          // }
        }}
        className='swiper-container'
        simulateTouch={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* <div className="slider-content">
          <h2>Moving Text Example</h2>
          <p>Your moving text content goes here.</p>
        </div> */}

        <SwiperSlide > <img style={{height:'15rem',width:'80rem',borderRadius:'9px'}}  src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide><img style={{height:'15rem',width:'80rem',borderRadius:'9px'}} src={background} alt='meal' /></SwiperSlide>
        <SwiperSlide><img style={{height:'15rem',width:'80rem',borderRadius:'9px'}} src={background} alt='meal' /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default TDSlider
