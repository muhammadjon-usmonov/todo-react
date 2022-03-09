import './App.css';
import '..//src/components/Main/main.css';

import React from 'react';
import "./components/Todo/todo";
import Todo from './components/Todo/todo';
import Button from './components/Button/button';
import { fireEvent, waitFor } from '@testing-library/react';


function App() {

  const [todos, setTodos] = React.useState([
      {
        id:0,
        title:'wake up',
        isCompleted:false,
      },

      {
        id:1,
        title:'wake up',
        isCompleted:false,
      }
  ])


  const handleDelete = (evt)=>{
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(filteredTodos)
  }


  const handleCheck = (evt)=>{
      const todoId =  evt.target.dataset.todoId - 0;

      const foundTodo = todos.find((todo)=> todo.id===todoId);
      foundTodo.isCompleted = !foundTodo.isCompleted;

      setTodos([...todos]);
  }

  return (
      <main className='main'>
        <h1 className='todos__title'>
          todos
        </h1> 
        <input 
            className = "todos__input"
            type="text"
            placeholder='What needs to be done?'
            onKeyUp={(evt)=>{
         
            if(evt.code === 'Enter'){
            
              const newTodo = {
              id:todos[todos.length - 1]?.id + 1 || 0,
              title: evt.target.value.trim(),
              isCompleted:false,
            };

            setTodos([...todos,newTodo]);
            evt.target.value = null; 
          }
        }}
        />
          
        <ul className='todos__list'>
           {
            todos.length > 0 && todos.map((todo)=>(
             <Todo key={todo.id} todo={todo}  handleDelete = {handleDelete}  handleCheck = {handleCheck}>
               {todo.title}
             </Todo>
            ))
          }
        </ul>

          

          <Button>
               
          </Button>
      </main>
  );
}
export default App;
