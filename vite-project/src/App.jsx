import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Encabezado from './commponentes/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hola</h1>
    <Encabezado />
    </>
    )
}

export default App
