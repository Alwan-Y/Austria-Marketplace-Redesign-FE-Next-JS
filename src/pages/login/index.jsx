import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import Head from 'next/head';
import { useState } from 'react';
import fire from '../../config/Firebase';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

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

        if (!user.displayName) {
          alert("Please Fill Your Username")
          return router.push('/register-username')
        }

        alert('Succes Login');
        router.push('/');

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

      <div className="container cart-header cart__margin__2">
        <div className="mt-5 pt-4">
          <Breadcrumb name="Login" />
        </div>
      </div>

      <div className="container login__martop">
        <div className="row  login__position">
          <div className="col-lg"></div>
          <div className="col-lg-6 text-center">
            <Input
              htmlFor="email"
              label="LOG IN"
              type="email"
              id="email"
              placeholder="E-mail"
              className={`form-control login__height ${
                error ? 'is-invalid' : ''
              } login__form`}
              classNameLabel="login__label login__margin__1 text-center"
              value={email}
              onChange={(e) => {
                setError(false);
                setEmail(e.target.value);
              }}
            />
            <Input
              htmlFor="password"
              type="password"
              id="password"
              placeholder="Password"
              className={`form-control login__height ${
                error ? 'is-invalid' : ''
              } login__form login__margin__2`}
              classNameLabel="login__label"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
            />
            <div className="row">
              <div className="col">
                <h6 className="text-right ">
                  Forgot password?
                  <Link href="/reset-password">
                    <span className="login__span"> Reset Password </span>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                <Button
                  type="button"
                  className="btn btn-secondary btn-block text-white mt-2"
                  size="lg"
                  onClick={signIn}
                >
                  Login
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-right login__text">
                  Don't Have Account ?
                  <Link href="/register">
                    <span className="login__span"> Sign up </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
