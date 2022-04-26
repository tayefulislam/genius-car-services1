import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-toastify';

import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';





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



    const handleSubmit = async event => {
        event.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)

        await signInWithEmailAndPassword(email, password)

        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data)

        localStorage.setItem('accessToken', data.accessToken)





    }


    const navigateRegister = event => {
        nagivate('/register')
    }


    const resetPassword = async () => {

        await sendPasswordResetEmail(emailRef)
        toast('email set')

    }

    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorMessage = <div className='text-danger'>{error?.message}</div>


    }


    if (user) {
        // nagivate(from, { replace: true });
    }

    console.log(user)




    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title='Login'></PageTitle>



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

            <button className='btn' onClick={resetPassword}> reset password</button>

            {errorMessage}

            <p>New To Genius Car <span className='text-danger pc-auto' onClick={navigateRegister}>Register</span></p>




        </div>
    );
};

export default Login;