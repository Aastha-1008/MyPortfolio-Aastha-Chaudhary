import './details.scss';
import edu from '../../../../Images/edu.png';

const Details = () => {
    return (
        <div className='detailsSection'>
            <div className='educationSection '>
                <h3>Education</h3>
                <hr style={{width:'50%',border:'2px solid white',marginLeft:'0px'}}/>
                <div className='data'>
                    <div className='education'>
                        <div className='degreeName inLine '>
                            <div className='name'>
                                <h4>B.Tech in Computer Science</h4>
                            </div>
                            <div className='year'>
                                <h5>2019-2023</h5>
                            </div>
                        </div>
                        <div className='clgName'>
                            <p>KIET Group of Institutions</p>
                        </div>
                        <div className='percentage'>
                            <p>Percentage : <span>88%</span></p>
                        </div>
                    </div>
                    <div className='education'>
                        <div className='degreeName inLine '>
                            <div className='name'>
                                <h4>Intermediate</h4>
                            </div>
                            <div className='year'>
                                <h5>2018-2019</h5>
                            </div>
                        </div>
                        <div className='clgName'>
                            <p>CBSE Board, Ghaziabad</p>
                        </div>
                        <div className='percentage'>
                            <p>Percentage : <span>87%</span></p>
                        </div>
                    </div>

                    <div className='education'>
                        <div className='degreeName inLine '>
                            <div className='name'>
                                <h4>High School</h4>
                            </div>
                            <div className='year'>
                                <h5>2016 - 2017</h5>
                            </div>
                        </div>
                        <div className='clgName'>
                            <p>CBSE Board, Ghaziabad</p>
                        </div>
                        <div className='percentage'>
                            <p>CGPA : <span>10</span></p>
                        </div>
                    </div>
                    <div className='eduImg'>
                        <img src={edu} alt="learning"/>
                    </div>
                </div>
            </div>



            <div className='experienceSection'>
                <h3>Work Experience</h3>
                <hr style={{width:'50%',border:'2px solid white',marginLeft:'0px'}}/>
                <div className='experience block'>
                    <div className='CompanyNameYear inLine'>
                        <h4>Web Developer</h4>
                        <p>Jan'24 - Current</p>
                    </div>
                    <div className='task'>
                        <h5>Tasks :-</h5>
                        <ul>
                            <li>Create & Manage Website for events host by company.</li>
                            <li>TechStack :<span> Wordpress , ReactJs</span> </li>
                        </ul>
                    </div>
                </div>
                <div className='experience block'>
                    <div className='CompanyNameYear inLine'>
                        <h4>SDE</h4>
                        <p>Jan'23 - Jan'24</p>
                    </div>
                    <div className='task'>
                        <h5>Tasks :-</h5>
                        <ul>
                            <li>Transformed project sections from a Spring and JSP tech stack to a React and Spring Boot tech stack.</li>
                            <li>Proficient in CRUD operations.</li>
                            <li>KEYCLOAK – Integrate keycloak login and google sign-in with one of the existing project.</li>
                            <li>AWS Textract – Use textract to extract data from uploaded file on S3 Bucket and use to show data pre-filled.</li>
                            <li>Use CDN to fetch data instead of directly fetching it from S3 bucket.</li>
                            <li>Proficiency in Hibernate</li>
                            <li>TechStack :<span> ReactJs, SpringBoot , MySQL , KEYCLOAK</span> </li>
                        </ul>
                    </div>
                </div>
                <div className='experience block'>
                    <div className='CompanyNameYear inLine'>
                        <h4>Coding Ninja</h4>
                        <p>Sept'21 - Jan'22</p>
                    </div>
                    <div className='task'>
                        <h5>Tasks :-</h5>
                        <ul>
                            <li>Organized tech competition related event.</li>
                            <li>Organized workshop for college student.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;