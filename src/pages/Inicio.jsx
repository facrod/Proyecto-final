import React from 'react'
import Carrousel from '../components/Carrousel/Carrousel'
import Productos from '../components/Productos/Productos'

export const Inicio = () => {
  return (
    <div className='d-flex flex-wrap justify-content-between'>
        <Carrousel/>
        <Productos/>
    </div>
  )
}
