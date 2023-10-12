import image from "../../../Imagenes/yo4.jpeg"
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
                <div className='carrusel'>
                    {/* <img src={image2} alt="" /> */}
                </div>
            </div>
        </div>
    )
}