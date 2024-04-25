import Profile from './profile/profile';
import Certificate from './certificate/certificate';
import Details from './details/details';
import Hero from './Hero/hero';


const Main = () => {
    return (
        <div className='mainSection'>
                <Hero />
                <Profile />
                <Details />
                <Certificate />
        </div>
    );
}

export default Main;