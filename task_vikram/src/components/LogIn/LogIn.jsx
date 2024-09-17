import React from 'react'
import './LogIn.css';
import img1 from '../../assets/alps-8368328_1280.jpg';
import img2 from '../../assets/hut-6750482_1280.jpg';
import img3 from '../../assets/mountain-8451604_1280.webp';
import img4 from '../../assets/nature-7602212_1280.webp';

function LogIn() {
  return (
    <div className="main">
        <div className="left">
            <p className='login-p'>Login</p>
            <form className='login-form' action="">
                <input className='username' type="text" name='username' id='input' placeholder='Username' /> 
                <input className='pass' type="password" name="login" id="input" placeholder='Password' />
            </form>
            <div className="btn">
            <button className="signup-btn">SIGNUP</button>
            <button className="login-btn">LOGIN</button>
            </div>

            <p className='fb'>or connect with <a href="http://" target="_blank" rel="noopener noreferrer">Facebook</a></p>

        </div>
        <div className="right">
            <div className="img">
            <div className="img1"><img src={img1} alt="" /></div>
            <div className="img2"><img src={img2} alt="" /></div>
            <div className="img3"><img src={img3} alt="" /></div>
            <div className="img4"><img src={img4} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default LogIn