import { Link } from "react-router-dom"

const Layout = ({children}) => {
  return (
    <>
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to={'/principal'}>Pacientes</Link></li>
        <li><Link to={'/turnos'}>Turnos</Link></li>
        <li><Link to={'/enfermeras'} >Enfermeras</Link></li>
      </ul>
      <button className="btn color red">Cerrar sesion</button>
    </div>
  </nav>
{children}
    </>
  )
}

export default Layout