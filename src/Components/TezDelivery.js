import React from "react";
import TNavbar from "./TNavbar";
import Footer from "./Footer";
import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";
import Logo from "./Images/Logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Pagination, Autoplay,Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
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

     
      <section className="container pt pb Rslider">
        <TDSlider className="d-flex " />
      </section>
      {/* ======== products section started=========== */}
      <section className="products_section container pt pb">
      <h5 className="main_heading pb">Shop by Category</h5>
      <div className="products_grid">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          // spaceBetween={50}
          // slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          navigation={false}
          pagination={{ clickable: true, el: '' }}
          // className='swiper-container'
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {DataProduct.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="products_grid_item">
                <img src={item.image} alt="img" />
                <p>{item.name}</p>
                {console.log(item.new_price)}
                <div className="item-prices">
                  <div className="item_price-new">${item.new_price}</div>
                  <div className="item_price-old">${item.old_price}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      <section className="container pt pb">
            <h5 className="main_heading pb">Exclusive Offers</h5>
          <div className="popular-exclusive">
            {Offers.map((item, i) => {
              return (
                <Exclusive
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
      </section>
      <section className="container pt pb">
            <h5 className="main_heading pb">Most Selling</h5>
          <div className="popular-exclusive">
            {NewCollection.map((item, i) => {
              return (
                <Exclusive
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
      </section>
      <Footer />
    </>
  );
};

export default TezDelivery;
