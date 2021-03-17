import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
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
          <Input
            type="email"
            className="form-control"
            placeholder="E-mail"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <Input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <p className="click text-right">Forget password</p>
          <Button
            type="button"
            className="btn btn-secondary btn-block text-white"
          >
            Login
          </Button>
          <p className="click text-right">
            Don't have account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
