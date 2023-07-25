import React from 'react'
import logo from "../Footer/imgFooter/fuzLogo.jpg";
import twitterlogo from "../Footer/imgFooter/twitterlogo.png";
import facebooklogo from "../Footer/imgFooter/facebooklogo.png";
import "./Header.css"
export const Header = () => {
    return (
    <div>
        <div className='d-flex'>
            <div className='w-25 p-3'>
                <img src={logo} alt="" className='header'/>
            </div>
            <div className='w-50 p-3'>
                <input type="search" placeholder='Busca tu producto.' className='w-100'/>
            </div>
            <div className='w-25 text-center p-3'>
                <a href="http://www.facebook.com" target="_blank"><img src={facebooklogo} alt="" /></a>
                <a href="http://www.twitter.com" target="_blank"><img src={twitterlogo} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
