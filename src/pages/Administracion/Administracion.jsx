import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import "./Administracion.css"
import { deleteProducts, getProducts } from '../../services/productosServices';
import { addProducts } from '../../services/productosServices';
import { CustomDropZone } from '../../components/Dropzone/CustomDropZone';

export const Administracion = () => {

const [productoNuevo, setProductoNuevo] = useState({
    producto: "",
    precio: "",
    stock: "",
    categoria: "",
    descripcion: "",
})
function handleProducto(e) {
    setProductoNuevo({
      ...productoNuevo,
      producto: e.target.value,
    })}
  
  
  function handlePrecio(e) {
    setProductoNuevo({
      ...productoNuevo,
      precio: e.target.value,
    })}
  
  function handleStock(e) {
    setProductoNuevo({
      ...productoNuevo,
      stock: e.target.value,
    })}
  
  function handleCategoria(e) {
    setProductoNuevo({
      ...productoNuevo,
      categoria: e.target.value,
    })
  }
  
  function handleDescripcion(e) {
    setProductoNuevo({
      ...productoNuevo,
      descripcion: e.target.value,
    })
  }
function sendProduct() {
  const { producto, precio, descripcion, stock, categoria } = productoNuevo;

  if (producto || precio || descripcion || stock || categoria ) {
    addProducts(productoNuevo)
    .then(res =>{
        console.log(res)
    })
    .catch(err => console.log(err))  
    window.location.reload();
  } else {
    alert("rellena todos los campos")
  }
  }

function handleDeleteProduct (e) {
  const Id = e.target.id
  deleteProducts(Id).
    then(res => {
      console.log(res)
    }).
    catch(err => console.log(err))
  window.location.reload()
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


  return (
    <div className='contenedorAdmin'>
        <CustomDropZone>
          <h1>dropea</h1>
        </CustomDropZone>
        <div className='contenedorAdmin-inputs'>
            <input type="text" placeholder='producto' onChange={handleProducto}/>
            <input type="number" placeholder='precio' onChange={handlePrecio}/>
            <input type="number" placeholder='stock' onChange={handleStock}/>
            <input type="text" placeholder='categoria' onChange={handleCategoria}/>
            <textarea name="" id="" cols="10" rows="5" placeholder='descripcion' onChange={handleDescripcion}/>
            <button className='btn btn-primary my-2' onClick={sendProduct}>Enviar</button>
        </div>  
        <div className='contenedorAdmin-table'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoria</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((product, index) => {
                        return<tr key={index}>
                        <td>{product._id}</td>                            
                        <td>{product.producto}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.precio}</td>
                        <td>{product.stock}</td>
                        <td>{product.categoria}</td>
                        <td><button id={product._id} className='btn btn-danger' onClick={(handleDeleteProduct)}>eliminar</button></td>
                    </tr>
                    })}
                </tbody>
            </Table>
        </div>
    </div>
  )
}
