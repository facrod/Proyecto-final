import React from 'react'
import logo from "./imgFooter/fuzLogo.jpg";
import twitterlogo from "./imgFooter/twitterlogo.png";
import facebooklogo from "./imgFooter/facebooklogo.png";
import mastercard from "./imgFooter/mastercard.png";
import mercadopago from "./imgFooter/mercadopago.png";
import naranja from "./imgFooter/naranja.png";
import nativa from "./imgFooter/nativa.png";
import pagofacil from "./imgFooter/pagofacil.png";

import { NavLink } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='contenedor'>
      <div className='w-25 '>
        <img src={logo} alt="icono Fuz" className='icono'/>
      </div>
      <div className='contenedorLinks w-25'> 
        <div className='links'> 
          <NavLink to="/" className="link">
            Home
          </NavLink> 
          <NavLink to="../pages/Destacados" className="link">
            destacados
          </NavLink>
          <NavLink to="../pages/Contacto" className="link">
            Contacto
          </NavLink>
        </div> 
        <div className='links'> 
          <NavLink to="../pages/Favoritos" className="link">
            Favoritos
          </NavLink>
          <NavLink to="../pages/Carrito" className="link">
            Carrito
          </NavLink>
          <NavLink to="../pages/Ayuda" className="link">
            Ayuda
          </NavLink>
        </div>
      
      
      </div>

      <div className='w-50 d-flex contactos'>
        <div className='d-flex flex-column mx-2'>

          <h5>Contactanos</h5>
          <a href="mailto:info@fuzpetshop.com">info@fuzpetshop.com</a>
          <a href="tel:++54 381 564123">+54 381 564123</a>
          <p>Av. Sarmiento 528 - San Miguel de Tucumán</p>
          <p>Horario de Atención: Lunes a Viernes de 9am a 5pm </p>

        </div>
        <div className='d-flex flex-column mx-2 text-center'>
          <h5>Redes sociales</h5>
          <a href="http://">
            <img src={facebooklogo} alt="Facebook" />
          </a>
          <a href="http://">
            <img src={twitterlogo} alt="Twitter" />
          </a>
        </div>
        <div className='d-flex flex-column mx-2'>
          <h5>QR FISCAL</h5>


        </div>
        <div className='d-flex flex-wrap mx-2 pagos'>
          <h5 className='w-100'>Metodos de pago</h5>
          <img src={naranja} alt="naranja" />
          <img src={nativa} alt="nativa" />
          <img src={mercadopago} alt="mercadopago" />
          <img src={pagofacil} alt="pagofacil" />
          <img src={mastercard} alt="mastercard" />
        </div>

      </div>

      <div className='w-100 text-center'>
        <p className='opacity-75 p-4'>© 2023 FuzPetShop. Todos los derechos reservados. El contenido de este sitio web, incluyendo imágenes, textos y gráficos, está protegido por derechos de autor. Queda prohibida la reproducción o uso no autorizado de cualquier material sin el permiso expreso de FuzPetShop.</p>
      </div>
    </div>
  )
}
