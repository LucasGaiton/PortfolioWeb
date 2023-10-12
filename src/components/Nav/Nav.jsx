//importamos estilo 
import s from "../Nav/Nav.module.css"
import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <div className={s.nav}>
            <div className={s.links}>
                <Link>
                <p>Sobre mi</p>
                </Link>
                <Link>
                <p>Proyectos</p>
                </Link>


            </div>

        </div>
    )
}