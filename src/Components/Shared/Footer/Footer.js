import React from 'react';

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div>
            <p className='text-center'>Copyright {year}. All right reserved.</p>
        </div>
    );
};

export default Footer;