import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeView from './routes/HomeView'
import CreateTaskView from "./routes/CreateTaskView"
import { TaskProvider } from "./context/TaskContext"
import UpdateTaskView from "./routes/UpdateTaskView"

function App() {

  return (
    <>
      <BrowserRouter>
        <TaskProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/:taskCondition' element={<HomeView />} />
            <Route path="/crear-tarea" element={<CreateTaskView />} />
            <Route path="/tarea/:id" element={<UpdateTaskView />} />
            <Route path=":taskCondition/tarea/:id" element={<UpdateTaskView />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </>
  )
}

export default App
