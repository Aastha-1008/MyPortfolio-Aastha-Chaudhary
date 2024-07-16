import './myWork.scss';
import wordpressIndo from '../../../../Images/wordpressIndowomen.PNG';
import cxloyaltymena from '../../../../Images/cxloyaltymena.PNG';
import procure from '../../../../Images/Procore.jpg';
import planning from '../../../../Images/planning.PNG';
import golfChallenge from '../../../../Images/golfChallenge.PNG';
import cxloyalty from '../../../../Images/cxloyalty.PNG';
import mapty from '../../../../Images/mapty.PNG';
import movix from '../../../../Images/movix.png';
import shopify from '../../../../Images/shopify.png';
import trafficRacerGame from '../../../../Images/trafficRacerGame.png';
import wordSearch from '../../../../Images/wordSearch.png';
import placementPortal from '../../../../Images/placementPortal.png';

const MyWork = () => {
    return (
        <div className='myWorkSection'>
            <h3>Projects</h3>
            <div className='wordpressProjects'>
                <h4>1 ) Wordpress Project </h4>
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
                <div className="exploreMoreBtn">
                    <h5><a href="project/wordpress"> Explore More <span style={{color:'black'}}> &#8605;</span> </a></h5>
                </div>
                

            </div>
            <div className='websiteProjects'>
                <h4>Website :- </h4>
                <h5>Tech Stack :- <span>HTML , CSS , JavaScript, jQuery , ReactJS</span></h5>
                <div className='projectContainer'>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={movix} alt="thumbnail" />
                        </div>
                        <p>Movix Website</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/Movix-website">🔗</a></p>
                        <div className='content'>
                            <a href="https://websitemovix-qsmafahnf-movixs-projects-1edfa74f.vercel.app/explore/movie">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={cxloyalty} alt="thumbnail" />
                        </div>
                        <p>CxLoyalty Website</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/CSLoyaltyWebsite">🔗</a></p>
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
                        <p>Mapty</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/Mapty-Activity-Updator">🔗</a></p>
                        <div className='content'>
                            <a href="https://aastha-1008.github.io/Mapty-Activity-Updator/">
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
                            <img src={trafficRacerGame} alt="thumbnail" />
                        </div>
                        <p>Traffic Racer Game</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/WordSearchGame">🔗</a></p>
                        <div className='content'>
                            <a href="https://trafficracergame.netlify.app/" >
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={wordSearch} alt="thumbnail" />
                        </div>
                        <p>Word Search Game</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/WordSearchGame">🔗</a></p>
                        <div className='content'>
                            <a href="https://word-searchgame.netlify.app/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='thumbnail'>
                            <img src={placementPortal} alt="thumbnail" />
                        </div>
                        <p>Placement Portal</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/Portal">🔗</a></p>
                        <div className='content'>
                            <a href="https://collegeplacementportal.netlify.app/">
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
                            <img src={shopify} alt="thumbnail" />
                        </div>
                        <p>Shopping Website</p>
                        <p>Code Link : <a href="https://github.com/Aastha-1008/shoppingWebsite">🔗</a></p>
                        <div className='content'>
                            <a href="https://shopyourfavouriteitem.netlify.app/">
                                <button className='button'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyWork;