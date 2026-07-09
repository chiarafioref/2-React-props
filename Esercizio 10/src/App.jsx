import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

function App() {
  const [list, setList] = useState([
    { id: 1, text: "Inviare mail", done: false },
    { id: 2, text: "Chiamare dottore", done: false },
    { id: 3, text: "Controllare messaggi", done: false },
    { id: 4, text: "Scrivere mail capo", done: false },
    { id: 5, text: "Prenotare vacanza", done: false },
    { id: 6, text: "Pagare bollette", done: false }
  ])
  const toggleTask = (idClick) => {
    setList(list.map(task =>
      task.id === idClick ? { ...task, done: !task.done } : task
    ));
  };



  return (
    <>
      <ToDoList tasks={list} toggleTask={toggleTask} />
    </>
  )
}

export default App;