import './rightSide.scss';
import github from '../../../Images/github.png';
import linkedin from '../../../Images/linkedin.png';
import resume from '../../../Images/resume.png';
import mail from '../../../Images/mail.png';

const RightSide = () => {
    return (
        <div className='rightSideSection'>

            <div className='icon'>
                <a href="https://github.com/Aastha-1008">
                    <img src={github} alt="github" />
                </a>
            </div>

            <div className='icon'>
                <a href="https://www.linkedin.com/in/aastha-chaudhary-4b21271a0/">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
            <div className='icon'>
                <a href="https://drive.google.com/file/d/1LrE5ucjTl3iReen_rO4SKcnuTkmvRHuz/view?usp=sharing">
                    <img src={resume} alt="resume" />
                </a>
            </div>
            <div className='icon'>
                <a href="mailto:aasthachaudhary237@gmail.com">
                    <img src={mail} alt="mail" />
                </a>
            </div>
        </div>
    );
}

export default RightSide;