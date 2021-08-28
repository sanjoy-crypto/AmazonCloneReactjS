import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import './Login.css'
import { useState } from 'react'
import { auth } from './firebase'

const Login = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();

        // firebase Login 
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch((error) => {
                alert(error.message);
            })

    }
    const register = (e) => {
        e.preventDefault();

        // firebase Register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // It successfully created a new user with email and password 
                console.log(auth);
                if (auth) {
                    history.push("/")
                }
            })
            .catch((error) => {
                alert(error.message)
            })


    }

    return (
        <div className='login'>

            <Link to="/">
                <img className="login__logo" src="images/amazon1.png" alt="" />

            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button onClick={signIn} type='submit' className="login__signInButton">Continue</button>
                </form>

                <p>By continuing, you agree to Amazon's clone Conditions of Use and Privacy Notice.</p>
            </div>
            <p className='qtext'>New to Amazon?</p>
            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>

        </div>
    )
}

export default Login
