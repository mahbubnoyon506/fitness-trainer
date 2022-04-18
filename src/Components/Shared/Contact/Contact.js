import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'




const Contact = () => {
    return (
        <div>
            <div className='contact'>
                <div style={{ height: '2px', width: '50px' }} className='bg-dark mb-4 '></div>
                <h2 className='my-0 fw-bolder'>Contact</h2>
                <p className='pt-3'>6201 Hollywood Blvd <br />
                    Los Angeles, CA. 90028 <br />
                    Tel: 323-798-4268</p>
                <Link to='#' className='text-decoration-none text-dark'>info@davidlouise.com</Link>             
                <div className="social mt-2">
                    <Link to='#'><img src="https://i.ibb.co/XtJ50M5/facebook-icon.png" alt="" /></Link>
                    <Link to='#'><img src="https://i.ibb.co/cNZGpxn/youtube.png" alt="" /></Link>
                    <Link to='#'><img src="https://i.ibb.co/Yh8vBRx/twitter.png" alt="" /></Link>
                    <Link to='#'><img src="https://i.ibb.co/NVghXRc/instagram.png" alt="" /></Link>   
                </div>

            </div>
        </div>
    );
};

export default Contact;