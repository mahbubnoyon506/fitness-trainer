import React from 'react';
import Banner from '../../Utilities/Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;