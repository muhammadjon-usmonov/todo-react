import './App.css';
import '..//src/components/Main/main.css';

import React from 'react';
import "./components/Todo/todo";
import Todo from './components/Todo/todo';
// import Button from './components/Button/button';
// import { fireEvent, waitFor } from '@testing-library/react';


function App() {

  const [todos, setTodos] = React.useState(JSON.parse(window.localStorage.getItem('todos')) || [] )
  const [type, setType ] = React.useState("all");
   


  const handleDelete = (evt)=>{
    const todoId = evt.target.dataset.todoId - 0;

    const filteredTodos = todos.filter(todo => todo.id !== todoId)

    window.localStorage.setItem('todos', JSON.stringify(filteredTodos))

    setTodos(filteredTodos)
  }


  const handleCheck = (evt)=>{
      const todoId =  evt.target.dataset.todoId - 0;

      const foundTodo = todos.find((todo)=> todo.id===todoId);
      foundTodo.isCompleted = !foundTodo.isCompleted;

      window.localStorage.setItem('todos', JSON.stringify([...todos]))

      setTodos([...todos]);
  };


  const getTodoByType = (_type, _todos) => {
    if(_type === "all"){
      return _todos;
    }

    if(_type === "completed"){
      return _todos.filter(t => t.isCompleted);

    }

    if(_type === "uncompleted"){
      return _todos.filter(t => !t.isCompleted);
      
    }

    else{
      return [];
    }
  };

  const count = todos.filter(todo=> ! todo.isCompleted).length

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

            window.localStorage.setItem('todos', JSON.stringify([...todos,newTodo]))
            setTodos([...todos,newTodo]);
            evt.target.value = null; 
          }
        }}
        />
          
        <ul className='todos__list'>
           {
            todos.length > 0 && 
            getTodoByType(type, todos).map((todo)=>(
             <Todo key={todo.id} todo={todo}  handleDelete = {handleDelete}  handleCheck = {handleCheck}>
               {todo.title}
             </Todo>
            ))
          }
        </ul>

          


          <div className='todos__bottom'>
          <span className='todos__digit'>{count} items left </span>

            <button className='todos__bottom-btn todos__all' onClick={() => setType('all')}>all</button>
            <button className='todos__bottom-btn todos__com' onClick={() => setType('completed')}>completed</button>
            <button className='todos__bottom-btn todos__uncom' onClick={() => setType('uncompleted')}>uncompleted</button>
          </div>
      </main>
  );
}
export default App;

  
