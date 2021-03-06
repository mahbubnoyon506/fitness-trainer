import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../images/google.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import Spiner from '../../Utilities/Spiner/Spiner';



const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    //   Google and Github authentication
    const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub] = useSignInWithGithub(auth);

    // authentication with emai and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        const agree = event.target.checkbox.checked;
        console.log(name, confirmPassword);
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Spiner></Spiner>;
    }
    if (user || userGoogle || userGithub) {
        return (
            navigate('/')
        );
    }
    return (
        <div className='row g-5' style={{
            backgroundImage: `url("https://i.ibb.co/WvK4BsY/login-signup.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed'
        }}>
            <div className='col-md-7'>
            </div>
            <div className='col-md-5 shadow-lg bg-transparent rounded'>
                <div className='m-5'>
                    <form onSubmit={handleSignUp} className="form-wrap">
                        <input type="text" name="name" id="name" placeholder='Type your Name *' required />
                        <input type="email" name="email" id="email" placeholder='Type your email *' required />
                        <input type="password" name="pasword" id="password" placeholder='Type password' required />
                        <input type="password" name="confirmpassword" id="confirm-password" placeholder='Confirm password' required />
                        <input className='me-2' onClick={() => setAgree(!agree)} type="checkbox" name="checkbox" id="" />
                        {
                            agree ? <label className='text-primary' htmlFor="">Checked</label> : <label className='text-danger' htmlFor="">Check to agree terms and conditions</label>
                        }
                        <input type="submit" value="Sign Up" />
                        <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
                    </form>
                    <p className='form-or'>Or</p>
                    <div className="social-authentication d-flex justify-content-around mb-5">
                        <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGoogle()}><img className='img-fluid' src={google} alt="" /></button>
                        <button className='text-dark border-0 bg-transparent'><img className='img-fluid' src={facebook} alt="" /></button>
                        <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGithub()}><img className='img-fluid' src={github} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;