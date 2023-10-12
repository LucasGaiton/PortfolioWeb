
//importamos el estilo 
import S from "../src/App.module.css"

//Hooks 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//importamos vistas 
import Home from "./views/Home/Home";

//importamos componentes 
import Nav from "./components/Nav/Nav";
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  //use location
  const location = useLocation()

  return (
    <div className={S.app}>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>



     


    </div>
  )
}

export default App
