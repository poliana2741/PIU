import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cor from './componentes/Cor'
import AlbumFetcher from './componentes/Filtro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Cor/>
      <AlbumFetcher />

    </>
  )
}

export default App
