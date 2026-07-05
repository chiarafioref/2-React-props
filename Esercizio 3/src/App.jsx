import { useState } from 'react'
import Check from './components/Check'

function App() {
  const [isAcepted, setIsAcepted] = useState(false);


  return (
    <>
      <Check isAcepted={isAcepted} onChange={() => setIsAcepted(!isAcepted)} />
    </>
  )
}

export default App;
