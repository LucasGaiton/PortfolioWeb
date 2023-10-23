//importamos estilo 
import s from "../Nav/Nav.module.css"
import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className={s.nav}>
            <div className={s.links}>
                <Link to="/" >
                <p>Sobre mi</p>
                </Link>
                <Link to="/proyectos">
                <p>Proyectos</p>
                </Link>
                <Link>
                <p>Contactame</p>
                </Link>


            </div>

        </div>
    )
}