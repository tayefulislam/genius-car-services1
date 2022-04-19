import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import PageTitle from '../../Shared/PageTitle/PageTitle';




const Register = () => {


    const [agree, setAgree] = useState(false)


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);


    const nagivate = useNavigate();


    const naviagateLogin = () => {
        nagivate('/login')
    }

    console.log(user)

    const handleRegister = async event => {
        event.preventDefault()

        // console.log(event.target.email.value) d
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;



        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name })



        nagivate('/home')


        // console.log(email)
        // console.log(password)

    }

    // if (user) {
    //     nagivate('/home')
    // }

    const handleagree = () => {
        setAgree(!agree)
    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title='Register'></PageTitle>

            <h1 className='text-primary text-center'>Register</h1>
            <SocialLogin></SocialLogin>
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


                <input onClick={handleagree} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">terms and condition</label>

                <br />
                <Button
                    disabled={!agree}
                    variant="primary"
                    type="submit"
                >
                    Sign Up
                </Button>
            </Form>

            <p>Alredy HAve Account <span className='text-primary' onClick={naviagateLogin}>Login</span></p>

        </div>
    );
};

export default Register;