import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";


export default function Item ({t}){


     const {taskItems,setTaskItems}=useContext(TaskContext);
     const [edit,setEdit]=useState(false)
     const [editText,setEditText]=useState("");



         const changeIcon=(id)=>{
                const newArr = taskItems.map(item => {
              if (item.id == t.id) {
                    return { ...item, done: !item.done };
                  }
                  return item;
                });
                setTaskItems(newArr);
                }
                
        
        // const changeIcon=(id)=>{
        //         const item= taskItems.findIndex(u=>u.id==id)
        //     const newArr=[...taskItems]
        //     newArr[item].done=!newArr[item].done
        //     setTaskItems(newArr)
        //     }


    const deleteItem=(id)=>{
    setTaskItems(taskItems.filter(i=>i.id!=id))
    }

    

    const editItem=()=>{
        setEdit(!edit)
        setEditText(t.title)
    }


     const newEditTask = (e) => {
         e.preventDefault();

        const newArr = taskItems.map(item => {
          if (item.id === t.id) {
             return { ...item, title: editText };
            }
         return item;
          });

        setTaskItems(newArr);
        setEdit(false);
    };


         return(

            <div>
                {
                    edit ?(
                    <form >
                    <div className="form-control d-inline-flex p-2 bd-highlight" >
                    <input type="text" className="form-control" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                    <button onClick={newEditTask} className="btn btn-warning me-1">ثبت</button>
                    </div>
                    </form>
                    ):(
                    <div>   
                
                     <li className={`list-group-item d-flex justify-content-between 
                            ${t.done ?' list-group-item-success' :''}`}>
                        {t.title}
                        <span>

                        <i onClick={()=>changeIcon(t.id)} className= {`me-3 pointer transition_200 text_hover_shadow 
                        ${t.done ? 'fas fa-times  text-warning' : 'fas fa-check text-success'}`}></i>
                            
                        <i onClick={()=>deleteItem(t.id)}
                        className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" ></i>
                                
                            <i onClick={editItem}
                        className="me-3 pointer fas fa-edit text-danger transition_200 text_hover_shadow">
                        </i>   
                        </span>
                </li>

                    </div>
                    )
                }
            </div>
         
    )
}



//                      <form>
//                     <div className="form-control d-inline-flex p-2 bd-highlight" >
//                     <input type="text" className="form-control" value={editText} onChange={handlerEditTask} />
//                     <button onClick={newEditTask} className="btn btn-warning me-1">ثبت</button>
//                     </div>
//                     </form>