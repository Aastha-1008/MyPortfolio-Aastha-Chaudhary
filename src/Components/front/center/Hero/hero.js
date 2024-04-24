import './hero.scss';
import background from '../../../../Images/top.jpg';

const Hero = () => {
    return(
        <div className='heroSection' style={{backgroundImage: `url(${background})`}}>
            <div className='heroContent'>
                <div className='blackBG'>
                    <div className='mainContent' style={{backgroundImage: `url(${background})`}}>
                        <div className='graybackground'>
                            <h2>Discover my Amazing Work !</h2>
                            <button>Explore Now  &#8594;</button>
                        </div>    

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;