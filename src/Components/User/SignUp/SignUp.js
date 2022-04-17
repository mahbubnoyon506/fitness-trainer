import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../images/google.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';



const SignUp = () => {
    //   Google and Github authentication
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    // authentication with emai and password
    // const [sendEmailVerification] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        console.log(name, email, password, confirmPassword);
        createUserWithEmailAndPassword(email, password);
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    }
    return (
        <div className=' w-25 mx-auto'>
            <form onSubmit={handleSignUp} className="form-wrap">
                <input type="text" name="name" id="name" placeholder='Type your Name *' required />
                <input type="email" name="email" id="email" placeholder='Type your email *' required />
                <input type="password" name="pasword" id="password" placeholder='Type password' required />
                <input type="password" name="confirmpassword" id="confirm-password" placeholder='Confirm password' required />
                <input type="checkbox" name="checkbox" id="" />
                <label htmlFor="">Agreed to our terms and conditions</label>
                <input type="submit" value="Sign Up" />
                <button className='btn btn-link'>Verify Email</button>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
            <p className='form-or'>Or</p>
            <div className="social-authentication d-flex justify-content-around mb-5">
                <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGoogle()}><img className='img-fluid' src={google} alt="" /></button>
                <button className='text-dark border-0 bg-transparent'><img className='img-fluid' src={facebook} alt="" /></button>
                <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGithub()}><img className='img-fluid' src={github} alt="" /></button>
            </div>
        </div>
    );
};

export default SignUp;