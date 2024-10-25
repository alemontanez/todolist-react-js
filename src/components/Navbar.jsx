import { Link } from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link to={'/'}>
            <li>
              <span><img src="https://cdn-icons-png.flaticon.com/128/6203/6203186.png" /><b>JourneyForge</b></span>
            </li>
          </Link>
          <Link to={'/'}>
            <li>
              <span>Todas las tareas</span>
            </li>
          </Link>
          <Link to={'/pendientes'}>
            <li>
              <span>Pendientes</span>
            </li>
          </Link>
          <Link to={'/en-progreso'}>
            <li>
              <span>En progreso</span>
            </li>
          </Link>
          <Link to={'/completadas'}>
            <li>
              <span>Completadas</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to={'/crear-tarea'}>
            <li>
              <span className="task-button">+ Nueva Tarea</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}