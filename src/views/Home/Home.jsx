import image from "../../../public/Imagenes/yo4.jpeg"
// import image2 from "../Imagenes/yo.png"
//importamos estilo yo4.jpeg
import S from "../Home/Home.module.css"
export default function Home() {
    return (
        <div className={S.home}>
            <div className={S.conteiner1}>
                <div className={S.foto}>
                    <img src={image} alt="" />
                </div>
                <div className={S.datos}>
                    <h1 className={S.titile}>Lucas Emanuel Gaiton</h1>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sint! Consequatur, incidunt! Itaque, laudantium aspernatur adipisci distinctio deleniti accusamus porro, animi architecto beatae illum tenetur debitis pariatur cum, quidem officiis.</p>
                </div>
            </div>
            <div className={S.conteiner2}>
                <div>
                    <h1>Lenguajes y tools:
                    </h1>
                </div>
                <div className={S.tools}>
                    <img src='/Imagenes/bootstrap.jpeg' alt="Mi Imagen" />
                    <img src="/Imagenes/css.png" alt="" />
                    <img src="/Imagenes/javaScript.png" alt="" />
                    <img src="/Imagenes/html.png" alt="" />
                    <img src="/Imagenes/nodeJs.png" alt="" />
                    <img src="/Imagenes/postgres.png" alt="" />
                    <img src="/Imagenes/React.png" alt="" />
                    <img src="/Imagenes/redux.png" alt="" />
                    <img src="/Imagenes/sql.png" alt="" />
                    <img src="/Imagenes/talwind.png" alt="" />


                </div>



                <div className='carrusel'>
                    {/* <img src={image2} alt="" /> */}
                </div>
            </div>
        </div>
    )
}