import Head from 'next/head'
import Link from 'next/link'

export default function Register () {
    return (
    <div className="register">
      <Head>
        <title>Register</title>
      </Head>
      <div className="form">
      <h2>Register</h2>
        <form onsubmit="event.preventDefault()">
          <div class="field-wrapper">
            <input type="text" name="email" placeholder="email"/>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password" placeholder="password" autocomplete="new-password"/>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password2" placeholder="confirm password" autocomplete="new-password"/>
          </div>
          <div class="field-wrapper">
            <input type="submit" onclick=""/>
          </div>
          <Link href="/login">Already a user? Login</Link>
          </form>
      </div>
    </div>
    )
}