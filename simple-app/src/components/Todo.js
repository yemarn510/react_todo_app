import React from 'react';

function Todo({ text, todo, todos, setTodos}){
    function deleteHandler(){
        setTodos(todos.filter((element) => element.id !== todo.id))
    };

    function setDone(){
        setTodos(todos.map((element) => {
            if(element.id === todo.id){
                return{
                    ...element, finished: !element.finished
                }
            }
            return element;
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.finished ? "completed" : ""}`}> { text }</li>
            <button className="complete-btn" onClick={setDone}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;