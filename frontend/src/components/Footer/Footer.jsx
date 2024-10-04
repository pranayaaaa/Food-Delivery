import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <h2 className='title'>FOODY KITCHEN</h2>
                <p>Delicious food delivered fast. Fresh ingredients, quality service, and satisfaction guaranteed with every order! </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In  Touch</h2>
                <ul>
                    <li>+917798819443</li>
                    <li>contact@foodykitchen.com</li>
                </ul>
            </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ foodykitchen.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer