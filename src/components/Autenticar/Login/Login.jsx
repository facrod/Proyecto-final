import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

export const Login = ({children}) => {
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ingresar 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {
          register == false ? <div>
          <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>  
            <Nav.Link href="#link">
              <Button variant="outline-danger" className='my-2' size="sm">
                Recuperar contraseña
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button size="sm" onClick={()=>setRegister(true)}>
                Registrate
              </Button>
            </Nav.Link>

          </div>: <div>{children}</div>
         }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


