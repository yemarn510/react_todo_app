import React, {useState, useEffect} from 'react';
import './App.css';
// importing components
import Form from './components/Form'
import Todos from './components/Todos'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(()=>{
    filterHandler()
  }, [todos, status])

  function filterHandler(){
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.finished === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.finished === false))
        break;
      case 'all':
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>YM's Todo List</h1>
      </header>
      <Form todos={todos} 
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
            setFilteredTodos={setFilteredTodos}/>
      <Todos todos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
