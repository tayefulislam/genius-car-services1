import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear()
    const time = today.toLocaleTimeString()
    return (
        <div>

            <p className='text-center mt-5 '>The Car Doctor @ <span className='text-danger'>{year} {time}</span></p>

        </div>
    );
};

export default Footer;