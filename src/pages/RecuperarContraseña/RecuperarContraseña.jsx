import React from 'react'
import { NavLink } from 'react-router-dom'
import "./RecuperarContraseña.css"
export const RecuperarContraseña = () => {
  return (
    <div className="recContraseña">
      <h4>Recuperar contraseña</h4>
      <p className='opacity-75'>Ingresa tu correo electronico, una vez que aprietes el botón te mandaremos un codigo a tu email para cambiar la contraseña</p>
      <input type="email" name="" id="" required/>
      <button className='btn btn-outline-primary my-2'>Enviarme código</button>
      <NavLink to="/">
        <button className='btn btn-outline-primary my-2'>Volver al inicio</button>
      </NavLink>
    </div>
  )
}
