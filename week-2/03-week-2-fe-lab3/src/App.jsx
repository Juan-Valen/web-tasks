import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Components
import Hello from './Hello';
import Bye from './Bye';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Hello />
        <Bye />
    </div>
  )
}

export default App
