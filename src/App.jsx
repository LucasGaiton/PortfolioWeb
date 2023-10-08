import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ParticlesBackground />
      <button onClick={()=> setCount(count + 1)}>Hola</button>
      <p>{count}</p>
      

    </div>
  )
}

export default App
