import React from "react";
import TNavbar from "./TNavbar";
import Footer from "./Footer";
import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";
import Logo from "./Images/Logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Pagination, Autoplay,Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Marquee from "react-fast-marquee";
import 'swiper/css';
import "./TD.css";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DataProduct from "./DataProduct";
import Slider from "./TDSlider";
import TDSlider from "./TDSlider";
import Offers from "./Offers";
import shirt from "./Images/shirt.jpeg";
import Exclusive from "./Exclusive";
import "./TD.css";
import Special from "./Special";
import NewCollection from "./Ncollection";
import Newsletter from "./Newsletter";
const TezDelivery = () => {
  return (
    <>
      <TNavbar />
      {/* ======== Ticker=========== */}
     <section className="container pt">
        <div className="anoucement">
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
            <>
          <div className="anoucement-text text1">
            <span>TEZZ is here!Order Now</span>
            <span>TEZZ is here!Order Now</span>
            <span>TEZZ is here!Order Now</span>
            <span>TEZZ is here!Order Now</span>
            <span>TEZZ is here!Order Now</span>
            <span>TEZZ is here!Order Now</span>
          </div>
          </>
          </Marquee >
          </div>
     </section>
      <section className="container pb">
        <TDSlider className="d-flex " />
      </section>
      {/* ======== products section started=========== */}
      <section className="products_section container pt pb">
      <div className="pb heading-box">
      <h5 className="main_heading ">Shop by Category</h5>
      <a href="#"><Button className="see-all">See all</Button></a>
          </div>
      <div className="products_grid">
          {DataProduct.map((item, index) => (
              <div className="products_grid_item">
                <img src={item.image} alt="img" />
                <p>{item.name}</p>
              </div>
          ))}
      </div>
    </section>
      <section className="container pt pb">
        <div className="pb heading-box">
            <h5 className="main_heading">Exclusive Offers</h5>
            <a href="#"><Button className="see-all">See all</Button></a>
          </div>
          {/* <div className="popular-exclusive"> */}
          <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={150}
          slidesPerView={5}
          grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          navigation={false}
          pagination={{ clickable: true, el: '' }}
          // className='swiper-container'
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {Offers.map((item, i) =>  (
              <SwiperSlide key={i}>
                <Exclusive
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
             </SwiperSlide>
            ))}
              </Swiper>
          {/* </div> */}
      </section>
      <section className="container pt pb">
      <div className="pb heading-box">
            <h5 className="main_heading ">Most Selling</h5>
            <a href="#"><Button className="see-all">See all</Button></a>
          </div>
          {/* <div className="popular-exclusive"> */}
          <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={150}
          slidesPerView={5}
          grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          navigation={false}
          pagination={{ clickable: true, el: '' }}
          // className='swiper-container'
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {NewCollection.map((item, i) =>  (
              <SwiperSlide key={i}>
                <Exclusive
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
                </SwiperSlide>
            ))}
               </Swiper>
          {/* </div> */}
      </section>
      <Footer />
    </>
  );
};

export default TezDelivery;
