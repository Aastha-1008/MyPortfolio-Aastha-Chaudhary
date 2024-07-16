import Main from './Main';
import './center.scss';
import MyWork from './myWork/myWork';
import Wordpress from './myWork/wordpress/wordpress';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Center = () => {
    return (
        <div className='centerSection'>
            <Router>
                <Routes>
                    <Route exact path = "/" element ={<Main/>}/>
                    <Route exact path="/project" element={<MyWork />} />
                    <Route exact path="/project/wordpress" element={<Wordpress/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default Center;