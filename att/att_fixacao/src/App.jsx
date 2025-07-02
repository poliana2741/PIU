import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kanban from './componentes/Kanban'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Kanban />

    </>
  )
}

export default App
