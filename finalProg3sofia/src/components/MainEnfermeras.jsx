import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/constants"

const MainEnfermeras = () => {
  const [datos, setDatos] = useState([])
  const getData = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/enfermeras`)
      const data = response.data
      setDatos(data)
    } catch (error) {
      console.log('Error en el servidor', error )
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {datos.length>0 ? datos.map( d=>
          <tr key={d._id}>
            <td>{d.nombre}</td>
            <td>{d.apellido}</td>
            <td>{d.mail}</td>
          </tr>):
          'Sin enfermeras registradas'
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default MainEnfermeras