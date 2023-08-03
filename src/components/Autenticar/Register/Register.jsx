import { useEffect, useState } from 'react';
import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Register.css"
import { addUser } from '../../../services/autenticarServices';

export const Register = ({changeSetRegister}) => {

const [usuarioNuevo, setUsuarioNuevo] = useState({
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  repassword: "",
})

function handleNombre(e) {
  setUsuarioNuevo({
    ...usuarioNuevo,
    nombre: e.target.value,
  })}


function handleApellido(e) {
  setUsuarioNuevo({
    ...usuarioNuevo,
    apellido: e.target.value,
  })}

function handleEmail(e) {
  setUsuarioNuevo({
    ...usuarioNuevo,
    email: e.target.value,
  })}

function handlePassword(e) {
  setUsuarioNuevo({
    ...usuarioNuevo,
    password: e.target.value,
  })
}

function handleRePassword(e) {
  setUsuarioNuevo({
    ...usuarioNuevo,
    repassword: e.target.value,
  })
}


const handeClick = (e) => {
  const { nombre, apellido, email, password, repassword } = usuarioNuevo;
  if (!nombre || !apellido || !email || !password || !repassword) {
    alert("rellena los campos")
  } else {
    e.preventDefault()
    e.stopPropagation()
    if (usuarioNuevo.password == usuarioNuevo.repassword) {
      setTimeout(() => {
        addUser(usuarioNuevo)
        .then(res =>{
          console.log(res)
        })
        .catch(err => console.log(err))    
        changeSetRegister(false)
        alert("registrado con exito!")
      }, 2000);
    } else {
      alert("las contraseñas deben coincidir")
    }   
  }
}

  return (
    <>
      <div className='contenedorRegister'>
        <form>
          <Form.Control type="text" placeholder="Nombre" required className='mt-3' onChange={handleNombre}/>
          <Form.Control type="text" placeholder="Apellido" required className='mt-3' onChange={handleApellido}/>
          <Form.Control type="email" placeholder="Email" required className='mt-3' onChange={handleEmail}/>
          <Form.Control type="password" placeholder="Contraseña" required className='mt-3' onChange={handlePassword}/>
          <Form.Control type="password" placeholder="Repetir contraseña" required className='my-3' onChange={handleRePassword}/>
          <button className='btn btn-outline-primary mt-2' onClick={handeClick}>Registrarme</button>
        </form>
      </div>
    </>
)
}
