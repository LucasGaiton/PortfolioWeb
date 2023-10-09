import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ParticlesBackground from './components/ParticlesBackground'
//importamos el estilo 
import S from "../src/App.module.css"
import image from "../Imagenes/WhatsApp Image 2023-09-20 at 12.33.20 PM.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={S.app}>
      <div className='Conteiner1'>
        <div className='foto'>
          <img src={image} alt="" />
        </div>
        <div className='datos'>
          <div className='titile'></div>
          <div className='description'></div>
        </div>
      </div>
      <div className='conteiner2'>
        <div className='carrusel'></div>
      </div>


    </div>
  )
}

export default App
