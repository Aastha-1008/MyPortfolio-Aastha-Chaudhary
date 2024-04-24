import './about.scss';
import profile from '../../../Images/profile.jpeg';

const About = () => {
    return(
        <div className='aboutSection'>
            <div className='image'>
                <img src={profile} alt="profile"/>
                <div className='yellowDot'></div>
            </div>
            <div className='about'>
                <h3>Aastha Chaudhary</h3>
                <p>Full Stack Developer</p>
            </div>
        </div>
    );
}

export default About;