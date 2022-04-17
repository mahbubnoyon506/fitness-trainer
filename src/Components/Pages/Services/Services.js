import React from 'react';
import useServices from '../../CustomHook/Hook';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div className='ms-5 mt-5'>
            <div className='ms-5'>
                <div style={{ height: '2px', width: '50px' }} className='bg-dark mb-4 ms-4'></div>
                <h2 className='my-0 ms-4 fw-bolder'>Services <span className='text-danger'>I Provide</span></h2>
            </div>
            <div className='row g-5 mx-5 my-1'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;