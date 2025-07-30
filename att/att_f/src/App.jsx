import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlbumFetcher from './componentes/AlbumFetcher'
import FormColorChanger from './componentes/FormColorChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <AlbumFetcher />
      <FormColorChanger />

    </>
  )
}

export default App
