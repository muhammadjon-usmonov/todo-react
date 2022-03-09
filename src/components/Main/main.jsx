// import React from 'react';
// import './main.css';

//     function TodoList(){
//         const deleteBtn = (evt)=>{
//             const todoId = evt.target.dataset.todoId - 0;

//             const filtered = todos.filter(todo=>todo.id !== todoId)
//             setTodos(filtered);
//         }

//         const checkInput = (evt)=>{
//             const todoId = evt.target.dataset.todoId - 0;
//             const foundTodo = todos.find((todo)=> todo.id === todoId)

//             foundTodo.isComplited = !foundTodo.isComplited;
//             setTodos([...todos])
//         }

//         const [todos, setTodos] = React.useState([
//             {
//                 id:0,
//                 text: "Wake up",
//                 isComplited:false,
//             },

//             {
//                 id:1,
//                 text:"get up",
//                 isComplited:false,
//             }
//         ]);
    
  

//     return(
//         <main className="main">
//             <li className="item__inpout">
//                 <input onKeyUp={(evt) => {
//                     evt.preventDefault()
//                     if (evt.code === 'Enter') {
//                         const InputNewValue = {
//                             id: todos[todos.length - 1]?.id + 1 || 0,
//                             text: evt.target.value.trim(),
//                             isComplited: false,
//                         }
                        
                        
//                         setTodos([...todos, InputNewValue])
//                         evt.target.value = null
//                     }
//                 }} className="todo__input" type="text" placeholder="What needs to be done?" />
//                 <span className="text__before"></span>
//             </li>

//             <ul className="todolist">
//                 {todos.length > 0 &&
//                     todos.map((todo) => (
//                         <InputCheckBox
//                             key={todo.id} todo={todo}
//                             deleteBtn={deleteBtn}
//                             checkInput={checkInput}>
//                             {todo.text}
//                         </InputCheckBox>
//                     ))}
//             </ul>
//         </main>









//         // <main className='todos'>  
//         //     <h1 className='todos__title'>todos</h1>

//         //     <form className="form">
//         //         <input className='todos__input' type="text" placeholder='What needs to be done?' />
//         //         {/* <button>Add</button> */}
//         //         <span className='todos__line'></span>
//         //     </form> 

//         //     <ul className='todos__list'>
//         //         <li className='todos__item'>
//         //             <input className='todos__check-input visually-hidden' type="checkbox" />
//         //             <span className='toggle'></span>
//         //             <span className='todos__text'> get up</span>
//         //             <button className='todos__del-btn'>
//         //                 &times;    
//         //             </button>
//         //         </li>
//         //     </ul>
//         //     <div className='todos__bottom'>
//         //         <span className='todos__digit'>2 items left</span>

//         //       <div className="todos__btn">
//         //         <button className='todos__btn-all'>
//         //                 All
//         //             </button>
//         //             <button className='todos__btn-active'>
//         //                 Active
//         //             </button>
//         //             <button className='todos__btn-comp'>
//         //                 Completed
//         //             </button>
//         //         </div>

//         //         <button className='todos__clear'>
//         //             Clear
//         //         </button>
//         //     </div>
//         // </main>
//     );
// }

// export default TodoList;