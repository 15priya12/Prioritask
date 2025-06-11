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
                    <div className="todo-content">
                        <input checked={isChecked} onChange={handleComplete} type="checkbox" />
                        <h3>{todo_name}</h3>
                    </div>
                    <RiDeleteBin3Fill onClick={handleDelete} size='20px' />
                </div>
            </div>
        </div>
    )
}

export default Todo;