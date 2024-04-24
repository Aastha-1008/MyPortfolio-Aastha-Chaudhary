import Hero from './Hero/hero';
import './center.scss';
import Certificate from './certificate/certificate';
import Details from './details/details';
import Profile from './profile/profile';

const Center = () => {
    return(
        <div className='centerSection'>
            <Hero/>
            <Profile/>
            <Details/>
            <Certificate/>
        </div>
    );
}

export default Center;