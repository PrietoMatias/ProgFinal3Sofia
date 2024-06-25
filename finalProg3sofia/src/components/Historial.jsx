import { useState } from "react"
import Form from "./Form"

const Historial = ({historial, setShowHistorial, paciente_id}) => {
    const [form, setForm] = useState(false)
  return (
    <>
    <div className="container">
        <button className='btn color yellow' onClick={()=>setShowHistorial(false)}>Regresar</button>
        <button className="btn color green" onClick={()=>setForm(true)}>Nueva Entrada</button>
        {!form ? <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Estado de Animo</th>
                    <th>Notas</th>
                </tr>
            </thead>
            <tbody>
                {historial.length>0 ?  historial.map(h=>
                    <tr key={h._id}>
                        <td>{h.fecha}</td>
                        <td>{h.estadoanimo}</td>
                        <td>{h.observaciones}</td>
                    </tr>
                )
                :
                'No hay historial cargado'}
            </tbody>
        </table>:
        <Form setForm={setForm} paciente_id={paciente_id}/>
        }
    </div>
    </>
  )
}

export default Historial