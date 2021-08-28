import React from "react";
import {Carousel, Button} from 'react-bootstrap'
import BackImg from "../../assets/slider-1.png"

const Hero = () =>{

    return(
        <section id="home" className="section_hero">
            <Carousel controls={false} className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={BackImg}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>
                            Sed ut perspiciatis <br/> unde omnis iste natus
                        </h1>

                        <p >
                            Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
                        </p>
                        <Button href="#about">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={BackImg}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 >
                        Sed ut perspiciatis <br/> unde omnis iste natus
                    </h1>

                    <p>
                        Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
                    </p>
                    <Button href="#about">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={BackImg}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>
                        Sed ut perspiciatis <br/> unde omnis iste natus
                    </h1>

                    <p>
                        Sed ut perspiciatis unde omnis iste natus error <br/> sit voluptatem accusantium doloremque.
                    </p>
                    <Button href="#about">Read More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </section>

    )
}

export default Hero