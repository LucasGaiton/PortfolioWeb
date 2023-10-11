import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ParticlesBackground from './components/ParticlesBackground'
//importamos el estilo 
import S from "../src/App.module.css"
import image from "../Imagenes/yo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={S.app}>
      <div className='Conteiner1'>
        <div className={S.foto}>
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
