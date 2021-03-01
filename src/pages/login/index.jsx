import Head from 'next/head'
import Link from 'next/link'

export default function Login () {
    return (
    <div className="login">
      <Head>
        <title>Login</title>
      </Head>

      <div className="form">
      <h2>Sign in</h2>
        <form onsubmit="event.preventDefault()">
          <div class="field-wrapper">
            <input type="text" name="e-mail" placeholder="e-mail"/>
          </div>
          <div class="field-wrapper">
            <input type="password" name="password" placeholder="password" autocomplete="new-password"/>
          </div>
          <div class="field-wrapper">
            <input type="submit" onclick=""/>
          </div>
          <Link href="/register">Not a user? Sign up</Link>
          </form>
      </div>
    </div>
    )
}