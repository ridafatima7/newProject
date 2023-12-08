import React from 'react'
import{Input,Container, Navbar,Nav, Button,NavItem,NavLink, NavbarBrand,Image} from 'reactstrap';
import Logo from './Images/Logo.png';
import { FaSearch } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { slide as Menu } from 'react-burger-menu';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './TDnavbar.css';

const TNavbar = () => {
  return (
    <>
    <Menu>
      <div className='NContainer'>
        <section>
      <div className="navbar" > 
      <div >
        <a href="/">
          <img className='logo' src={Logo} alt="Logo" />
        </a> 
        </div>
        <div className='navdiv '>
            <div> 
              <a href="/">Shop</a>
            </div> 
            <div > 
              <a href="/men">My Orders</a>
            </div> 
            <div > 
              <a href="/women">Categories</a>
            </div> 
            <div > 
              <a href="/kids">Cart</a>
            </div> 
            <div > 
              <a style={{fontWeight:'600%'}} href="/checkout/">Checkout</a>
            </div> 
            </div>
       </div> 
       </section>
      </div>
      <section>
        <div className="section1">
          <div>
            <div className="div2">
              <BsList className="menubtn" />
            </div>
            <div className="div3">
              <p className="para">Deliver to</p>
              <Input
                placeholder="Address"
                name="address"
                className="bg-light location"
              />
            </div>
          </div>
          <div className="central">
            <Input
              className="control"
              name="mart"
              placeholder="Search from Mart"
            >
              <FaSearch />
            </Input>
            <Button className="dbtn">Login</Button>
          </div>
          <div></div>
        </div>
      </section>
      </Menu>
    </>
  )
}

export default TNavbar
