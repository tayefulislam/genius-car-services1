import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ServiceDetail = () => {
    const { serviceId } = useParams()

    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);

    const handleCheckOut = () => {


        navigate('/checkout')


    }



    return (
        <div>

            <h1>Welcome to service detail {serviceId.slice(0, 10)}</h1>



            <Link to='/checkout'><button >check</button></Link>


        </div>
    );
};

export default ServiceDetail;