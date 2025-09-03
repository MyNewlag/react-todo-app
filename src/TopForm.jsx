import { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";


export default function TpoForm(){

    const {taskItems,setTaskItems}=useContext(TaskContext)
    const [addTask , setAddTask]=useState("")

    const saveRecord=(e)=>{
        e.preventDefault()
        const newRecord={
            id:Math.random(),
            title:addTask,
            done:false
        }
        setTaskItems([...taskItems , newRecord])
        setAddTask("")
    }


    return(
        
        <Fragment>
             <h4 className="text-center text-info text_shdow"> خوش آمدید</h4>
             <form onSubmit={saveRecord}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control" value={addTask}
                    onChange={(e)=>setAddTask(e.target.value)} />
                    <button type="submit" className="btn btn-success me-1">ثبت</button>
                </div>
             </form>
        </Fragment>
    )
}
