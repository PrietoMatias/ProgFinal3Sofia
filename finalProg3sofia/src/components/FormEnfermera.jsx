import { useState } from "react"
import { BASE_URL } from "../constants/constants"
import axios from "axios"
const FormEnfermera = () => {
    const [datos, setDatos] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };

    const handleSubmit = async (e)=>{
        try {
       const response = await axios.post(`${BASE_URL}/insertar/enfermera`, datos)
       const datas = response.data
       console.log(datas)     
        } catch (error) {
            console.log('Error interno del servidor', error)
        }
    }
  return (
    <>
   <div className="container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" onChange={handleChange}/>
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" onChange={handleChange}/>
        <label htmlFor="apellido">Mail</label>
        <input type="text" name="mail" onChange={handleChange}/>
        <label htmlFor="clave">Clave</label>
        <input type="text" name="nombre" onChange={handleChange}/>
        <button className="btn color green">Subir</button>
        <button className="btn color red">Cancelar</button>
    </form>
   </div>
    </>
  )
}

export default FormEnfermera