import Tilt from 'react-parallax-tilt';
import LogoImage from '../../2666.jpg';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0 dib'>
            <Tilt 
                tiltMaxAngleX={55}
                tiltMaxAngleY={55}
                perspective={700}
                scale={1.2}
                transitionSpeed={2000}
                gyroscope={false}
            >
                <img className="logo-image" src={LogoImage} alt="logo"/>
            </Tilt>
        </div>
    )
}

export default Logo;
