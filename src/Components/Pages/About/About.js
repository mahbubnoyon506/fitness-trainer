import React from 'react';
import { Button } from 'react-bootstrap';
import trainer from '../../images/trainer.jpg'

const About = () => {
    return (
        <div className='m-5'>
            <div className="content-wrap row g-4 mx-3">
            <div style={{ height: '2px', width: '50px' }} className='bg-dark mb-4 ms-4'></div>
            <h2 className='m-0 fw-bolder ms-4'>Who is <span className='text-danger d-block'>Louise?</span></h2>
                <div className="content col-md-4 ">
                    <p>
                        Louise Hazel is an Olympian, fitness expert, celebrity trainer, educator and creator of SLAY a female fitness community. <br /> <br />

                        A gold medallist in the seven-event discipline the heptathlon, Louise launched her very own female-first gym in the heart of Hollywood in 2019 called SLAY. With 15 years of elite training under her belt Louise helps thousands of people all over the world with her online training, advice and guidance. <br /> <br />

                        Her clients include directors, producers, celebrities, entrepreneurs, athletes, influencers and thought-leaders.</p>
                        <Button variant='outline-dark' >Show More</Button>
                </div>
                <img className='col-md-8' src={trainer} alt="" />
            </div>
        </div>
    );
};

export default About;