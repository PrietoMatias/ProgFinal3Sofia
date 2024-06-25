import Layout from "../components/Layout"
import MainHome from "../components/MainHome"
import FormHome from "../components/FormHome"
import { useState } from "react"
const Home = () => {
  const [agregar, setAgregar] = useState(false)
  return (
    <>
    <Layout>
      <button className="btn color green" onClick={()=>setAgregar(true)}>Agregar Paciente</button>
        {!agregar ? <MainHome/>: <FormHome setAgregar={setAgregar}/>}
    </Layout>
    </>
  )
}

export default Home