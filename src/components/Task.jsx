import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { Link } from "react-router-dom"
import '../styles/Task.css'

export default function Task({ task }) {

  const [, , deleteTask] = useContext(TaskContext)

  let condition = ''
  if (task.condition === 'pendientes') condition = 'pendiente'
  if (task.condition === 'en-progreso') condition = 'en progreso'
  if (task.condition === 'completadas') condition = 'completada'

  return (
    <>
      <ul>
        <li>{task.title}</li>
        <li className={task.condition}>{condition}</li>
        <li className={task.priority}>{task.priority}</li>
        <li>
          <Link to={`/tarea/${task.id}`}>
            <button><img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" />Modificar</button>
          </Link>
          <button onClick={() => deleteTask(task.id)}><img src="https://cdn-icons-png.flaticon.com/128/4387/4387288.png" />Eliminar</button>
        </li>
      </ul>
    </>
  )
}