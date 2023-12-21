import React from 'react';
import {Button,Input,FormGroup} from 'reactstrap';
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <section className='container pt'>
        <div className='Login'>
            <img src='/Images/LogoImage.png' className='pt pb' alt='loginimage' />
            <p>Enter Account Credientials</p>
            <Input className='LoginInput' type="text" placeholder="Your Name" name="user-name" />
            <Input  className='LoginInput' type="text" placeholder="03xx xxxxxxx" name="user-password" />
            <span className='Login-span1'>Skip Login</span>
            <Button>LOGIN</Button>
            <span className='Login-span2'>Or Continue with </span>
            <div className='Logindiv'>
               <FaFacebook className='login-icon'  size={26}/>
               <h6>Facebook</h6>
            </div>
            <div className='Logindiv'>
               <img src='/Images/google.png' className='google-img' alt='google' />
               <h6>Google</h6>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login
