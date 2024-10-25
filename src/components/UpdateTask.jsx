import { useContext } from "react"
import { useParams } from "react-router-dom"
import { TaskContext } from "../context/TaskContext"
import TaskForm from "./TaskForm"

export default function UpdateTask() {

  const { id } = useParams()
  const [, , , , , , findTask] = useContext(TaskContext)

  const task = findTask(id)

  return (
    <>
      <TaskForm taskProp={task} />
    </>
  )
}