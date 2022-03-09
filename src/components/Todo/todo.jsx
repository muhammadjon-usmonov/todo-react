import React from "react"
import "../..//App.css";
import '../Main/main.css';


function Todo({children, todo, handleDelete, handleCheck}){
     return (
        <li className="todos__item" >
            <input  className="todos__check"
                type="checkbox"  
                data-todo-id = {todo.id}
                onClick = {handleCheck}
                defaultChecked = {todo.isCompleted} 
            />
           <span className="todos__text"  style={{ textDecoration: todo.isCompleted ? 'Line-through': 'none'}}> {children} </span>
            <button className="todos__delete" data-todo-id={todo.id} onClick={handleDelete} >
                 &times; 
            </button>
            
        </li>
    )
}


export default Todo;