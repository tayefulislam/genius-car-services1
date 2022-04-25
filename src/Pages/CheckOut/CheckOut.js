import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../hooks/useSeviceDetail';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const CheckOut = () => {

    const { serviceId } = useParams()
    const [user, loading, error] = useAuthState(auth);
    console.log(user)


    // const [service] = useServiceDetail(serviceId)
    // console.log(service.name)

    // const [service, setService] = useState([])
    const [service, setService] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            })
    }, [])

    console.log(service)


    return (
        <div className='w-50 mx-auto'>

            <PageTitle title='CheckOut'></PageTitle>

            <h1>service check out </h1>

            <form>
                <input className='w-100 mb-2' value={user.displayName} type="text" name='name' placeholder='Your Name' /><br />
                <input className='w-100 mb-2' value={user.email} type="email" name='Email' placeholder='Email' /><br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='Service' /> <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' /><br />
                <input className='w-100 mb-2' type="text" name='text' placeholder='Phone Number' /><br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default CheckOut;