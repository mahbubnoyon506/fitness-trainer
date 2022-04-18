import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../images/google.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';
import Spiner from '../../Utilities/Spiner/Spiner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigateToHome = useNavigate();
  const [email, setEmail] = useState('');
  // authentication with emai and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

    //   Google and Github authentication
    const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub] = useSignInWithGithub(auth);
    
  // password reset
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate])

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
    return <Spiner></Spiner>;
  }
  if (user || userGoogle || userGithub) {
    return (
      navigateToHome('/')
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
        <form onSubmit={handleLogin} className="form-wrap">
            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Type your email *' required />
            <input type="password" name="pasword" id="password" placeholder='Type password' required />
            <input type="submit" value="Login" />
            <p>New to us? <Link to='/signup' className='btn btn-text text-primary'>Sign Up</Link></p>
            <p>Forget Password? <button  className='btn btn-text text-primary' onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Sent email');
        }}>Reset Password</button></p>      
          </form>
          <p className='form-or'>Or</p>
          <div className="social-authentication d-flex justify-content-around mb-5">
            <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGoogle()}><img className='img-fluid' src={google} alt="" /></button>
            <button className='text-dark border-0 bg-transparent'><img className='img-fluid' src={facebook} alt="" /></button>
            <button className='text-dark border-0 bg-transparent' onClick={() => signInWithGithub()}><img className='img-fluid' src={github} alt="" /></button>
            <ToastContainer />
          </div>
        </div>


      </div>
    </div>

  );
};

export default Login;