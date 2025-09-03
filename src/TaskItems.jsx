import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import Item from "./Item";

 export default function TaskItems(){

    const {taskItems}=useContext(TaskContext);

    return(
         <div>
             <ul className="list-group m-0 p-0 mt-2">
                { taskItems.map(taskItem=>(
                    <Item key={Math.random()} taskItem={taskItem}/>
                ))
                }     
             </ul> 
        </div>

    )
}
