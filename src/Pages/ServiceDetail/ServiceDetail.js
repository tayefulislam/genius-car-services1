import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import useServiceDetail from '../hooks/useSeviceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()

    const navigate = useNavigate()

    // const [user, loading, error] = useAuthState(auth);

    const [service] = useServiceDetail(serviceId)

    // const [service, setService] = useState([])

    // useEffect(() => {
    //     fetch(`https://mighty-dawn-33450.herokuapp.com/service/${serviceId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setService(data)
    //         })
    // }, [])



    const { _id, name } = service

    const handleCheckOut = () => {


        navigate('/checkout')


    }



    return (
        <div>

            <PageTitle title={`${service?.name}`}></PageTitle>

            <h1>Welcome to service detail {service?.name}</h1>



            <Link to={`/checkout/${serviceId}`} ><button >check</button></Link>


        </div >
    );
};

export default ServiceDetail;