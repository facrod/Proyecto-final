import React, { useState } from 'react'
import "./Administrar.css"
import Table from 'react-bootstrap/Table';
import getProducts from '../../services/productosServices';

export const Administrar = () => {

const [productoNuevo, setProductoNuevo] = useState({
  producto:"",
  precio:"",
  stock:"",
  categoria:"",
  descripcion:"",
})

function handleProducto (e) {
  setProductoNuevo({
    ...productoNuevo,
    producto: e.target.value,
})}
function handlePrecio (e) {
  setProductoNuevo({
    ...productoNuevo,
    precio: e.target.value,
})}

function handleStock (e) {
  setProductoNuevo({
    ...productoNuevo,
    stock: e.target.value,
  })}

function handleCategoria (e) {
  setProductoNuevo({
    ...productoNuevo,
    categoria: e.target.value,
})}

function handleDescripcion (e) {
  setProductoNuevo({
    ...productoNuevo,
    descripcion: e.target.value,
})}

const [productos, setProductos] = useState([])



  return (
    <div className='contenedorAdmin'>
      <div className='contenedorAdmin-inputs'>
        <input type="text" name="" id="" placeholder='Producto' onChange={handleProducto} />
        <input type="number" name="" id="" placeholder='Precio' onChange={handlePrecio}/>
        <input type="number" name="" id="" placeholder='Stock' onChange={handleStock}/>
        <input type="text" name="" id="" placeholder='Categoria' onChange={handleCategoria}/>
        <textarea rows="5" cols="10" placeholder='Descripcion' onChange={handleDescripcion}/>
        <button>Enviar</button>
      </div>
      <div className='contenedorAdmin-table'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripcion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>

          {productos.map((producto, index) => {
            return<tr key={index}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.stock}</td>
            <td>{producto.descripcion}</td>
            <td>
              <button key={index} onClick={handleChange}>{Modificar}</button>
              <button key={index} onClick={handleDelete}>{Eliminar}</button>
            </td>
          </tr>
          })}

        </tbody>
        </Table>
      </div>
    </div>
  )
}
