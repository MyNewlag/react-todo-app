import { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";


export default function TpoForm(){

    const {taskItems,setTaskItems}=useContext(TaskContext);
    const [addTask,setAddTask]=useState("")



  const addNewTask=(e)=>{
      e.preventDefault();
    const newItem={
        id:Math.random(),
        title:addTask,
        done:false
    }
    setTaskItems([
        ...taskItems , newItem
    ])
    setAddTask("")
  }


    return(
        
        <Fragment>
                 <h4 className="text-center text-info text_shdow">به کدیاد خوش اومدید</h4>
                <form onSubmit={addNewTask}>
                     <div className="form-group d-flex">
                        <input type="text" className="form-control" value={addTask} onChange={(e)=>setAddTask(e.target.value)} />
                        <button  className="btn btn-success me-1">ثبت</button>
                    </div>
                </form>
        </Fragment>
    )
}