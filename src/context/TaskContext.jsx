import { useState, createContext } from "react"

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([])
  const [taskId, setTaskId] = useState(1)

  const addTask = (task) => setTaskList([...taskList, task])

  const deleteTask = (id) => setTaskList(taskList.filter(task => task.id !== id))

  const clearTaskList = () => setTaskList([])

  return (
    <TaskContext.Provider value={[taskList, addTask, deleteTask, clearTaskList, taskId, setTaskId]}>
      {children}
    </TaskContext.Provider>
  )
}