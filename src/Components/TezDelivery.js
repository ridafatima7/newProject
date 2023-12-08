import React from "react";
import TNavbar from "./TNavbar";
import Footer from "./Footer";
import { Row, Container, Col, Input, Button, InputGroup } from "reactstrap";
import Logo from "./Images/Logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

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
          {DataProduct.map((item, i) => (
            <div className="products_grid_item">
              <img src={item.image} alt="img" />
              <p>{item.name}</p>
              <div className="item-prices">
                <div className="item_price-new">${item.new_price}</div>
                <div className="item_price-old">${item.old_price}</div>
              </div>
            </div>
          ))}
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
