import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='py-4'>
            <p className='text-center py-3'>Copyright {year}. All right reserved.</p>
        </div>
    );
};

export default Footer;