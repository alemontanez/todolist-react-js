import { useState, createContext } from "react"
import { toast } from "sonner"

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([])
  const [taskId, setTaskId] = useState(1)

  const addTask = (task) => {
    setTaskList(prevTaskList => {
      const taskExist = prevTaskList.some(t => t.id === task.id)
      if (taskExist) {
        return prevTaskList.map(t => (t.id === task.id ? task : t))
      }
      return [...prevTaskList, task]
    })
  }

  const deleteTask = (id) => {
    toast.warning('¿Estás seguro?', {
      position: 'bottom-center',
      duration: Infinity,
      description: 'Se eliminará la tarea permanentemente',
      action: {
        label: 'Si',
        onClick: () => {
          setTaskList(taskList.filter(task => task.id !== id))
          toast.success('Se eliminó la tarea exitosamente', {
            position: 'bottom-center'
          })
        }
      }
    })
  }

  const clearTaskList = () => {
    toast.warning('¿Estás seguro?', {
      position: 'bottom-center',
      duration: Infinity,
      description: 'Se eliminarán todas las tareas',
      action: {
        label: 'Si',
        onClick: () => {
          setTaskList([])
          toast.success('Se eliminaron todas las tareas exitosamente', {
            position: 'bottom-center'
          })
        }
      }
    })
  }

  const findTask = (id) => taskList.find(task => task.id == id)

  return (
    <TaskContext.Provider value={[taskList, addTask, deleteTask, clearTaskList, taskId, setTaskId, findTask]}>
      {children}
    </TaskContext.Provider>
  )
}