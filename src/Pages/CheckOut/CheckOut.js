import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../hooks/useSeviceDetail';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';


const CheckOut = () => {

    const { serviceId } = useParams()
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)


    const [service] = useServiceDetail(serviceId)
    console.log(service.name)



    // const [service, setService] = useState([])

    // useEffect(() => {
    //     fetch(`https://mighty-dawn-33450.herokuapp.com/service/${serviceId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setService(data)
    //         })
    // }, [])

    // console.log(service)


    const handlePlaceOrder = (event) => {

        event.preventDefault()

        const order = {
            userName: user.displayName,
            email: user.email,
            serviceId: serviceId,
            serviceName: service.name,

            address: event.target.address.value,
            phone: event.target.phone.value,

            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),

        }

        console.log(order)

        axios.post(`https://mighty-dawn-33450.herokuapp.com/order`, order)

            .then(function (res) {
                console.log(res)

                const { data } = res

                if (data.insertedId) {

                    event.target.reset()
                    toast('Order has been placed')


                }
            })



    }


    return (
        <div className='w-50 mx-auto'>

            <PageTitle title='CheckOut'></PageTitle>

            <h1>service check out </h1>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='Your Name' required readonly /><br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='Email' placeholder='Email' required readonly /><br />
                <input className='w-100 mb-2' value={service?.name} type="text" name='service' placeholder='Service' required readOnly /> <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' /><br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone Number' /><br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>

        </div>
    );
};

export default CheckOut;