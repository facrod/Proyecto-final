import React, { useState, useContext, useEffect } from 'react'
import { DataProvider } from '../../context/DataContext'
import { getProductById } from '../../services/productosServices'
import { Icon } from '@iconify/react';
import "./ProductoSeleccionado.css"


export const ProductoSeleccionado = () => {
  const contexto = useContext(DataProvider)  
  let id = contexto.productId 

  const [productoId, setProductoId] = useState({})

  useEffect(()=> {
    getProductById(id)
    .then(res => {
      setProductoId(res.data)
      }).
    catch(err => console.log(err))
  },[])

  console.log(productoId)
  return (
    <div className='contenedorProductosId'>
      <div className="contenedorProductosId-divs">
        <div className='contenedorImagenProductoId'>
          <img src={productoId.foto_url} alt="" className='imagenProductoId' />
        </div>
        <div className='bodyProductoId'>
          <h1>{productoId.producto}</h1>
          <p>{productoId.descripcion}</p>
          <p>${productoId.precio}</p>
          <p>Stock: {productoId.stock}</p>
          <button className='btn btn-outline-success botonProductoId'>Comprar</button>
          <button className='btn btn-outline-primary botonProductoId'><Icon icon="material-symbols:shopping-cart-outline" />Agregar al carrito</button>

        </div>
      </div>
    </div>
  )
}


/*    <div className="container parent">
      <div className="row">
        <div className="col image-parent">
          <img src={productoId.data.foto_url} className='imgProductoSeleccionado'/>
        </div>
        <div className="col detalle">
          <h5>{productoId.data.producto}</h5>
          <div className="precio-like">
          <span className="precio">{productoId.data.precio}</span>
          <span>
          <svg id="like" className="like" stroke="#f24244" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
          </span>
        </div>
        <span>Detalles</span>
        <p>{productoId.data.descripcion}</p>
        <a className="btn btn-orange btn-lg">Ir al comprar!</a>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clipRule ="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>
      </div>
      </div>
    </div>*/


/*    producto: "",
    descripcion: "",
    precio: "",
    foto_url: "",
    stock: "",*/