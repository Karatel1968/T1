import './App.css'
import TaskItem from './components/TaskItem/TaskItem'
import type { Task } from './AboutTask/AboutTask'

function App() {

  enum task{
    title = "title"
  }

  return (
    <div>
      <TaskItem title={task.title}/>
    </div>
  )
}

export default App
