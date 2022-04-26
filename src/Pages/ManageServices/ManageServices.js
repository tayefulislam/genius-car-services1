import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id, name) => {


        const prossed = window.confirm(`Delete : ${name}`)

        if (prossed) {

            console.log(id)
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                    toast('Detele success')
                })

        }





    }


    return (

        <div className='w-50 mx-auto'>

            <h1>Manage Service</h1>

            {
                services.map(service => <div key={service._id}>

                    <h3>{service.name} <button onClick={() => handleDelete(service._id, service.name)}>X</button></h3>

                </div>

                )
            }





        </div>
    );
};

export default ManageServices;