import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TaskContext } from "../context/TaskContext"
import '../styles/TaskForm.css'

export default function TaskForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [taskList, addTask, , , taskId, setTaskId] = useContext(TaskContext)

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      id: taskId
    }
    setTaskId(taskId + 1)
    console.log(newTask)
    addTask(newTask)
    reset()
  }

  return (
    <>
      <div className="task-form">
        <form onSubmit={handleSubmit(onSubmit)} >
          <h2>Crear nueva tarea</h2>
          <label htmlFor="title">Título de la tarea</label>
          <input
            placeholder="Introduce el título de la tarea"
            type="text"
            {
            ...register('title', {
              required: {
                value: true,
                message: 'El título no puede estar vacío'
              },
              maxLength: {
                value: 100,
                message: 'El título no debe tener más de 100 caracteres'
              }
            })
            }
          />
          {
            errors.title && <span>{errors.title.message}</span>
          }

          <label htmlFor="condition">Estado</label>
          <select {...register('condition')}>
            <option value="pendientes">Pendiente</option>
            <option value="en-progreso">En progreso</option>
            <option value="completadas">Completada</option>
          </select>

          <label htmlFor="priority">Prioridad</label>
          <select {...register('priority')}>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>

          <button>Crear tarea</button>
        </form>
      </div>
    </>
  )
}