import Head from 'next/head';
import { useState } from 'react';
import fire from '../../config/Fire';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async () => {
    try {
      if (password !== confirmPassword) {
        return alert('Password and Confirm password not match !!');
      }

      const user = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (user) {
        alert('Succes register your account');
        // redirect to homepage/other
      }
    } catch (e) {
      alert('Upss something error');
    }
  };

  return (
    <div className="register">
      <Head>
        <title>Register</title>
      </Head>

      <div className="form">
        <h3>Register</h3>
        <div>
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
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block mt-5"
              onClick={signUp}
            >
              Register
            </button>
            <p className="click text-right">
              Already a user <a href="/login">log in?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
