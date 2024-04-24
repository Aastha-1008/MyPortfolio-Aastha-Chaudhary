import About from './about/about';
import './sidebar.scss';
import Skill from './skills/skill';

const Sidebar = () => {
    return(
        <div className='sidebarSection'>
            <About/>
            <Skill/>
        </div>
    );
}

export default Sidebar;