import { useState } from "react"
import FormEnfermera from "../components/FormEnfermera"
import Layout from "../components/Layout"
import MainEnfermeras from "../components/MainEnfermeras"

const Enfermeras = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <>
    <Layout>
    <button className="btn color green" onClick={()=>setShowForm(true)}>Agregar</button>
      {!showForm ? <MainEnfermeras/>: <FormEnfermera/>}  
    </Layout>
    </>
  )
}

export default Enfermeras