import { useState } from "react";
import {
    Link,
  } from 'react-router-dom';


const SignIn = ({ logIn, setUserSession }) => {

    const [dataForm, setDataForm] = useState({});
    const [error, setError] = useState('');
  
    const handlelogIn = (data) => {
      if(validateUserData(data))
      {
        fetch('https://smart-brain-backend-f24l.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "email": data.email,
                "password": data.password
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            if(data.error)
            {
                setError(data.error)
            }
            else if(data.status === "success")
            {
                setError('');
                logIn(true, data.userId);
                setUserSession({ userId: data.userId })
            }
        })
        .catch((error) => {
            setError(error)
        })
       
      }
    };

    const validateUserData = (data) => {
        return (data.email && data.password)
    }

    const handleSendForm = (e) => {
        e.preventDefault();
        handlelogIn(dataForm);
    }

    const handleInputEmail = (e) => setDataForm({...dataForm, email: e.target.value})

    const handleInputPassword = (e) => setDataForm({...dataForm, password: e.target.value})

    return (
        <article className="br2 pa3 mt6-l bg-black-10 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <h1 className="pa0 ma0">Sign In</h1>
            <form action="sign-up_submit" method="get" acceptCharset="utf-8" onSubmit={handleSendForm}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" autoComplete="off" type="email" name="email-address"  id="email-address" onInput={handleInputEmail}/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent" autoComplete="off" type="password" name="password"  id="password" onInput={handleInputPassword}/>
                </div>
                </fieldset>
                <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign In" onClick={handleSendForm}/></div>
                {error && <div className="mt3 red">{error}</div>}
                <div className="lh-copy mt3">
                    <Link className="f6 link dim black db" to="/register">Register</Link>
                </div>
            </form>
        </article>
    )
}

export default SignIn;