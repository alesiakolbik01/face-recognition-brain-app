import { useState } from "react";
import ParticlesBg from "particles-bg";


const Register = ({registerUser, setUserSession}) => {

    const [dataForm, setDataForm] = useState({});
    const [error, setError] = useState('');

    const handleSendForm = (e) => {
        e.preventDefault();
        if(validateUserData(dataForm))
        {
            handleRegisterUser();
        }else
        {
            setError('all fields must be filled');
        }
    }

    const validateUserData = (data) => {
        return (data.email && data.password && data.name)
    }

    const handleRegisterUser = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": dataForm.name,
                "email": dataForm.email,
                "password": dataForm.password
            })
        })
        .then((response) => {
            return response.json()
        })
        .then( (data) => {
            if(data.status === "success")
            {
                registerUser(true, data.insertedId);
                setUserSession({ userId: data.insertedId })
            }
            else
            {
                setError(data.error);
            }
        })
        .catch(error => {
            setError(error);
        })
    }

    const handleInputName = (e) => {
        setDataForm({...dataForm, name: e.target.value});
        setError('');
    }

    const handleInputEmail = (e) => {
        setDataForm({...dataForm, email: e.target.value});
        setError('');
    }

    const handleInputPassword = (e) => {
        setDataForm({...dataForm, password: e.target.value});
        setError('');
    }

    return (
        <>
            <ParticlesBg color = "#ff0000" type = "cobweb" bg = {true} />
            <article className="br2 pa3 mt6-l bg-black-10 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <h1 className="pa0 ma0">Register</h1>
                <form action="sign-up_submit" method="get" acceptCharset="utf-8" onSubmit={handleSendForm}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" autoComplete="off" required type="text" name="name"  id="name" onInput={handleInputName}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" autoComplete="off" required type="email" name="email-address"  id="email-address" onInput={handleInputEmail}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent" autoComplete="off" required type="password" name="password"  id="password" onInput={handleInputPassword}/>
                    </div>
                    </fieldset>
                    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Send" onClick={handleSendForm}/></div>
                    {error && <div className="mt3 red">{error}</div>}
                </form>
            </article>
        </>
    )
}

export default Register;