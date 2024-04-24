import Hero from './Hero/hero';
import './center.scss';
import Details from './details/details';

const Center = () => {
    return(
        <div className='centerSection'>
            <Hero/>
            <Details/>
        </div>
    );
}

export default Center;