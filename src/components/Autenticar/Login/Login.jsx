import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Register } from '../Register/Register';
import { NavLink } from "react-router-dom";
import { login } from '../../../services/autenticarServices';
import "./login.css"
import { DataProvider } from '../../../context/DataContext';


export const Login = () => {
  const contexto = useContext(DataProvider)
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    setRegister(false)
  }

  const [usuario, setUsuario] = useState({
    email : "",
    password : "",
  })

  function handleEmail(e) {
    setUsuario({
      ...usuario,
      email: e.target.value
    })
  }

  function handlePassword (e) {
    setUsuario({
      ...usuario,
      password: e.target.value
    })
  }

  const [loginRes, setLoginRes] = useState({})

  function handleClick() {
    login(usuario)
      .then(res =>{
        setLoginRes(res)
        console.log(res)
      })
      .catch(err => console.log(err)) 

      const headers = new Headers()
      const {data} = loginRes || {}
      headers.append("authorization", `Bearer ${data}`)
    
    contexto.setIsLogged(true)
    setShow(false)
  }


  function changeRegister () {
      setRegister(false)
  }

  console.log(contexto)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ingresar 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{register == false ? "Ingresar": "Crea tu cuenta"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {
          register == false ? <div>
          <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
          >
            <Form.Control type="email" placeholder="Email" onChange={handleEmail}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" >
            <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
            <p>Nunca compartiremos tu contaseña con nadie.</p>
          </FloatingLabel>  
            <NavLink to="/RecuperarContraseña">
              <Button variant="none" className='my-2 recuperar' size="sm">
                Recuperar contraseña
              </Button>
            </NavLink>
              <Button size="sm" variant="none" className='registrate' onClick={()=>setRegister(true)}>
                Registrate
              </Button>

          </div>: <Register changeSetRegister={changeRegister}/>
         }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick} style={register == true ? {display : "none"} : {display : "flex"} }>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


