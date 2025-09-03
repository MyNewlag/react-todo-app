import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import Swal from "sweetalert2";


export default function Item ({taskItem}){


     const {taskItems,setTaskItems}=useContext(TaskContext);
     const [edit,setEdit]=useState(false)
     const [editText,setEditText]=useState("");



         const changeIcon=()=>{
              const newArr = taskItems.map(item => {
              if (item.id == taskItem.id) {
                    return {...item, done: !item.done };
                  }
                  return item;
                });
                setTaskItems(newArr);
            }
                
        
        // const changeIcon=(id)=>{
        //   const index=taskItems.findIndex(t=>t.id==id)
        //     const newArr=[...taskItems]
        //     newArr[index].done = !newArr[index].done
        //     setTaskItems(newArr)
        // }


    const deleteItem=(taskItem)=>{
     Swal.fire({
        title: `عملیات حذف `,
        text: `آیا از حذف آیتم ${taskItem.title} اطمینان دارید؟`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله!",
        cancelButtonText : "انصراف",
        }).then((result) => {
        if (result.isConfirmed) {
            setTaskItems(taskItems.filter(i=>i.id!=taskItem.id))
    Swal.fire({
        title: "عملیات موفق",
        icon: "success"
    });
  }
});
    }


    const editItem=()=>{
        setEdit(true)
        setEditText(taskItem.title)
    }


     const newEditTask = (e) => {
         e.preventDefault();
        const newArr = taskItems.map(item => {
          if (item.id === taskItem.id) {
             return { ...item, title: editText };
            }
         return item;
          });

        setTaskItems(newArr);
        setEdit(false);
    };


return(

    <div>
      { edit ?(
            <form >
                <div className="form-control d-inline-flex p-2 bd-highlight" >
                    <input type="text" className="form-control" value={editText}
                     onChange={(e)=>setEditText(e.target.value)}/>
                    <button onClick={newEditTask} className="btn btn-warning me-1">ثبت</button>
                </div>
            </form>
        ):(
            <li className={`list-group-item d-flex justify-content-between 
            ${taskItem.done ?'list-group-item-info' : ''}`}>
                {taskItem.title}

                <span>
                    <i onClick={()=>changeIcon(taskItem.id)} className= {`me-3 pointer transition_200 text_hover_shadow 
                    ${taskItem.done ? 'fas fa-times text-warning' : 'fas fa-check text-success'}`}></i>
                        
                    <i onClick={()=>deleteItem(taskItem)}
                    className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" ></i>
                            
                    <i onClick={editItem}
                    className="me-3 pointer fas fa-edit text-info transition_200 text_hover_shadow">
                    </i>   
                </span>
            </li>
            )
        }
    </div>
    )
}