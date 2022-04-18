import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div className='m-5'>
                <h3 className='text-center text-success py-4'>Here given the difference between Authentication and Authorization.</h3>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Authentication</th>
                            <th>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Authentication is visible to and partially changeable by the user.</td>
                            <td>Authorization isn't visible to or changeable by the user.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='row g-5 m-4'>
                <div className=' col-md-6'>
                    <h3 className='text-success py-4'>Firebase authenticatior and some authentication proviers are given here:-</h3>
                    <p><span className='text-danger'>Firebase Authentication</span> is a authentication service provider. We can outsource your entire authentication system to Firebase so that we can concentrate on building great features for our app. Firebase Authentication makes it easier to get users signed-in without having to understand the complexities behind implementing your own authentication system. It offers a straightforward getting started experience, optional UX components designed to minimize user friction, and is built on open standards and backed by Google infrastructure.</p>
                    <p>Some other <span className='text-danger'>Authentication</span> service provider are:- </p>
                    <ul>
                        <li>Auth0</li>
                        <li>Passport</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                        <li>JSON Web Token</li>
                        <li>Amazon Cognito Etc.</li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <h3 className='text-success py-4' >Services are provide by firebase</h3>
                    <p>Firebase provides many services including Authentication. Except Authentication it also provide </p>
                    <ul>
                        <li>Backend Services</li>
                        <li>Easy to use SDK service</li>
                        <li>Ready-made UI libraries</li>
                        <li>Hosting services etc.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;