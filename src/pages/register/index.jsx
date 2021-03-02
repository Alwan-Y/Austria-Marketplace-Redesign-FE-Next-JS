import Head from 'next/head'

const Register = () => {
    return (
    <div className="register">
      <Head>
        <title>Register</title>
      </Head>
      <div className="form">
      <h2>Register</h2>
        <form>
          <h3>Register</h3>

          <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm password" />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
          <p className="click text-right">
              Already a user <a href="/login">log in?</a>
          </p>
        </form>
      </div>
    </div>
    )
}

export default Register