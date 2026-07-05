import Counter from './components/Counter'
import './App.css'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const increases = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <>
      <Counter title="+" click={increases} />
      <Counter title="Reset" click={reset} />
      <Counter type="Number" title={count} />
    </>
  )
}

export default App
