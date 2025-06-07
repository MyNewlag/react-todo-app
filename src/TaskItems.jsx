import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import Item from "./Item";

 export default function TaskItems(){

    const {taskItems,setTaskItems}=useContext(TaskContext);



    return(
            <div>

                <ul className="list-group m-0 p-0 mt-2">
                    {
                        taskItems.map(t=>(
                            <Item key={Math.random()} t={t}/>
                        ))
                    }     
                </ul> 
        
        </div>

    )
       

}

