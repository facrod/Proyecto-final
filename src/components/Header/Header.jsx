import React from 'react'
import logo from "../Footer/imgFooter/fuzLogo.jpg";
import twitterlogo from "../Footer/imgFooter/twitterlogo.png";
import facebooklogo from "../Footer/imgFooter/facebooklogo.png";
import "./Header.css"

export const Header = () => {
    return (
    <div>
        <div className='d-flex header'>
            <div className='w-25 p-3 back'>
                <img src={logo} alt="" className='headerImg rounded-circle'/>
            </div>
            <div className='w-50 p-3 d-flex justify-content-center align-items-center'>
                <input type="search" placeholder='Busca tu producto.' className='w-100'/>
            </div>
            <div className='w-25 text-center p-3 d-flex justify-content-center align-items-center'>
                <a href="http://www.facebook.com" target="_blank"><img src={facebooklogo} alt="" /></a>
                <a href="http://www.twitter.com" target="_blank"><img src={twitterlogo} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
