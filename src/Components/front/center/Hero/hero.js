import './hero.scss';
import hero from '../../../../Images/hero.png';

const Hero = () => {
    return(
        <div className='heroSection'>
        <img src = {hero} alt="coverPhoto"/>   
        </div>
    );
}

export default Hero;