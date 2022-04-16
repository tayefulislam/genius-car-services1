import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {




    const location = useLocation()

    let errorMessage;
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nagivate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
        auth
    );



    const handleSubmit = event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)

        signInWithEmailAndPassword(email, password)

    }


    const navigateRegister = event => {
        nagivate('/register')
    }


    const resetPassword = async () => {

        await sendPasswordResetEmail(emailRef)
        alert('email set')

    }

    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorMessage = <div className='text-danger'>{error?.message}</div>
    }

    if (user) {
        nagivate(from, { replace: true });
    }




    return (
        <div className='container w-50 mx-auto'>


            <h1 className='text-primary text-center'>Login</h1>

            <SocialLogin></SocialLogin>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>





                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>

            <button onClick={resetPassword}> reset password</button>

            {errorMessage}

            <p>New To Genius Car <span className='text-danger pc-auto' onClick={navigateRegister}>Register</span></p>

        </div>
    );
};

export default Login;