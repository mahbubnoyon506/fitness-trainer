import React from 'react';
import Contact from '../Contact/Contact';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='py-4'>
                <Contact></Contact>
            <p className='text-center py-3'>Copyright {year}. All right reserved Devid Louise.</p>
        </div>
    );
};

export default Footer;