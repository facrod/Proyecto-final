import React from "react";
import {useForm} from "react-hook-form";


const Contacto = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) =>{
    console.log(data);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-100 mt-1">
      <label className="form-label">Nombre</label>
      <input type="text" name="nombre" className="form-control"></input>

      <label className="form-label">Correo Electrónico</label>
      <input type="email" name="correo electronico" className="form-control"></input>

      <label className="form-label">Asunto</label>
      <input type="text" name="asunto" className="form-control"></input>
      <label className="form-label">Mensaje</label>

      <textarea className="form-control" name="mensaje"/>
      <input type="submit"  value= "Enviar" className="btn btn-warning mt-1 w-100"></input>
    </form>
  )

}

export default Contacto;