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
                <button className='btn btn-text'>info@davidlouise.com</button>
                <Link to='/#'><i class="fa-brands fa-facebook"></i></Link>
                <div className="social">
                </div>

            </div>
        </div>
    );
};

export default Contact;