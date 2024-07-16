import './hero.scss';
import hero from '../../../../Images/hero.png';

const Hero = () => {
    return(
        <div className='heroSection'>
        <img src = {hero} />   
        </div>
    );
}

export default Hero;