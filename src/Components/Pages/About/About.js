
import React from 'react';
import { Button } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='row'>
            <div className="content col-md-5">
                <div style={{ height: '2px', width: '50px' }} className='bg-dark mb-4 '></div>
                <h2 className='my-0 fw-bolder'>Who is <span className='text-danger'>David?</span></h2>
                <p className='mt-5'>David Louise is an Olympian, fitness expert, celebrity trainer, educator and creator of SLAY a male fitness community. <br /> <br />
                A gold medallist in the seven-event discipline the heptathlon, David launched his very own male-first gym in the heart of Hollywood in 2019 called SLAY. With 15 years of elite training under his belt Davis helps thousands of people all over the world with his online training, advice and guidance. <br /> <br />
                His clients include directors, producers, celebrities, entrepreneurs, athletes, influencers and thought-leaders.</p>
                <Button variant='outline-danger my-3'>Show more</Button>
                
            </div>
            <div className="about-image col-md-7" style={{
                backgroundImage: `url("https://i.ibb.co/4Z3wVMV/banner2.jpg")`, height: '100vh'
            }}>
            </div>
        </div>
    );
};

export default About;