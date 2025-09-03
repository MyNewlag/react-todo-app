
import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TpoForm from './TopForm'
import TaskItems from './TaskItems'
import { useState } from 'react'
import { TaskContext } from './TaskContext'




function App() {


  const [taskItems,setTaskItems]=useState([
    {
      id:1,
      title: "task 1",
      done:false
    },
    {
      id:2,
      title: "task 2",
      done:true
    },
    {
      id:3,
      title: "task 3",
      done:false
    }
  ])



  return (
    <TaskContext.Provider value={{taskItems,setTaskItems}}>
    <div className="container w-100 h-100 p-3">
         <div className="row h-100 justify-content-center align-align-items-start">
           <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
              <TpoForm  />
              <TaskItems  />
         </div>
        </div>
    </div>
    </TaskContext.Provider>

  )
}

export default App
