import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import "./Register.css"
export const Register = () => {

  return (
    <>
      <div className='contenedorRegister'>
        <Form.Control type="email" placeholder="Email" className='mt-2'/>
        <Form.Control type="password" placeholder="Contraseña" className='mt-2'/>
        <Form.Control type="password" placeholder="Repetir contraseña" className='mt-2'/>
        <button className='btn btn-primary mt-2'>Registrarme</button>
       
      </div>
    </>
)
}
