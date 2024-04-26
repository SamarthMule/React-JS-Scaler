import React, {useState} from 'react'
import './App.css'
import InputContainer from './components/InputContainer'
import TodoContainer from './components/TodoContainer'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  function writeTodo(e){
    setInputValue(e.target.value)
  }
  function addTodo(){
    if (inputValue != '') {
      setTodos((prevTodos) => [...prevTodos, inputValue])
      setInputValue('')
    }
  }
  function deleteTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) => {
    return prevTodosIndex != todoIndex;
    }));
  }
  return (
    <main>
      <h1>Todo List</h1>
      <InputContainer inputValue={inputValue} writeTodo={writeTodo} addTodo={addTodo}/>
      <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
