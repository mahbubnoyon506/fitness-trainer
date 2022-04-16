import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

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
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder='Type your email *' required />
                <input type="password" name="pasword" id="password" placeholder='Type password' required />
                <input type="submit" value="Login" />
                <p>New to us? <Link to='/signup'>Sign Up</Link></p>
            </form>
             <p className='form-or'>Or</p>
            <div className="social-authentication">
                <Button onClick={() => signInWithGoogle()}><img src="" alt="" />Continue with Google</Button>
                <Button onClick={() => signInWithGithub()}><img src="" alt="" />Continue with Github</Button>
            </div>            
        </div>
    );
};

export default Login;