import { Route, Routes } from 'react-router'
import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import taskData from './assets/taskData'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList taskData = {taskData} />} />

        <Route path="/task/:id" element={<TaskDetail taskData = {taskData} />} />
      
      </Routes>
    </>
  )
}

export default App
