import React from 'react'
import { CustomDropZone } from '../components/Dropzone/CustomDropZone'
export const Favoritos = () => {
  return (
    <div>
      <h1>Favoritos</h1>
      <CustomDropZone>
        <p>Subir foto</p>  
      </CustomDropZone>  
    </div>
  )
}
