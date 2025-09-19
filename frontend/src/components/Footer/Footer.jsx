import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.newlogo} alt="" />
                <p>Our app is packed with features that enable you to experience food delivery like never before.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <a href="https://twitter.com/singh_yash14813" target="_blank"> <img src={assets.twitter_icon} alt="" /> </a>
                    <a href="https://www.linkedin.com/in/yashsvi-singh-1005b12a3/" target="_blank"> <img src={assets.linkedin_icon} alt="" /> </a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li> <a href="https://wa.me/8400903388?text=Hi there!"
                target="_blank">+91 8400903388 </a></li>
                    <li> <a href="mailto:yashsvisingh35@gmail.com" target="_blank"> yashsvisingh35@gmail.com</a> </li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @cravecourier.com - All Rights Reserved.</p>
    </div>
  )  
}    
  
export default Footer