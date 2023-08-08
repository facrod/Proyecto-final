import React, { useEffect, useState } from 'react'
import logo from "../Footer/imgFooter/fuzLogo.jpg";
import twitterlogo from "../Footer/imgFooter/twitterlogo.png";
import facebooklogo from "../Footer/imgFooter/facebooklogo.png";
import "./Header.css"
import { getProducts } from '../../services/productosServices';

export const Header = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        getProducts().
        then()
        .then(res =>{
        setProductos(res.data)
        })
        .catch(err => console.log(err))  

    }, [])

    function searchProdut (e) {
        const prod = e.target.value
        const prodFilter = productos.filter((product) =>
        product.producto.includes(prod)
    );
        localStorage.setItem("productos filtrados", JSON.stringify(prodFilter))
    }

    return (
    <div>
        <div className='d-flex header'>
            <div className='w-25 p-3'>
                <img src={logo} alt="" className='headerImg '/>
            </div>
            <div className='w-50 p-3 d-flex justify-content-center align-items-center'>
                <input type="search" placeholder='Busca tu producto.' className='inputHeader' onChange={searchProdut}/>
            </div>
            <div className='w-25 text-center p-3 d-flex justify-content-center align-items-center'>
                <a href="http://www.facebook.com" target="_blank"><img src={facebooklogo} alt="" /></a>
                <a href="http://www.twitter.com" target="_blank"><img src={twitterlogo} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
