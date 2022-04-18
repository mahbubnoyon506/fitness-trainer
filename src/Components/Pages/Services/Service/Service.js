import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {picture, name, price, description} = service;
    const navigate = useNavigate();
    const navigateCheckout = () =>{
        navigate('/checkout')
    }
    return (
        <div className='col-md-4'>
            <img className='img-fluid w-100 shadow p-3 bg-body rounded mb-3' src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price: $ <span className='text-danger'>{price}</span></h5>
            <p>{description.slice(0, 100) + `...`}</p>
            <Button variant='outline-danger' onClick={navigateCheckout}>Checkout</Button>
        </div>
    );
};

export default Service;