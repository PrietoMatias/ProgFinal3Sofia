import { Link } from "react-router-dom"

const Layout = ({children}) => {
  return (
    <>
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to={'/LoginAdmin/principal'}>Pacientes</Link></li>
        <li><Link to={'/LoginAdmin/turnos'}>Turnos</Link></li>
      </ul>
      <button className="btn color red">Cerrar sesion</button>
    </div>
  </nav>
{children}
    </>
  )
}

export default Layout