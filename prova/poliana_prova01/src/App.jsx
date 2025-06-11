import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componetes/Contador'
import ListarCarros from './componetes/ListarCarros'
// aqui foi importado os componentes 'contador e lista' para q sejam redenrizados na tela

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contador /> 
      <ListarCarros />
    </>
  )
}

export default App
