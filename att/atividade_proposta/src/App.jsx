import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VehicleForm from './componentes/VehicleForm.jsx';
import Tabela from './componentes/Tabela.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Tabela />
    <VehicleForm />

    </>
  )
}

export default App
