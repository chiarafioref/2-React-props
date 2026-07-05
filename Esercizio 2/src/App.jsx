import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {


  const [index, setIndex] = useState(0);
  const colors = ["btn-danger", "btn-primary", "btn-success", "btn-warning", "btn-info"];


  return (
    <>
      <Button className={"btn " + colors[index]}
        click={() => setIndex((index + 1) % colors.length)} />

    </>
  )
}

export default App;
