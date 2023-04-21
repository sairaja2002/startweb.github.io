import React from 'react'
import Navbar from './Navbar'
const Login = () => {
  return (
    <div>

      <div className="box">   
        <div className="container2"> 
            <div className="con2 ">
            <div className="row1">
                <h1>Login to Your Account</h1>
                <p className='tag'>Login using social networks</p>
                <div className='social-apps'>
                  <a href=""><i class="fa-brands fa-facebook" id='face'></i></a>
                  <a href=""><i class="fa-brands fa-google-plus" id='google'></i></a>
                  <a href=""><i class="fa-brands fa-linkedin" id='linked'></i></a>
                </div>
                <p className='tag'>OR</p>
                <input type="text" placeholder='Email or Phone Number' id='Email' className='login-input' />
                <input type="password" placeholder='Password' id='password' className='login-input'/>
                <a href="">Forgot Password?</a>
                <button className='signin-btn'>Sign in</button>
            </div>
            <div className="row2">
                <h1>New Here?</h1>
                <p className='tag'>Sign up and discover a great amount of new opportunities!</p>
                <button className='signup-btn'>Sign up</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
