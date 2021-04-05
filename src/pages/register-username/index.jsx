import Button from '@/components/commons/Button';
import Input from '@/components/commons/Input';
import Head from 'next/head';
import { useState } from 'react';
import fire from '@/config/Firebase';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useRouter } from 'next/router';

const resetPassword = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  const registerUsername = async () => {
    const user = await fire.auth().onAuthStateChanged((user) => {
      if (username && user) {
        user
          .updateProfile({
            displayName: username,
          })
          .then(function () {
            alert('Succes Update Your Username');
            router.push('/');
          })
          .catch(function (error) {
            alert(error);
          });
      } 
      if (!username) {
        alert('Please Fill Your Username')
      }
    });
  };

  return (
    <div className="login">
      <Head>
        <title>Register Username</title>
      </Head>

      <div className="container cart-header cart__margin__2">
        <div className="mt-5 pt-4">
          <Breadcrumb name="Register Username" />
        </div>
      </div>

      <div className="container login__martop">
        <div className="row  login__position">
          <div className="col-lg"></div>
          <div className="col-lg-6 text-center">
            <Input
              htmlFor="email"
              label="Register Your Username"
              type="email"
              id="email"
              placeholder="Username"
              className={`form-control login__height ${
                error ? 'is-invalid' : ''
              } login__form`}
              classNameLabel="login__label login__margin__1 text-center"
              value={username}
              onChange={(e) => {
                setError(false);
                setUsername(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-lg">
                <Button
                  type="button"
                  className="btn btn-secondary btn-block text-white mt-2"
                  size="lg"
                  onClick={registerUsername}
                >
                  Register Username
                </Button>
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
