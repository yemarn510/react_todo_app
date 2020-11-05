import React from 'react';

function Form({inputText, setInputText, todos, setTodos, setStatus}){
    function checkTextHandler(e){
        setInputText(e.target.value)
    }
    function submitTodoHandler(e){
        e.preventDefault(); // prevent refresh the whole page
        if(inputText){
            setTodos([...todos, {id: Math.random() * 1000 , text: inputText, finished: false}])
            setInputText('');
        }
    }
    function statusHandler(e){
        setStatus(e.target.value)
    }

    function saveToLocalStorage(){
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        }else{
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }
    return (
        <form>
            <input value={inputText} onChange={checkTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onChange={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;