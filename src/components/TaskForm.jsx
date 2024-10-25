import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { TaskContext } from "../context/TaskContext"
import '../styles/TaskForm.css'
import { useNavigate } from "react-router-dom"

export default function TaskForm({ taskProp }) {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  useState(() => {
    if (taskProp) {
      setValue('title', taskProp.title)
      setValue('condition', taskProp.condition)
      setValue('priority', taskProp.priority)
    }
  }, [])

  const [, addTask, , , taskId, setTaskId] = useContext(TaskContext)

  const onSubmit = (data) => {
    if (taskProp) {
      const updatedTask = {
        ...data,
        id: taskProp.id
      }
      addTask(updatedTask)
      reset()
      navigate('/', { state: { renderToast: true, toastContent: 'Se modificó la tarea exitosamente' } })
    } else {
      const newTask = {
        ...data,
        id: taskId
      }
      setTaskId(taskId + 1)
      addTask(newTask)
      reset()
      navigate('/', { state: { renderToast: true, toastContent: 'Se creó la tarea exitosamente' } })
    }
  }

  return (
    <>
      <div className="task-form">
        <form onSubmit={handleSubmit(onSubmit)} >
          {taskProp
            ? <h2>Actualizar tarea</h2>
            : <h2>Crear nueva tarea</h2>
          }
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
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
          {taskProp
            ? <button>Modificar tarea</button>
            : <button>Crear tarea</button>
          }
        </form>
      </div>
    </>
  )
}