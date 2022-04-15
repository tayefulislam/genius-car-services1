import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {


    const nagivate = useNavigate()


    const naviagateLogin = () => {
        nagivate('/login')
    }


    const handleRegister = event => {
        event.preventDefault()

        // console.log(event.target.email.value) d

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;



    }



    return (
        <div className='container w-50 mx-auto'>

            <h1 className='text-primary text-center'>Register</h1>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>Alredy HAve Account <span className='text-primary' onClick={naviagateLogin}>Login</span></p>

        </div>
    );
};

export default Register;