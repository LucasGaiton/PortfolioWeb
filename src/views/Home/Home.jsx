import image from "../../../public/Imagenes/yo4.jpeg"
import S from "../Home/Home.module.css"
export default function Home() {
    return (
        <div className={S.home}>
            <div className={S.conteiner1}>
                <div className={S.contenido}>
                    <div className={S.foto}>
                        <img className={S.tool_img} src={image} alt="" />
                    </div>
                    <div className={S.datos}>
                        <h1 className={S.titile}>Lucas Emanuel Gaiton</h1>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sint! Consequatur, incidunt! Itaque, laudantium aspernatur adipisci distinctio deleniti accusamus porro, animi architecto beatae illum tenetur debitis pariatur cum, quidem officiis.</p>
                    </div>
                </div>
                <div className={S.wave}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#16B88A" fill-opacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,74.7C274.3,85,343,139,411,154.7C480,171,549,149,617,154.7C685.7,160,754,192,823,181.3C891.4,171,960,117,1029,117.3C1097.1,117,1166,171,1234,197.3C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg></div>

            </div>
            <div className={S.conteiner2}>
                <div>
                    <h1>Lenguajes y tools:
                    </h1>
                </div>
                <div className={S.tools}>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src='/Imagenes/bootstrap.jpeg' alt="Mi Imagen" />
                        <h1 className={S.tool_name}>Bootstrap</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/css.png" alt="" />
                        <h1 className={S.tool_name}>CSS</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/javaScript.png" alt=""/>
                        <h1 className={S.tool_name}>JavaScript</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/html.png" alt="" />
                        <h1 className={S.tool_name}>HTML</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/nodeJs.png" alt="" />
                        <h1 className={S.tool_name}>NodeJs</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/postgres.png" alt="" />
                        <h1 className={S.tool_name}>PostgresSQL</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/React.png" alt="" />
                        <h1 className={S.tool_name}>React</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/redux.png" alt="" />
                        <h1 className={S.tool_name}>Redux</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/sql.png" alt="" />
                        <h1 className={S.tool_name}>SQL</h1>

                    </div>
                    <div className={S.tools_conteiner}>
                        <img className={S.tool_img} src="/Imagenes/talwind.png" alt="" />
                        <h1 className={S.tool_name}>Talwind Css</h1>

                    </div>


                </div>



                <div className='carrusel'>
                    {/* <img className={S.tool_img} src={image2} alt="" /> */}
                </div>
            </div>
            <div className={S.conteiner3}>
                <div className={S.wave}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#16B88A" fill-opacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,74.7C274.3,85,343,139,411,154.7C480,171,549,149,617,154.7C685.7,160,754,192,823,181.3C891.4,171,960,117,1029,117.3C1097.1,117,1166,171,1234,197.3C1302.9,224,1371,224,1406,224L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
                </div>
                <div className={S.contenido3}>
                    <div>
                        <h1>Contacto:</h1>
                    </div>
                    <div className={S.redes}>
                        <div className={S.github_target}>
                            <img  src="/Imagenes/github.jpeg" alt="" /><span>LucasGaiton</span>

                        </div>
                        <div className={S.linkedln_target}>
                            <img  src="/Imagenes/linkedlinwhite.png" alt="" /><span>Lucas Gaiton</span>

                        </div>
                        <div className={S.x_target}>
                            <img  src="/Imagenes/x.png" alt="" /> <span>@Gaitonlucas7</span>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}