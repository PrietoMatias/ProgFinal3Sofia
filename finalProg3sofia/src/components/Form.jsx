import axios from "axios"
import { useState } from "react"
import {BASE_URL} from '../constants/constants.js'

const Form = ({setForm, paciente_id}) => {
    const [datos, setDatos]= useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            console.log(paciente_id)
        const response = await axios.post(`${BASE_URL}/pacientes/${paciente_id}/historial`, datos)
        console.log('Insertado con exito', response.data)
    }catch(error){
        console.log('Error en el servidor', error)
    }}
  return (
    <>
    <div className="container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="fecha">Fecha</label>
        <input type="date" name="fecha" onChange={handleChange} required />
        <label htmlFor="estadoanimo">Estado de Animo</label>
        <input type="text" name="estadoanimo" onChange={handleChange} required/>
        <label htmlFor="notas">Observaciones</label>
        <input type="text" size={'25px'} name="observaciones" onChange={handleChange} required />
        <button type="submit">Cargar</button>
        <button onClick={()=>setForm(false)}>Cancelar</button>
    </form>
    </div>
    </>
  )
}

export default Form