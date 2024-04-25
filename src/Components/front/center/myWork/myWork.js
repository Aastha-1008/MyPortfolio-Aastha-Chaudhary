import './myWork.scss';
import wordpressIndo from '../../../../Images/wordpressIndowomen.PNG';
import cxloyaltymena from '../../../../Images/cxloyaltymena.PNG';
import procure from '../../../../Images/Procore.jpg';
import laptop from '../../../../Images/laptop.png';
import planning from '../../../../Images/planning.PNG';
import golfChallenge from '../../../../Images/golfChallenge.PNG';
import cxloyalty from '../../../../Images/cxloyalty.PNG';
import mapty from '../../../../Images/mapty.PNG';

const MyWork = () => {
    return (
        <div className='myWorkSection'>
            <h3>Projects</h3>
            <div className='wordpressProjects'>
                <h4>Wordpress Project :- </h4>
                <div className='projectContainer'>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={wordpressIndo} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://indonesia.ksawomenleaders.com/" >
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={cxloyaltymena} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://ksa.cxloyaltymena.com/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={procure} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://bespoke.verve-management.com/procore-smart-build-forum-bridging-the-gap-between-construction-and-technology-riyadh/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='projectContainer'>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={planning} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://bespoke.verve-management.com/how-to-leverage-intelligent-planning-for-success-board-international-riyadh/" >
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={golfChallenge} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://vervecorporatechallenge.vmtestingwebsites.com/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        
                    </div>

                </div>

            </div>
            <div className='websiteProjects'>
                <h4>Website :- </h4>
                <h5>Tech Stack :- <span>HTML , CSS , JavaScript , ReactJS</span></h5>
                <div className='projectContainer'>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={cxloyalty} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://csloyalty.netlify.app/" >
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={mapty} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://aastha-1008.github.io/Mapty-Activity-Updator/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={procure} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://bespoke.verve-management.com/procore-smart-build-forum-bridging-the-gap-between-construction-and-technology-riyadh/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='projectContainer'>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={planning} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://bespoke.verve-management.com/how-to-leverage-intelligent-planning-for-success-board-international-riyadh/" >
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={golfChallenge} alt="thumbnail" />
                        </div>
                        <div className='content'>
                            <a href="https://vervecorporatechallenge.vmtestingwebsites.com/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        
                    </div>

                </div>

            </div>
        </div>
    );
}

export default MyWork;