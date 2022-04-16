import React from 'react';
import google from '../../../images/icon/google.png';
import facebook from '../../../images/icon/facebook.png';
import github from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

    const naviagate = useNavigate();
    let errorMessage;

    if (error || errorGit) {
        errorMessage = <div className='text-danger'>{error?.message}{errorGit?.message}</div>
    }

    if (user || userGit) {
        naviagate('/home')
    }


    return (


        <div>



            <div className='align-items-center'>
                <button onClick={() => signInWithGoogle()} className='btn  bg-white text-primary align-items-center d-block mt-4 mx-auto'>
                    <img className='' style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn  bg-white text-primary align-items-center d-block mt-4 mx-auto'>
                    <img className='' style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Sign In With Git Hub</span>
                </button>
                <button className='btn  bg-white text-primary align-items-center mt-4 mx-auto d-block'>
                    <img className='' style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Sign In With Facebook</span>
                </button>


            </div>


            {/* show error message */}
            {errorMessage}


            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
            </div>


        </div>
    );
};

export default SocialLogin;