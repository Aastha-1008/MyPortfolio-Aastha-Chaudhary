import './profile.scss';
import leetcode from '../../../../Images/leetcode.png';
import codingNinja from '../../../../Images/coding ninja.png';
import hackerrank from '../../../../Images/hackerrank.png';
import codechef from '../../../../Images/codechef.png';
import codeforces from '../../../../Images/codeforces.png';
import geeksForGeeks from '../../../../Images/gfg.png';
import { Link } from 'react-router-dom';

const Profile = () => {
    return(
        <div className='profileSection'>
            <h3>Coding Profile</h3>
            <div className='profile'>
                <div className='p'>
                    <div className='image'>
                        <a href="https://leetcode.com/AasthaChaudhary/"><img src={leetcode} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://leetcode.com/AasthaChaudhary/">Leetcode</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <a href="https://www.hackerrank.com/profile/Aastha_chaudhary"><img src={hackerrank} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://www.hackerrank.com/profile/Aastha_chaudhary">HackerRank</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <a href="https://www.geeksforgeeks.org/user/aasthachaudhary237/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"><img src={geeksForGeeks} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://www.geeksforgeeks.org/user/aasthachaudhary237/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">GeeksForGeeks</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <a href="https://www.naukri.com/code360/profile/4af5c365-f12e-4bdc-b5a1-8853d92b3880"><img src={codingNinja} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://www.naukri.com/code360/profile/4af5c365-f12e-4bdc-b5a1-8853d92b3880">Coding Ninja</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <a href="https://www.codechef.com/users/aastha9634"><img src={codechef} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://www.codechef.com/users/aastha9634">Codechef</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <a href="https://codeforces.com/profile/chaudhary_Aastha"><img src={codeforces} alt="coding profile"/></a>
                    </div>
                    <div className='profileName'>
                        <h5><a href="https://codeforces.com/profile/chaudhary_Aastha">Codeforces</a></h5>
                    </div>
                </div>
            </div>
            <div className='projectSection'>
                <div className='tagline'>
                    <h3>
                        Bringing Ideas to Life:<br/> Explore My Projects <span> &#8605;</span>
                    </h3>
                </div>
                <div className="project">
                    <Link to="/project" ><h3>Project</h3></Link>
                </div>
            </div>
        </div>
    );
}

export default Profile;