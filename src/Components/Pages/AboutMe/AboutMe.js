import React from 'react';
import { Button } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div className='row'>
            <div className="content col-md-5">
                <div style={{ height: '2px', width: '50px' }} className='bg-dark mb-4 '></div>
                <h2 className='my-0 fw-bolder'>About <span className='text-danger'>Me</span></h2>
                <p className='mt-5'>I am Mahbub Noyon. I have completed Diploma in Civil Department from Dhaka Polytechnic Institute. <br /> <br />
                    I want to be a good quality programmer. I am working towards that goal and I have benefited a lot from doing the programming hero course. I'm glad to have a lot of resources and the right guideline. <br /> <br />
                    My next goal is to increase the efficiency of problem solving. That's why I'm excited to do Phitron's course.</p>
                <Button variant='outline-danger my-3'>Show more</Button>

            </div>
            <div className="about-image col-md-7" style={{
                backgroundImage: `url("https://i.ibb.co/L82f7mt/trainer2.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: '', backgroundAttachment: 'fixed'
            }}>
            </div>
        </div>
    );
};

export default AboutMe;