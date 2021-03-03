import Head from 'next/head';
import { useState } from 'react';
import fire from '../../config/Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const userLogin = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (userLogin) {
        const user = fire.auth().currentUser;

        if (!user.emailVerified) {
          const verification = await user.sendEmailVerification();

          return alert('Verify your email first !!');
        }

        alert('Succes Login');
        // redirect to home page/other

        return localStorage.setItem('token', user.refreshToken);
      }
    } catch (e) {
      alert('Upss something error');
    }
  };

  return (
    <div className="login">
      <Head>
        <title>Login</title>
      </Head>

      <div className="form">
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block mt-5"
            onClick={signIn}
          >
            Sign in
          </button>
          <p className="click text-right">
            Not a user? Click <a href="/register">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
