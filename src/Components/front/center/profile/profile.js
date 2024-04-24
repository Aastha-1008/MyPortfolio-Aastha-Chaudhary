import './profile.scss';
import leetcode from '../../../../Images/leetcode.png';
import codingNinja from '../../../../Images/coding ninja.png';
import hackerrank from '../../../../Images/hackerrank.png';
import codechef from '../../../../Images/codechef.png';
import codeforces from '../../../../Images/codeforces.png';
import geeksForGeeks from '../../../../Images/gfg.png';

const Profile = () => {
    return(
        <div className='profileSection'>
            <h3>Coding Profile</h3>
            <div className='profile'>
                <div className='p'>
                    <div className='image'>
                        <img src={leetcode} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">Leetcode</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <img src={hackerrank} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">HackerRank</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <img src={geeksForGeeks} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">Geeks For Geeks</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <img src={codingNinja} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">Coding Ninja</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <img src={codechef} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">Codechef</a></h5>
                    </div>
                </div>
                <div className='p'>
                    <div className='image'>
                        <img src={codeforces} alt="coding profile"/>
                    </div>
                    <div className='profileName'>
                        <h5><a href="">Codeforces</a></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;