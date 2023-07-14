import React from 'react'

export const RecuperarContraseña = () => {
  return (
    <div>
      <h4>Recuperar contraseña</h4>
      <p className='opacity-75'>Ingresa tu correo electronico, una vez que aprietes el botón te mandaremos un codigo a tu email para cambiar la contraseña</p>
      <input type="email" name="" id="" required/>
      <button className='btn btn-outline-primary mx-2'>Enviarme código</button>
    </div>
  )
}
