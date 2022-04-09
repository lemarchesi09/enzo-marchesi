import React from "react";
import { Carousel } from "react-bootstrap";
import ProductsImg from "../../assets/section3-image.png"
import IconoIzq from "../../assets/Icon feather-arrow-left-circle.svg"
import IconoDer from "../../assets/Icon feather-arrow-right-circle.svg"


const Products = () =>{
    return(
        <section id="products" className="sec2">
            
            
    
            <div className="sec2__cont">
                <Carousel indicators={false} controls={true} className="car-prod">
                    <Carousel.Item>
                        <Carousel.Caption className="car-text" >
                        <p>Sed ut perspiciatis</p>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption className="car-text">
                        <p>Sed ut perspiciatis</p>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                
            </div>                
        </section>
    )
}

export default Products