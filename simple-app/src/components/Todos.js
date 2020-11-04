import React from 'react';
// import components
import Todo from './Todo';

function Todos({todos, setTodos}){
    // console.log(todos.length)
    return(
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map(todo =>(
                   <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos}/>
               ))}
            </ul>
        </div>
    )
}

export default Todos;