import SignIn from '../SignIn/SignIn';
import ParticlesBg from 'particles-bg';

const LoginPage = ({logIn}) => {
    return (
        <>
            <ParticlesBg color = "#ff0000" type = "cobweb" bg = {true} />
            <SignIn logIn={logIn} />
        </>
    )
}

export default LoginPage;