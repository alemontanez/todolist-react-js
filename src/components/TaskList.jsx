import { useContext, useEffect } from "react"
import { TaskContext } from "../context/TaskContext"
import { useLocation, useParams } from "react-router-dom"
import { toast, Toaster } from "sonner"
import Task from "./Task"
import '../styles/TaskList.css'

export default function () {

  const [taskList, , , clearTaskList] = useContext(TaskContext)
  const { taskCondition } = useParams()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.renderToast) {
      toast.success(location.state.toastContent, {
        position: 'bottom-center',
      })
      location.state.renderToast = false
    }
  }, [location])

  return (
    <>
      <main>
        <div className="tasklist-container">
          {taskList.length === 0
            ? <h3>No hay tareas listadas</h3>
            : <>
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
                  .map((task) => (
                    <Task key={task.id} task={task} />
                  ))
                : taskList.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              {
                taskCondition === undefined &&
                <div className="button-clear">
                  <button onClick={() => clearTaskList()}><img src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png" />Borrar todas las tareas</button>
                </div>
              }
            </>
          }
        </div>
        <Toaster richColors closeButton />
      </main>
    </>
  )
}