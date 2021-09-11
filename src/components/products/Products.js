import React from "react";
import ProductsImg from "../../assets/section3-image.png"
import IconoIzq from "../../assets/Icon feather-arrow-left-circle.svg"
import IconoDer from "../../assets/Icon feather-arrow-right-circle.svg"


const Products = () =>{
    return(
        <section id="products" className="sec2">
            
            {/*<svg className="sec2__svg--rec"></svg>*/}
    
            <div className="sec2__cont">
                {/*<img className="sec2__img" src={ProductsImg} alt="Imagen seccion 2"/>*/}
                <div className="sec2__text--background">
                    <div className="sec2__text">
                        <p>Sed ut perspiciatis</p>
                        <h2>Nemo Enim</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        <div className="sec2__iconos">
                            <a href="#home"><img src={IconoIzq} alt="icono flecha izquierda"/></a>
                            <a href="#home"><img src={IconoDer} alt="icono flecha derecha"/></a>
                        </div>
                        
                    </div>
                </div>
                
            </div>                
        </section>
    )
}

export default Products