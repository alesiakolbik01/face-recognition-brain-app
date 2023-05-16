import SignIn from '../SignIn/SignIn';
import ParticlesBg from 'particles-bg';

const LoginPage = () => {
    return (
        <>
            <ParticlesBg color = "#ff0000" type = "cobweb" bg = {true} />
            <SignIn />
        </>
    )
}

export default LoginPage;