import React, {useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form'
import Todos from './components/Todos'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  console.log(status)
  return (
    <div className="App">
      <header>
        <h1>YM's Todo List</h1>
      </header>
      <Form todos={todos} 
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
