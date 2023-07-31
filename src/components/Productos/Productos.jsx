import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Productos.css"
import {getProductById, getProducts} from '../../services/productosServices';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export const Productos = () => {

function handleDetailProduct(e) {
  const Id = e.target.id
  getProductById(Id)
  .then(res => {
      console.log(res)
    }).
  catch(err => console.log(err))
}

const [productos, setProductos] = useState([])
useEffect(()=> {
  getProducts().
    then()
    .then(res =>{
      setProductos(res.data)
    })
    .catch(err => console.log(err))  

},[])

  if (productos.length > 0) {
    return (
      <div className='contenedorCard d-flex justify-content-between align-items-center flex-wrap'>
        {productos.map((producto, index) => {
          return <div key={producto._id} className='m-4 cartaProd'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.foto_url}/>
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <Card.Text>
              {producto.precio}$
            </Card.Text>
            <NavLink to="/productoSeleccionado">
              <Button variant="primary" onClick={handleDetailProduct} id={producto._id}>Ir al producto</Button>
            </NavLink>
          </Card.Body>
        </Card></div>
        })}
      </div>
    )    
  } else {
    return <h1>No hay productos cargados.</h1>
  }
;
}

export default Productos;