import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../images/google.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';

const Login = () => {

    //   Google and Github authentication
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    // authentication with emai and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location =useLocation();
      const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {
            navigate(from, {replace : true});
          }
    },[user, from, navigate]) 

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
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
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
    return (
        <div className=' w-25 mx-auto'>
            <form onSubmit={handleLogin} className="form-wrap">
                <input type="email" name="email" id="email" placeholder='Type your email *' required />
                <input type="password" name="pasword" id="password" placeholder='Type password' required />
                <input type="submit" value="Login" />
                <p>New to us? <Link to='/signup'>Sign Up</Link></p>
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

export default Login;