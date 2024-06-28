import { useState } from "react"
import { BASE_URL } from "../constants/constants"
import axios from "axios"

const FormHome = ({setAgregar}) => {
    const [datos, setDatos] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };

    const handleSubmit = async (e)=>{
      e.preventDefault()
        try {
       const response = await axios.post(`${BASE_URL}/insertar/paciente`, datos)
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
    <input type="text" name="apellido" onChange={handleChange} />
    <label htmlFor="edad">Edad</label>
    <input type="number" name="edad" onChange={handleChange} />
    <label htmlFor="telefono">Telefono</label>
    <input type="text" name="telefono" onChange={handleChange} />
    <label htmlFor="mail">Mail</label>
    <input type="text" name="mail" onChange={handleChange} />
    <label htmlFor="obrasocial">Obra Social</label>
    <input type="text" name="obrasocial" onChange={handleChange} />
    <button type="submit" className="btn color green">Subir</button>
    <button onClick={()=>setAgregar(false)} className='btn color yellow'>Regresar</button>
    </form>
    </div>
    </>
  )
}

export default FormHome