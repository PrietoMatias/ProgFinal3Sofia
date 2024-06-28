import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Turnos from './pages/Turnos'
import Index from './pages/Index'
import LoginAdmin from './pages/LoginAdmin'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>}  />
      <Route path="/LoginAdmin/turnos" element={<Turnos/>} />
      <Route path="/LoginAdmin/principal" element={<Home/>} />
      <Route path="/LoginAdmin" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
