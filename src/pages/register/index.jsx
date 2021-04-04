import Head from 'next/head';
import { useState } from 'react';
import fire from '../../config/Firebase';
import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const signUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError(true);

        return alert('Password and Confirm password not match !!');
      }

      const user = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (user) {
        alert('Succes register your account');
        router.push('/login');
      }
    } catch (e) {
      setError(true);
      alert('Upss something error');
    }
  };

  return (
    <div className="register">
      <Head>
        <title>Register</title>
      </Head>

      <div className="container cart-header cart__margin__2">
        <div className="mt-5 pt-4">
          <Breadcrumb name="Signup" />
        </div>
      </div>

      <div className="container login__martop">
        <div className="row  login__position">
          <div className="col-lg"></div>
          <div className="col-lg-6 text-center">
            <Input
              htmlFor="email"
              label="SIGN UP"
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
            <Input
              htmlFor="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className={`form-control login__height ${
                error ? 'is-invalid' : ''
              } login__form login__margin__2`}
              classNameLabel="login__label"
              value={confirmPassword}
              onChange={(e) => {
                setError(false);
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-lg">
                <Button
                  type="button"
                  className="btn btn-secondary btn-block text-white mt-2"
                  size="lg"
                  onClick={signUp}
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-right login__text">
                  Already Have Account ?
                  <Link href="/login">
                    <span className="login__span"> Login</span>
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

export default Register;
