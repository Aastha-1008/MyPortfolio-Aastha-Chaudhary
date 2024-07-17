import React from 'react';
import './wordpress.scss';
import womenLeader from '../../../../../Images/wordpressIndowomen.PNG';
import procure from '../../../../../Images/Procore.jpg';
import golfchallenge from '../../../../../Images/golfChallenge.PNG';
import cxloyaltymena from '../../../../../Images/cxloyalty.PNG';
import planning from '../../../../../Images/planning.PNG';
import cxloyaltymena4 from '../../../../../Images/cxloyalty4th.png';
import mining from '../../../../../Images/mining.png';
import design1 from '../../../../../Images/design1.png';

export default function wordpress() {
  return (
    <div className='wordpressSection' style={{ backgroundImage: `url(${design1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1>Wordpress Project</h1>
      <div className='wordpressProject'>
        <div className='leftSideProject'>
          <div className='projectSection'>
            <div className='project'>
              <div className='thumbnail'>
                <img src={cxloyaltymena4} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://cxloyaltymena.com/" >
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
            <div className='ProjectNumber-left'>
              <h2>01</h2>
            </div>
          </div>
          <div className='projectSection'>
            <div className='project'>
              <div className='thumbnail'>
                <img src={womenLeader} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://indonesia.ksawomenleaders.com/" >
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
            <div className='ProjectNumber-left'>
              <h2>03</h2>
            </div>
          </div>
          <div className='projectSection'>
            <div className='project'>
              <div className='thumbnail'>
                <img src={procure} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://bespoke.verve-management.com/procore-smart-build-forum-bridging-the-gap-between-construction-and-technology-riyadh/" >
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
            <div className='ProjectNumber-left'>
              <h2>05</h2>
            </div>
          </div>
          <div className='projectSection'>
            <div className='project'>
              <div className='thumbnail'>
                <img src={golfchallenge} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://vervecorporatechallenge.vmtestingwebsites.com/" >
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
            <div className='ProjectNumber-left'>
              <h2>07</h2>
            </div>
          </div>
        </div>
        <hr style={{ border: '2px solid black', zIndex: '5' }} />
        <div className='rightSideProject'>
          <div className='projectSection'>
            <div className='ProjectNumber-right'>
              <h2>02</h2>
            </div>
            <div className='project'>
              <div className='thumbnail'>
                <img src={mining} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://bespoke.verve-management.com/emersons-solution-pathways-for-smart-mining-physical-boardroom-south-africa/">
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='projectSection'>
            <div className='ProjectNumber-right'>
              <h2>04</h2>
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
          </div>
          <div className='projectSection'>
            <div className='ProjectNumber-right'>
              <h2>06</h2>
            </div>
            <div className='project'>
              <div className='thumbnail'>
                <img src={planning} alt="thumbnail" />
              </div>
              <div className='content'>
                <a href="https://bespoke.verve-management.com/how-to-leverage-intelligent-planning-for-success-board-international-riyadh/">
                  <button className='button'>
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
