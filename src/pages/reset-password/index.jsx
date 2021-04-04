import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import Head from 'next/head';
import { useState } from 'react';
import fire from '../../config/Firebase';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';

const resetPassword = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const sendResetPassword = async () => {
    const resetPassword = await fire.auth().sendPasswordResetEmail(email);

    alert('Please check your email');
    router.push('/login');
  };

  return (
    <div className="login">
      <Head>
        <title>Reset Password</title>
      </Head>

      <div className="container cart-header cart__margin__2">
        <div className="mt-5 pt-4">
          <Breadcrumb name="Reset Password" />
        </div>
      </div>

      <div className="container login__martop">
        <div className="row  login__position">
          <div className="col-lg"></div>
          <div className="col-lg-6 text-center">
            <Input
              htmlFor="email"
              label="Reset Password"
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
            <div className="row">
              <div className="col-lg">
                <Button
                  type="button"
                  className="btn btn-secondary btn-block text-white mt-2"
                  size="lg"
                  onClick={sendResetPassword}
                >
                  Reset Password
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-right login__text">
                  Remember Password?
                  <Link href="/login">
                    <span className="login__span"> Login </span>
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

export default resetPassword;
