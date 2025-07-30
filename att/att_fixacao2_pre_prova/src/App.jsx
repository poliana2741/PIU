import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './componentes/ThemeToggle'
import ColorInput from './componentes/ColorInput'
import LoginForm from './componentes/LoginForm'
import ListaUsuarios from './componentes/ListaUsuarios'
import GerenciadorTarefas from './componentes/GerenciadorTarefas'
import AlbumListByUserId from './componentes/AlbumListByUserId'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>



     
      <ThemeToggle />
      {/* <ColorInput />a */}
      <LoginForm />
      <ListaUsuarios />
      <GerenciadorTarefas />
      <AlbumListByUserId />


    </>
  )
}

export default App
