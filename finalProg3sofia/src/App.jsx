import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Enfermeras from "./pages/Enfermeras"
import Turnos from './pages/Turnos'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/enfermeras" element={<Enfermeras/>} />
      <Route path="/turnos" element={<Turnos/>} />
      <Route path="/principal" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
