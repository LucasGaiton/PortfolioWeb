import s from "../Proyectos/Proyects.module.css"
import { useState } from "react"
export default function Proyects() {
    const [isPlaying, setIsPlaying] = useState(true);

    const handlerMouseEnter = () => {
        setIsPlaying(true);
    };

    const handlerMouseLeave = () => {
        setIsPlaying(false);
    }
    return (
        <div className={s.proyects}>
            <section className={s.conteiner1}>


                <div className={s.videoConteiner} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
                    <h1>Titulo del proyecto  </h1>

                    <video className={s.video} loop muted={true} autoPlay={isPlaying} >
                        <source src="Videos\2024-03-14 21-33-03.mp4" type="video/mp4" />
                        Tu navegador no soporta la etiqueta de este video

                    </video>
                    <div className={isPlaying ? s.overlay : s.ovelayHide}> </div>
                </div>

            </section>
            <section className={s.conteiner2}>
                <h1>Contries</h1>
            </section>
            <section className={s.conteiner3}>
                <h1>foods</h1>
            </section>
        </div>
    )
}