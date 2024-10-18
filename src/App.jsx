import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeView from './routes/HomeView'
import CreateTaskView from "./routes/CreateTaskView"
import { TaskProvider } from "./context/TaskContext"

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
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </TaskProvider>
      </BrowserRouter>
    </>
  )
}

export default App
