import React from 'react';
import google from '../../../images/icon/google.png';
import facebook from '../../../images/icon/facebook.png';
import github from '../../../images/icon/github.png';


const SocialLogin = () => {
    return (
        <div>



            <div className='align-middle'>
                <button className='btn  bg-white text-primary align-items-center d-block'>
                    <img className='' style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Sign In With Google</span>
                </button>
                <button className='btn  bg-white text-primary align-items-center d-block'>
                    <img className='' style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Sign In With Git Hub</span>
                </button>
                <button className='btn  bg-white text-primary align-items-center'>
                    <img className='' style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Sign In With Facebook</span>
                </button>
            </div>


            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '2px' }} className='w-50 bg-primary'></div>
            </div>

        </div>
    );
};

export default SocialLogin;