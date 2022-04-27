import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mighty-dawn-33450.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div id='services'>

            <h1 className='service-title'>Our Services</h1>


            <div className="services-container">
                {

                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)

                }
            </div>

        </div>
    );
};

export default Services;