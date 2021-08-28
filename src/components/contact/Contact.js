import React from 'react';
import Globo from "../../assets/contact-image.png"
import {Form, Button} from 'react-bootstrap'


const Contact = () =>{
    return(
        <section className="sec4">
            
            <svg className="sec2__svg--rec"></svg>
            <h2>Get in touch <span>We are hiring!</span> </h2>
            <img className="sec4__img" src={Globo} alt="Imagen contacto globos"/>

            <Form className="form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control type="phone" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
    
    </section>
    )
}
export default Contact