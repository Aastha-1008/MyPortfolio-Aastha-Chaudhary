import './certificate.scss';
import link from '../../../../Images/link.png';
import Cert from '../../../../Images/certificate.svg';

const Certificate = () => {
    return(
        <div className='certificateSection'>
            <h3>Achievements & Certification</h3>
            <div className='certificateContent'>
                <div className='certificateImg'>
                    <img src={Cert} alt="certificateImg"/>
                </div>
                <div className='certificates'>
                <div className='certificate'>
                    <div className='certificateName'>
                        <h4>The complete JavaScript Course</h4>
                    </div>
                    <div className='platform'>
                        <h4>Udemy</h4>
                        <img src={link} alt="link"/>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certificateName'>
                        <h4>Spring Boot 3, Spring & Hibernate for Beginners</h4>
                    </div>
                    <div className='platform'>
                        <h4>Udemy</h4>
                        <img src={link} alt="link"/>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certificateName'>
                        <h4>HTML, CSS, and JavaScript for Web Developer</h4>
                    </div>
                    <div className='platform'>
                        <h4>Coursera</h4>
                        <img src={link} alt="link"/>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certificateName'>
                        <h4>Technical Support Fundamental</h4>
                    </div>
                    <div className='platform'>
                        <h4>Coursera</h4>
                        <img src={link} alt="link"/>
                    </div>
                </div>
                <div className='certificate'>
                    <div className='certificateName'>
                        <h4>Effectively Speaking</h4>
                    </div>
                    <div className='platform'>
                        <h4>NPTEL</h4>
                        <img src={link} alt="link"/>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default Certificate;