import React from 'react'
import{Row,Container,Col} from 'reactstrap';
// import Logo from './Images/Logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

import { BsInstagram } from "react-icons/bs";
import './Footer.css';
const Footer = () => {
  return (
    <>
      <Container className='Row3 ' fluid>
        <div className=' Row0'>
          <div>
             <div className='text-left'>Call Us Now</div>
              <div><FiPhoneCall /> (0300)4878399</div>
              </div>
              <div>
           <div><a href='#' className=" ">About Us</a></div>
           <div><a href='#' className="">Privacy Policy</a></div>
           </div>
           <div>
            <a href='https://www.instagram.com/tezzdelivery/'><BsFacebook className=" icons " /></a>
            <a href='https://www.facebook.com/tezzdeliverypk'><BsInstagram className=" icons  display-5" /></a>
        </div>
        </div>
        </Container>
        <Container className='Row1' fluid>
        <Row >
           <div>Copyright 2023 Tez Delivery. All Rights Reserved</div>
        </Row>
      </Container>
    </>
  )
}

export default Footer
