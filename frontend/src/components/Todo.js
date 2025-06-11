import { RiDeleteBin3Fill } from "react-icons/ri";
import { update_todo } from "../api/endpoints";
import { useState } from "react";
const Todo = ({id ,todo_name,completed, deleteTodo}) =>{
    const[isChecked , setChecked] =useState(completed)

    const handleDelete =async () =>{
        deleteTodo(id);
    }
    const handleComplete = async () =>{
        update_todo(id,!isChecked);
        setChecked(!isChecked)
    }
    return(
        <div>
            <div className="todo">
                <div className="todo-container">
                    <input checked={isChecked} onClick={handleComplete} type="checkbox"></input>
                    <h3>{todo_name}</h3>
                    <RiDeleteBin3Fill onClick ={handleDelete} size='20px' />
                </div>
            </div>

        </div>
    )
}


export default Todo;