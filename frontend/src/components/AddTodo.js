import { useState } from "react";
import './components.css';
import { MdOutlineAddCircleOutline } from "react-icons/md";
const AddTodo = ({addTodo}) =>{
    const [input , setInput] = useState('')
    const handleAdd = () =>{
        addTodo(input);
        setInput('');
    }
    return(
        <div className="add-todo">
           <input 
             value={input}
             onChange={(e) => setInput(e.target.value)} 
             className="add-input" 
             type='text'
             placeholder="Enter a new todo..."
           ></input> 
           
           <MdOutlineAddCircleOutline onClick={handleAdd} className="add-button" />
           {/* <button onClick={handleAdd} className="add-button">Add Todo</button> */}
        </div> 
    )
}

export default AddTodo;