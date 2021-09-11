import React, { useEffect, useState } from 'react';
import Globo from "../../assets/contact-image.png"
import {Form, Button, Alert} from 'react-bootstrap'
import {sendForm} from "../../axios"




const Contact = () =>{
    const [validated, setValidated] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [error, setError] = useState(false)
    const [dataForm, setDataForm] = useState({})


    const handleChange = (e) =>{
        setDataForm((prevData)=>{
            return{
                ...prevData,
                [e.target.name] : e.target.value,
            }
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.currentTarget;

        console.log("form.checkValidity()", form.checkValidity());
        setValidated(true);

        if (form.checkValidity() === false) {
            setError(true);
            setShowAlert(true);
        }else{
            
            //setError(false);
            const response = await sendForm(dataForm);
            //console.log("response: ", response);
            if(response.status === 201){
                setError(false);
                setShowAlert(true);
                form.reset();
                setValidated(false);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            }
            /**validar si esta todo OK */

            /*
            Logica para mandar al backend

            sendForm(dataForm)
            */

        }

    }

    /*useEffect(()=>{
        console.log("dataForm: ", dataForm);
    }, [dataForm])*/
    return(
        <section id="contact" className="sec4">
            
            {/*<svg className="sec2__svg--rec"></svg>*/}
            <h2>Get in touch <span>We are hiring!</span> </h2>
            <img className="sec4__img" src={Globo} alt="Imagen contacto globos"/>

            <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)} className="form col-5">
                <Form.Group required className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={(e)=> handleChange(e)} type="name" placeholder="Name" name="name" />
                </Form.Group>
                <Form.Group required className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control onChange={(e)=> handleChange(e)} type="email" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group required className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Control onChange={(e)=> handleChange(e)} type="phone" placeholder="Phone" name="phone" />
                </Form.Group>
                <Form.Group required className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={(e)=> handleChange(e)} as="textarea" rows={3} placeholder="Message" name="message" />
                </Form.Group>
                {
                    showAlert ? (
                        !error ? (
                        <Alert variant='info'>Mensaje enviado </Alert>
                    )    :(
                        <Alert variant='danger'>Hubo un error </Alert> 
                    )

                    )    : null}
                
                <Button className="form-button" variant="primary" type="submit">
                    Send
                </Button>
            </Form>
    
    </section>
    )
}
export default Contact