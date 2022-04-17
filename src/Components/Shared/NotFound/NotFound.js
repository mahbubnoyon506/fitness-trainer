import React from 'react';
import Notfound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={Notfound} alt="" />
        </div>
    );
};

export default NotFound;