import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { useParams } from "react-router-dom"
import Task from "./Task"
import '../styles/TaskList.css'

export default function () {

  const [taskList, , , clearTaskList] = useContext(TaskContext)
  const { taskCondition } = useParams()

  return (
    <>
      <main>
        <div className="tasklist-container">
        <h3>Lista de tareas</h3>
          <ul>
            <li>Título</li>
            <li>Estado</li>
            <li>Importancia</li>
            <li>Acciones</li>
          </ul>
          {taskCondition
            ? taskList
              .filter((task) => task.condition === taskCondition)
              .map((task, index) => (
                <Task key={index} task={task} />
              ))
            : taskList.map((task, index) => (
              <Task key={index} task={task} />
            ))}
            {taskList.length > 0 && <button onClick={() => clearTaskList()}>Limpiar lista</button>}
        </div>
      </main>
    </>
  )
}