import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Productos.css"
import {getProducts} from '../../services/productosServices';
import { useEffect, useState } from 'react';

export const Productos = () => {

const [productos, setProductos] = useState([])
useEffect(()=> {
  getProducts().
    then()
    .then(res =>{
      setProductos(res.data)
    })
    .catch(err => console.log(err))  

},[])

console.log(productos)
  if (productos.length > 0) {
    return (
      <div className='contenedorCard d-flex justify-content-between align-items-center flex-wrap'>
        {productos.map((producto, index) => {
          return <div id={index} className='m-4 cartaProd'><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.foto_url}/>
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <Card.Text>
              {producto.precio}$
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
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