import React, { useState } from 'react'
import { Input, Container, Navbar, Nav, Button, NavItem, NavLink, NavbarBrand, Image } from 'reactstrap';
import Logo from './Images/Logo.jpg';
import { FaSearch } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { RiMapPin2Fill } from 'react-icons/ri';
import {Link} from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from "react-icons/gi";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './TDnavbar.css';
const TNavbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  return (
    <>
      <div className='container'>
        <section className='section1'>
          <div className="navbar" >
            <div >
              <a href="/">
                <img className='logo' src={Logo} alt="Logo" />
              </a>
            </div>
            <div className={
              showMediaIcons ? "menu-link mobile-menu-link" : "navdiv menu-link"
            }>
              <div>
              <Link to="/" >
                <BsShop  className='Item-Link' />
                <span className='Item-Link'>Shop</span>
              </Link>
             </div>
             <div>
              <Link to="/cart" className='Item-Link'>
                <FiShoppingBag />
                <span>My Orders</span>
              </Link>
            </div>
            <div>
              <Link to="/categories" className='Item-Link'>
                <MdOutlineFeaturedPlayList />
                <span>Categories</span>
              </Link>
            </div>
            <div>
            <Link to="/cart" className='Item-Link'>
                <BsCart2 />
                <span>Cart</span>
              </Link>
            </div>
            <div>
              <Link to="/checkout/" className='Item-Link'>
                <MdShoppingCartCheckout />
                <span>Checkout</span>
              </Link>
            </div>
          </div>
          <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu />
        </a>
      </div>
       </div>
     
    </section >
    <section>
        <div className="section1 ">
          <div>
            <div className="div2">
              <Link to="/home"><BsList className="menubtn" /></Link>
            </div>
            <div className="div3">
              <p className="para">Deliver to</p>
              <RiMapPin2Fill className='icon1' aria-hidden='true'/>
              <Input
                name="address"
                className=" location"
              />
            </div>
          </div>
          <div className="central">
            <Input
              className="control"
              name="mart"
              placeholder="Search from Mart"
            >
            </Input>
            <FaSearch className='icon' aria-hidden='true'/>
            <Link to="/login"><Button className="dbtn">Login</Button></Link>
          </div>
        </div>
      </section>
      </div >

    </>
  )
}

export default TNavbar
