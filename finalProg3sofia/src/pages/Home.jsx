import Layout from "../components/Layout"
import MainHome from "../components/MainHome"
import FormHome from "../components/FormHome"
import TurnoForm from "../components/TurnoFrom"
import { useState } from "react"
const Home = () => {
  const [agregar, setAgregar] = useState(false);
  const [mostrarTurnos, setMostrarTurnos] = useState(false);

  return (
      <>
          <Layout>
              <button className="btn color green" onClick={() => {
                  setAgregar(true);
                  setMostrarTurnos(false);
              }}>Agregar Paciente</button>
              <button className="btn color blue" onClick={() => {
                  setAgregar(false);
                  setMostrarTurnos(true);
              }}>Asignar Turno</button>
              {!agregar && !mostrarTurnos && <MainHome />}
              {agregar && <FormHome setAgregar={setAgregar} />}
              {mostrarTurnos && <TurnoForm onTurnoAdded={(turno) => console.log(turno)} setMostrarTurnos={setMostrarTurnos}/>}
          </Layout>
      </>
  )
}

export default Home