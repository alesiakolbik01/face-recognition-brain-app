const SignIn = () => {

    return (
        <article className="br2 pa3 mt6-l bg-black-10 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="ph0 mh0 fw6 clip">Sign In</legend>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign In"/></div>
                <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db">Register</a>
                </div>
            </form>
        </article>
    )
}

export default SignIn;