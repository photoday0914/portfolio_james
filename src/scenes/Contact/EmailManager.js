import React from 'react';
import s from './Contact.module.scss';
import { Container, Form, Row } from 'react-bootstrap';
import Button from '../../components/UIElements/Button/Button';

import { useState } from "react";
// import { Container, Form, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('t8KXXdmzaquq6kFAX');

export default function EmailManager() {
    const [ formData, setFormData ] = useState({email: '', fullname: '', subject: '', message: ''});  
    const handleChange = (e) => setFormData({...formData, [e.target.id]: e.target.value})     
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(formData);
        emailjs.send('service_pmoqv1c', 'template_f0gi957', formData, 't8KXXdmzaquq6kFAX')
        .then((result) => {
            setFormData({email: '', fullname: '', subject: '', message: ''})
            console.log("ok");
        }, (error) => {
            console.log(error);
        });
    };

    return (
        <Container>
            <Form>
                <h3 className={s.mediumText}>Feel free to connect with me</h3>
                <br /><br />
                <Row>
                    <Form.Group className="mb-3" style={{ width: 600, margin: 'auto' }} controlId="fullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder=""
                            onChange={handleChange}
                            value={formData.fullname}
                        />
                        </Form.Group>
                    </Row>
                <br />
                <Row>
                    <Form.Group className="mb-3" style={{ width: 600, margin: 'auto' }} controlId="email">
                        <Form.Label>Enter Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row>
                    <Form.Group className="mb-3" style={{ width: 600, margin: 'auto' }} controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder=""
                            onChange={handleChange}
                            value={formData.subject}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row>
                    <Form.Group className="mb-3" style={{ width: 600, margin: 'auto' }} controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="" 
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row>
                <Button
                    style={{ margin: 'auto', width: '15rem' }}
                    className="primary"
                    type="submit"
                    target="_blank"
                    onClick={e => sendEmail(e)}
                >
                    Send
                </Button>
                </Row>
            </Form><br />
        </Container>
    )
}