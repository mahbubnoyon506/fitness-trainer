import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    //   Google and Github authentication
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    // authentication with emai and password

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
        <div>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="name" placeholder='Type your Name *' required />
                <input type="email" name="email" id="email" placeholder='Type your email *' required />
                <input type="password" name="pasword" id="password" placeholder='Type password' required />
                <input type="password" name="confirmpassword" id="confirm-password" required />
                <input type="checkbox" name="checkbox" id="" label="Agreed to our terms and conditions" />
                <input type="submit" value="Sign Up" />
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
            <p className='form-or'>Or</p>
            <div className="social-authentication">
                <Button onClick={() => signInWithGoogle()}><img src="" alt="" />Continue with Google</Button>
                <Button onClick={() => signInWithGithub()}><img src="" alt="" />Continue with Github</Button>
            </div>
        </div>
    );
};

export default SignUp;